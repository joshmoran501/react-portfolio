import React from "react";
import AICybersecurityPDF from "../../assets/documents/Implications of AI in Cybersecurity.pdf";

export default function AICybersecurity() {
  return (
    <div className="pdf-page">
      <div className="pdf-page-header d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
        <h1 className="page-title mb-0">Implications of AI in Cybersecurity</h1>
        <a
          className="download-btn"
          href={AICybersecurityPDF}
          download="Implications-of-AI-in-Cybersecurity.pdf"
        >
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
