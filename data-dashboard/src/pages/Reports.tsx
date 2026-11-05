import { Download, FileBarChart } from "lucide-react";

export default function Reports() {
  return (
    <div className="stack">
      <div>
        <h2 className="section-heading">Reports & exports</h2>
        <p className="section-subtitle">
          A small reporting workflow powered by local mock data.
        </p>
      </div>
      <div className="report-grid">
        <article className="report-card">
          <FileBarChart className="report-icon-violet" size={24} />
          <h3>Executive statistics summary</h3>
          <p>
            The sample organisation has a security score of 78/100 and 43 open
            findings. Identity and cloud configuration are the highest-priority
            areas for remediation.
          </p>
        </article>
        <article className="report-card">
          <Download className="report-icon-blue" size={24} />
          <h3>Findings export</h3>
          <p>
            Download the fictional findings dataset as a CSV file. No backend is
            required.
          </p>
          <button className="primary-button">
            <Download size={15} />
            Download findings CSV
          </button>
        </article>
      </div>
      <p className="prototype-note">
        Prototype note: no live scan, real customer data or risk assessment is
        connected.
      </p>
    </div>
  );
}
