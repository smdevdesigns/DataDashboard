
import { useState, type ReactNode } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface CollapsibleSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function CollapsibleSection({
  title,
  subtitle,
  children,
  defaultOpen = true,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className="collapsible-section">
      <div className="collapsible-header">
        <div className="collapsible-heading">
          <h2 className="section-heading">{title}</h2>
          {subtitle && (
            <p className="section-subtitle">{subtitle}</p>
          )}
        </div>
        <button
          type="button"
          className="collapse-chevron"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={`${isOpen ? "Collapse" : "Expand"} ${title}`}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <ChevronDown size={16} strokeWidth={1.8} />
          ) : (
            <ChevronRight size={16} strokeWidth={1.8} />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="collapsible-content">
          {children}
        </div>
      )}
    </section>
  );
}
