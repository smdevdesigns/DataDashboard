import { controls } from "../data/mockData";
function tone(score: number) {
  return score >= 80 ? "healthy" : score < 55 ? "risk" : "attention";
}
export default function Controls() {
  return (
    <div className="stack">
      <div>
        <h2 className="section-heading">Security control coverage</h2>
        <p className="section-subtitle">
          Illustrative maturity scores across key security domains.
        </p>
      </div>
      <div className="control-grid">
        {controls.map((c) => (
          <article key={c.name} className="control-card">
            <div className="control-meta">
              <span>{c.group}</span>
              <span className={tone(c.score)}>{c.status}</span>
            </div>
            <h3 className="control-name">{c.name}</h3>
            <p className="control-description">{c.description}</p>
            <div className="control-score">
              {c.score}
              <span>%</span>
            </div>
            <div className="progress-track">
              <div
                className={`progress-fill fill-${tone(c.score)}`}
                style={{ width: `${c.score}%` }}
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
