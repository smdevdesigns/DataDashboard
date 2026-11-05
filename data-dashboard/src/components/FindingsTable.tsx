import { useMemo, useState } from "react";
import {
  Search,
  Filter,
  ChevronDown,
} from "lucide-react";

import {
  findings,
  type Severity,
} from "../data/mockData";

type FindingsTableProps = {
  compact?: boolean;
};

type SeverityFilter = "All" | Severity;

const severityClass: Record<Severity, string> = {
  Critical: "severity-critical",
  High: "severity-high",
  Medium: "severity-medium",
  Low: "severity-low",
};

export default function FindingsTable({
  compact = false,
}: FindingsTableProps) {
  const [query, setQuery] = useState("");
  const [severity, setSeverity] =
    useState<SeverityFilter>("All");
  const filtered = useMemo(() => {
    return findings.filter((finding) => {
      const searchText = `
        ${finding.title}
        ${finding.asset}
        ${finding.id}
        ${finding.owner}
      `;

      const matchesSearch = searchText
        .toLowerCase()
        .includes(query.toLowerCase());

      const matchesSeverity =
        severity === "All" ||
        finding.severity === severity;

      return matchesSearch && matchesSeverity;
    });
  }, [query, severity]);

  const rows = compact
    ? filtered.slice(0, 5)
    : filtered;

  return (
    <section className="findings-panel">
      <div className="findings-header">
        <div className="findings-heading">
          <h2>Priority findings</h2>
          <p>
            Issues requiring review and remediation
          </p>
        </div>
        <div className="findings-actions">
          <label className="findings-search">
            <Search
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />

            <input
              type="text"
              aria-label="Search findings"
              value={query}
              onChange={(e) =>
                setQuery(e.target.value)
              }
              placeholder="Search findings..."
            />
          </label>
          <label className="findings-filter">
            <Filter
              size={15}
              strokeWidth={2}
              aria-hidden="true"
            />

            <span className="sr-only">
              Filter by severity
            </span>
            <span className="findings-filter-select">
              <select
                aria-label="Filter severity"
                value={severity}
                onChange={(e) =>
                  setSeverity(
                    e.target.value as SeverityFilter
                  )
                }
              >
                <option value="All">
                  All severities
                </option>

                {(
                  [
                    "Critical",
                    "High",
                    "Medium",
                    "Low",
                  ] as Severity[]
                ).map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>

              <ChevronDown
                className="findings-filter-chevron"
                size={15}
                strokeWidth={2.5}
                aria-hidden="true"
              />
            </span>
          </label>
        </div>
      </div>
      <div className="findings-table-wrapper">
        <table className="findings-table">
          <thead>
            <tr>
              <th>Finding</th>
              <th>Asset</th>
              <th>Severity</th>
              <th>Status</th>
              <th>Exposure</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((finding) => (
              <tr key={finding.id}>
                <td>
                  <div className="finding-title">
                    {finding.title}
                  </div>
                  <div className="finding-meta">
                    {finding.id} · {finding.owner}
                  </div>
                </td>
                <td className="finding-asset">
                  {finding.asset}
                </td>

                <td>
                  <span
                    className={`severity-badge ${
                      severityClass[finding.severity]
                    }`}
                  >
                    <span className="severity-indicator" />
                    {finding.severity}
                  </span>
                </td>
                <td>
                  <span className="finding-status">
                    {finding.status}
                  </span>
                </td>
                <td className="finding-exposure">
                  {finding.exposure}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length === 0 && (
          <div className="findings-empty">
            <Search size={26} />
            <p>
              No findings match your search.
            </p>
            <span>
              Try changing your search or severity filter.
            </span>
          </div>
        )}
      </div>
      <div className="findings-footer">
        <span>
          Showing {rows.length} of {filtered.length} matching findings
        </span>
        {compact && (
          <span className="findings-demo-label">
            DEMO DATA
          </span>
        )}
      </div>
    </section>
  );
}