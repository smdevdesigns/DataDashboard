import ReactECharts from "echarts-for-react";
import { trend } from "../data/mockData";

type TrendItem = {
  month: string;
  score: number;
};

type SeverityItem = {
  name: string;
  value: number;
  color: string;
};

const severityData: SeverityItem[] = [
  { name: "Critical", value: 5, color: "#ef4444" },
  { name: "High", value: 12, color: "#f97316" },
  { name: "Medium", value: 16, color: "#eab308" },
  { name: "Low", value: 10, color: "#22c55e" },
];

const trendData = trend as TrendItem[];

const tooltipStyle = {
  backgroundColor: "#151c2c",
  borderColor: "#334155",
  borderWidth: 1,
  borderRadius: 12,
  textStyle: {
    color: "#e2e8f0",
  },
};

export function TrendChart() {
  const option = {
    backgroundColor: "transparent",

    tooltip: {
      trigger: "axis",
      ...tooltipStyle,
    },

    grid: {
      top: 15,
      right: 15,
      bottom: 25,
      left: 35,
      containLabel: true,
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: trendData.map((d) => d.month),

      axisLine: {
        show: false,
      },

      axisTick: {
        show: false,
      },

      axisLabel: {
        color: "#718096",
        fontSize: 11,
      },
    },

    yAxis: {
      type: "value",
      min: 40,
      max: 100,

      axisLine: {
        show: false,
      },

      axisTick: {
        show: false,
      },

      axisLabel: {
        color: "#718096",
        fontSize: 11,
      },

      splitLine: {
        lineStyle: {
          color: "#263247",
          type: "dashed",
        },
      },
    },

    series: [
      {
        name: "Score",
        type: "line",
        smooth: true,
        data: trendData.map((d) => d.score),
        symbol: "circle",
        symbolSize: 6,
        lineStyle: {
          color: "#a78bfa",
          width: 2.5,
        },

        itemStyle: {
          color: "#a78bfa",
        },

        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(167, 139, 250, 0.35)",
              },
              {
                offset: 1,
                color: "rgba(167, 139, 250, 0)",
              },
            ],
          },
        },
      },
    ],
  };

  return (
    <section className="panel">
      <h2 className="panel-title">Security statistics trend</h2>

      <p className="panel-subtitle">Monthly score · last 7 months</p>

      <div className="chart-area trend-chart-area">
        <ReactECharts
          option={option}
          autoResize={true}
          style={{
            width: "100%",
            height: "100%",
          }}
          opts={{
            renderer: "svg",
          }}
          notMerge={true}
          lazyUpdate={true}
        />
      </div>
    </section>
  );
}

export function SeverityChart() {
  const totalFindings = severityData.reduce(
    (total, item) => total + item.value,
    0,
  );

  const option = {
    backgroundColor: "transparent",

    tooltip: {
      trigger: "item",
      ...tooltipStyle,
      formatter: "{b}: {c} ({d}%)",
    },

    series: [
      {
        name: "Findings",
        type: "pie",
        radius: ["60%", "82%"],
        center: ["50%", "50%"],
        padAngle: 4,
        avoidLabelOverlap: true,

        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },

        itemStyle: {
          borderRadius: 4,
          borderColor: "transparent",
          borderWidth: 2,
        },

        data: severityData.map((d) => ({
          name: d.name,
          value: d.value,
          itemStyle: {
            color: d.color,
          },
        })),
      },
    ],
  };

  return (
    <section className="panel">
      <h2 className="panel-title">Findings by severity</h2>
      <p className="panel-subtitle">Current open risk distribution</p>
      <div className="donut-area severity-chart-area">
        <ReactECharts
          option={option}
          autoResize={true}
          style={{
            width: "100%",
            height: "100%",
          }}
          opts={{
            renderer: "svg",
          }}
          notMerge={true}
          lazyUpdate={true}
        />
        <div className="donut-center">
          <b className="donut-total">{totalFindings}</b>
          <span className="tiny muted">Total findings</span>
        </div>
      </div>
      <div className="legend-grid">
        {severityData.map((d) => (
          <div key={d.name} className="legend-item">
            <span className="legend-name">
              <i className="legend-dot" style={{ background: d.color }} />
              {d.name}
            </span>
            <b>{d.value}</b>
          </div>
        ))}
      </div>
    </section>
  );
}
