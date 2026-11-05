import {
  BarChart3,
  ClipboardCheck,
  FileText,
  Shield,
  ShieldAlert,
} from "lucide-react";

export type Page = "Overview" | "Controls" | "Findings" | "Reports";

interface SidebarProps {
  page: Page;
  setPage: (page: Page) => void;
}

const nav = [
  { name: "Overview" as const, Icon: BarChart3 },
  { name: "Controls" as const, Icon: ClipboardCheck },
  { name: "Findings" as const, Icon: ShieldAlert },
  { name: "Reports" as const, Icon: FileText },
];

export default function Sidebar({ page, setPage }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">
          <Shield size={20} />
        </div>
        <div>
          <div className="brand-name">SOPHWARE</div>
          <div className="brand-subtitle">Risk intelligence</div>
        </div>
      </div>
      <div className="nav-label">Workspace</div>
      <nav className="nav-list" aria-label="Main navigation">
        {nav.map(({ name, Icon }) => (
          <button
            key={name}
            type="button"
            onClick={() => setPage(name)}
            className={`nav-button ${page === name ? "active" : ""}`}
            aria-current={page === name ? "page" : undefined}
          >
            <Icon size={18} />
            <span>{name}</span>
            {name === "Findings" && (
              <span className="nav-count">43</span>
            )}
          </button>
        ))}
      </nav>
      <div className="system-status">
        <div className="small">● System status</div>
        <p className="small muted">
          All demo services operational
        </p>
        <div className="status-track">
          <div className="status-fill" />
        </div>
      </div>
    </aside>
  );
}