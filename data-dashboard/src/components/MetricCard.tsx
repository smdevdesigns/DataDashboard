
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

type Metric = {
  label: string;
  value: string;
  suffix: string;
  change: string;
  note: string;
  good: boolean;
};

interface MetricCardProps {
  item: Metric;
}

export default function MetricCard({ item }: MetricCardProps) {
  return (
    <article className="metric-card">
      <div className="metric-label">
        {item.label}
      </div>

      <div className="metric-value">
        {item.value}
        <span className="small muted"> {item.suffix}</span>
      </div>

      <div className={`metric-change ${item.good ? "good" : "bad"}`}>
        {item.good ? (
          <ArrowDownRight size={14} strokeWidth={2.5} />
        ) : (
          <ArrowUpRight size={14} strokeWidth={2.5} />
        )}

        <span>{item.change}</span>

        <span className="muted">{item.note}</span>
      </div>
    </article>
  );
}
