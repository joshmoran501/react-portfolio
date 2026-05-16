import React from "react";
import AICybersecurityPDF from "../../assets/documents/Implications of AI in Cybersecurity.pdf";
import DownloadIcon from "../../assets/images/download-solid-full.svg";

export default function AICybersecurity() {
  return (
    <div className="pdf-page">
      <div className="pdf-page-header d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
        <h1 className="page-title mb-0">Implications of AI in Cybersecurity</h1>
        <a
          className="download-btn d-inline-flex align-items-center gap-2"
          href={AICybersecurityPDF}
          download="Implications-of-AI-in-Cybersecurity.pdf"
          role="button"
        >
          <img src={DownloadIcon} alt="" aria-hidden="true" className="download-btn-icon" />
          Download PDF
        </a>
      </div>
      <div className="pdf-viewer">
        <iframe
          src={AICybersecurityPDF}
          title="Implications of AI in Cybersecurity"
          width="100%"
          height="100%"
        >
          <p>
            Your browser does not support inline PDFs.{" "}
            <a href={AICybersecurityPDF} download>
              Download the PDF
            </a>{" "}
            to view it.
          </p>
        </iframe>
      </div>
    </div>
  );
}
