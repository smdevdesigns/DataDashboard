import { lazy, Suspense, useState } from "react";
import { Menu, X } from "lucide-react";

import Sidebar, { type Page } from "./components/Sidebar";
import CollapsibleSection from "./components/CollapsibleSection";
import MetricCard from "./components/MetricCard";
import FindingsTable from "./components/FindingsTable";
import { metrics } from "./data/mockData";

const TrendChart = lazy(() =>
  import("./components/Charts").then((module) => ({
    default: module.TrendChart,
  })),
);

const SeverityChart = lazy(() =>
  import("./components/Charts").then((module) => ({
    default: module.SeverityChart,
  })),
);

const Controls = lazy(() => import("./pages/Controls"));
const Reports = lazy(() => import("./pages/Reports"));

function LoadingFallback() {
  return (
    <div className="component-loading" role="status">
      Loading...
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("Overview");
  const [menuOpen, setMenuOpen] = useState(false);

  const handlePageChange = (newPage: Page) => {
    setPage(newPage);
    setMenuOpen(false);
  };

  return (
    <div className="app-shell">
      <button
        type="button"
        className="mobile-menu-button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="main-sidebar"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {menuOpen && (
        <button
          type="button"
          className="sidebar-overlay"
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation menu"
        />
      )}

      <div
        id="main-sidebar"
        className={`sidebar-container ${menuOpen ? "sidebar-open" : ""}`}
      >
        <Sidebar page={page} setPage={handlePageChange} />
      </div>

      <main className="main-content">
        <header className="page-header">
          <p className="breadcrumb">Workspace / {page}</p>
          <h1 className="page-title">{page}</h1>
        </header>

        <div className="page-container">
          <div className="demo-banner">
            <span>
              <b>DEMO WORKSPACE</b>
              <span className="demo-note">
                Illustrative fictional data · Not connected to live systems
              </span>
            </span>
            <span className="demo-tag">Prototype</span>
          </div>

          {page === "Overview" && (
            <div className="overview-page">
              <div className="overview-intro">
                <p className="overview-date">25th October 2026</p>
                <p className="overview-description">
                  Your organisation's security statistics at a glance.
                </p>
              </div>

              <CollapsibleSection
                title="Security analytics"
                subtitle="Visual overview of your security performance."
                defaultOpen={true}
              >
                <div className="metric-grid">
                  {metrics.map((metric) => (
                    <MetricCard key={metric.label} item={metric} />
                  ))}
                </div>
              </CollapsibleSection>

              <CollapsibleSection
                title="Security analytics"
                subtitle="Visual overview of your security performance."
                defaultOpen={true}
              >
                <Suspense fallback={<LoadingFallback />}>
                  <div className="chart-grid">
                    <div className="overview-chart">
                      <SeverityChart />
                    </div>
                    <div className="overview-chart">
                      <TrendChart />
                    </div>
                  </div>
                </Suspense>
              </CollapsibleSection>

              <CollapsibleSection
                title="Needs your attention"
                subtitle="Highest-priority sample risks."
                defaultOpen={true}
              >
                <div className="findings-container">
                  <FindingsTable compact />
                </div>
              </CollapsibleSection>
            </div>
          )}

          {page === "Controls" && (
            <Suspense fallback={<LoadingFallback />}>
              <Controls />
            </Suspense>
          )}

          {page === "Findings" && <FindingsTable />}

          {page === "Reports" && (
            <Suspense fallback={<LoadingFallback />}>
              <Reports />
            </Suspense>
          )}

          <footer className="page-footer">
            SOPHWARE · CYBERSECURITY RISK INTELLIGENCE · FICTIONAL PROTOTYPE
            DATA
          </footer>
        </div>
      </main>
    </div>
  );
}
