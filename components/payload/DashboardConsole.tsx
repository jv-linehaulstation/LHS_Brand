import React from "react";

/* LineHaul Station — Operations Dashboard console.
   Rendered via admin.components.beforeDashboard; the default Payload dashboard
   widgets are hidden by custom.css so this is the /admin landing screen.
   Metrics are representative (from the LineHaul Station Admin design) — the
   ops feeds (occupancy, gates, fleet) aren't wired to live data yet. */

const ORANGE = "#F07820";
const CARD = "#141414";
const BORDER = "rgba(176,176,176,0.14)";
const MICH = "'Michroma',sans-serif";
const ARCH = "'Archivo',sans-serif";
const MONO = "'JetBrains Mono',monospace";
const NEWS = "'Newsreader',serif";

const kpis = [
  { label: "Parking Occupancy", value: "72%", sub: "130 of 180 spaces", delta: "▲ 6%", deltaColor: "#18A848" },
  { label: "Active Members", value: "248", sub: "12 pending renewal", delta: "▲ 4", deltaColor: "#18A848" },
  { label: "OneHome Nights (MTD)", value: "1,904", sub: "$36.1K billed", delta: "▲ 11%", deltaColor: "#18A848" },
  { label: "Open Work Orders", value: "4", sub: "1 awaiting parts", delta: "▼ 2", deltaColor: "#D02020" },
];

const bars = [
  { h: 40, t: "2a" }, { h: 34, t: "4a" }, { h: 52, t: "6a" }, { h: 78, t: "8a" },
  { h: 110, t: "10a" }, { h: 132, t: "12p" }, { h: 120, t: "2p" }, { h: 98, t: "4p" },
  { h: 86, t: "6p" }, { h: 70, t: "8p" }, { h: 54, t: "10p" }, { h: 44, t: "12a" },
].map((b) => ({ ...b, c1: b.h > 115 ? "#FBB04A" : ORANGE, c2: b.h > 115 ? "#C85A12" : "#7a3608" }));

const gates = [
  { dir: "IN ▸", dirColor: "#18A848", plate: "AR 7T-4821", carrier: "Swift Line Freight", gate: "Gate 2", time: "14:31" },
  { dir: "OUT ◂", dirColor: ORANGE, plate: "TN 9R-1160", carrier: "Delta Haul Co", gate: "Gate 1", time: "14:28" },
  { dir: "IN ▸", dirColor: "#18A848", plate: "MS 3K-8890", carrier: "Redline Carriers", gate: "Gate 2", time: "14:19" },
  { dir: "IN ▸", dirColor: "#18A848", plate: "AR 5M-2043", carrier: "Owner-Operator", gate: "Gate 3", time: "14:05" },
  { dir: "OUT ◂", dirColor: ORANGE, plate: "TX 1B-7752", carrier: "Lonestar Logistics", gate: "Gate 1", time: "13:52" },
];

const orders = [
  { job: "Brake inspection", unit: "Unit #4821 · Swift", status: "In Bay", statusColor: ORANGE, dot: ORANGE },
  { job: "Tire replacement", unit: "Unit #1160 · Delta", status: "Awaiting Parts", statusColor: "#D02020", dot: "#D02020" },
  { job: "PM service", unit: "Unit #8890 · Redline", status: "Scheduled", statusColor: "#7EC8E3", dot: "#7EC8E3" },
  { job: "Truck wash + detail", unit: "Unit #2043 · O/O", status: "Complete", statusColor: "#18A848", dot: "#18A848" },
];

const panel: React.CSSProperties = {
  background: CARD,
  border: `1px solid ${BORDER}`,
  borderRadius: 7,
  overflow: "hidden",
};
const panelHead: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 22px",
  borderBottom: "1px solid rgba(176,176,176,0.1)",
};
const panelTitle: React.CSSProperties = {
  fontFamily: ARCH,
  fontWeight: 800,
  fontSize: 15,
  textTransform: "uppercase",
  color: "#fff",
};

export const DashboardConsole = () => (
  <div className="lhs-console">
    {/* Header band */}
    <div className="lhs-console__head">
      <div>
        <div style={{ fontFamily: MICH, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: ORANGE }}>
          West Memphis Hub
        </div>
        <div style={{ fontFamily: ARCH, fontWeight: 900, fontSize: 22, textTransform: "uppercase", color: "#fff", lineHeight: 1, marginTop: 5 }}>
          Operations Dashboard
        </div>
      </div>
      <a href="/admin/collections/posts" className="lhs-console__cta">Manage Blog →</a>
    </div>

    <div className="lhs-console__body">
      {/* KPI row */}
      <div className="lhs-kpis">
        {kpis.map((k) => (
          <div key={k.label} style={{ padding: "1.5px", borderRadius: 7, background: "linear-gradient(135deg,#6b5942,#0a0a0a 45%,#0a0a0a 55%,#5b4a36)" }}>
            <div style={{ background: CARD, borderRadius: 6, padding: "20px 22px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ fontFamily: MICH, fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "#9a9a9a", maxWidth: 130, lineHeight: 1.5 }}>{k.label}</div>
                <span style={{ fontFamily: MONO, fontSize: 11, color: k.deltaColor }}>{k.delta}</span>
              </div>
              <div style={{ fontFamily: ARCH, fontWeight: 900, fontSize: 36, color: "#fff", lineHeight: 1, marginTop: 14 }}>{k.value}</div>
              <div style={{ fontFamily: NEWS, fontSize: 13, color: "#8a8a8a", marginTop: 6 }}>{k.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Occupancy chart + capacity donut */}
      <div className="lhs-row-2">
        <div style={{ ...panel, padding: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 22 }}>
            <div>
              <div style={{ fontFamily: MICH, fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: ORANGE }}>Parking Occupancy</div>
              <div style={{ fontFamily: ARCH, fontWeight: 800, fontSize: 18, textTransform: "uppercase", color: "#fff", marginTop: 5 }}>Last 12 Hours</div>
            </div>
            <div style={{ fontFamily: MONO, fontSize: 12, color: "#8a8a8a" }}>Peak <span style={{ color: ORANGE }}>88%</span></div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 150 }}>
            {bars.map((b, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                <div style={{ width: "100%", height: b.h, background: `linear-gradient(180deg,${b.c1},${b.c2})`, borderRadius: "3px 3px 0 0" }} />
                <div style={{ fontFamily: MONO, fontSize: 8, color: "#6a6a6a" }}>{b.t}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ ...panel, padding: 24, display: "flex", flexDirection: "column" }}>
          <div style={{ fontFamily: MICH, fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: ORANGE }}>Live Capacity</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1, padding: "14px 0" }}>
            <div style={{ position: "relative", width: 150, height: 150, borderRadius: "50%", background: "conic-gradient(#F07820 0% 72%, #2a2a2a 72% 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 112, height: 112, borderRadius: "50%", background: CARD, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ fontFamily: ARCH, fontWeight: 900, fontSize: 32, color: "#fff", lineHeight: 1 }}>72%</div>
                <div style={{ fontFamily: MONO, fontSize: 9, color: "#8a8a8a", marginTop: 3 }}>130 / 180</div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: MONO, fontSize: 11, color: "#8a8a8a" }}>
            <span><span style={{ color: ORANGE }}>●</span> Occupied 130</span>
            <span><span style={{ color: "#4a4a4a" }}>●</span> Open 50</span>
          </div>
        </div>
      </div>

      {/* Gate activity + work orders */}
      <div className="lhs-row-3">
        <div style={panel}>
          <div style={panelHead}>
            <div style={panelTitle}>Gate Activity · Live</div>
            <a href="/admin/collections/posts" style={{ fontFamily: MICH, fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: ORANGE, textDecoration: "none" }}>View All →</a>
          </div>
          {gates.map((g, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "13px 22px", borderBottom: "1px solid rgba(176,176,176,0.07)" }}>
              <span style={{ fontFamily: MONO, fontSize: 11, color: g.dirColor, width: 38 }}>{g.dir}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: MONO, fontSize: 13, color: "#fff" }}>{g.plate}</div>
                <div style={{ fontFamily: NEWS, fontSize: 12, color: "#8a8a8a" }}>{g.carrier}</div>
              </div>
              <span style={{ fontFamily: MONO, fontSize: 11, color: "#8a8a8a" }}>{g.gate}</span>
              <span style={{ fontFamily: MONO, fontSize: 11, color: "#6a6a6a", width: 52, textAlign: "right" }}>{g.time}</span>
            </div>
          ))}
        </div>

        <div style={panel}>
          <div style={panelHead}>
            <div style={panelTitle}>Fleet Work Orders</div>
            <span style={{ fontFamily: MONO, fontSize: 10, color: "#0B0B0B", background: ORANGE, borderRadius: 9, padding: "2px 8px" }}>4 open</span>
          </div>
          {orders.map((o, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 22px", borderBottom: "1px solid rgba(176,176,176,0.07)" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: o.dot, flex: "none" }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: ARCH, fontWeight: 600, fontSize: 13, color: "#fff" }}>{o.job}</div>
                <div style={{ fontFamily: MONO, fontSize: 11, color: "#8a8a8a" }}>{o.unit}</div>
              </div>
              <span style={{ fontFamily: MICH, fontSize: 8, letterSpacing: "0.1em", textTransform: "uppercase", color: o.statusColor }}>{o.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default DashboardConsole;
