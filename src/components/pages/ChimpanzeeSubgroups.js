import React from "react";
import ChimpanzeeSubgroupsPDF from "../../assets/documents/Chimpanzee Subgroups.pdf";

export default function ChimpanzeeSubgroups() {
  return (
    <div className="pdf-page">
      <div className="pdf-page-header d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
        <h1 className="page-title mb-0">Chimpanzee Subgroups</h1>
        <a
          className="download-btn"
          href={ChimpanzeeSubgroupsPDF}
          download="Chimpanzee-Subgroups.pdf"
        >
          Download PDF
        </a>
      </div>
      <div className="pdf-viewer">
        <iframe
          src={ChimpanzeeSubgroupsPDF}
          title="Chimpanzee Subgroups"
          width="100%"
          height="100%"
        >
          <p>
            Your browser does not support inline PDFs.{" "}
            <a href={ChimpanzeeSubgroupsPDF} download>
              Download the PDF
            </a>{" "}
            to view it.
          </p>
        </iframe>
      </div>
    </div>
  );
}
