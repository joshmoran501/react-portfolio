import React from "react";
import AUPPDF from "../../assets/documents/UAP.pdf";
import DownloadIcon from "../../assets/images/download-solid-full.svg";

export default function AcceptableUsePolicy() {
  return (
    <div className="pdf-page">
      <div className="pdf-page-header d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
        <h1 className="page-title mb-0">Sample Authorized Use Policy</h1>
        <a
          className="download-btn d-inline-flex align-items-center gap-2"
          href={AUPPDF}
          download="Sample-Authorized-Use-Policy.pdf"
          role="button"
        >
          <img src={DownloadIcon} alt="" aria-hidden="true" className="download-btn-icon" />
          Download PDF
        </a>
      </div>
      <div className="pdf-viewer">
        <iframe
          src={AUPPDF}
          title="Sample Authorized Use Policy"
          width="100%"
          height="100%"
        >
          <p>
            Your browser does not support inline PDFs.{" "}
            <a href={AUPPDF} download>
              Download the PDF
            </a>{" "}
            to view it.
          </p>
        </iframe>
      </div>
    </div>
  );
}
