import React from "react";
import AUPPDF from "../../assets/documents/UAP.pdf";

export default function AcceptableUsePolicy() {
  return (
    <div className="pdf-page">
      <div className="pdf-page-header d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
        <h1 className="page-title mb-0">Sample Authorized Use Policy</h1>
        <a
          className="download-btn"
          href={AUPPDF}
          download="Sample-Authorized-Use-Policy.pdf"
        >
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
