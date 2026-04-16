export function CategoryLayerDiagram() {
  const CX = 240, CY = 240;

  // Three layer nodes — center positions
  const layers = [
    { label: "Systems of Record", sub: "CRM · ERP · Databases",              y: 370, color: "#AABFD8", dotColor: "#7C9BFF", r: 38 },
    { label: "Execution Tools",   sub: "Dashboards · Copilots · Automation",  y: 240, color: "#DCE8F5", dotColor: "#5DDFF0", r: 46 },
    { label: "Alethi",            sub: "INTELLIGENCE",                         y:  96, color: "#F7FAFD", dotColor: "#5DDFF0", r: 58, isCenter: true },
  ];

  // Side annotation nodes for Alethi
  const alethiSubs = [
    { label: "Strategy",  angle: 210, r: 130 },
    { label: "Decisions", angle: 270, r: 130 },
    { label: "Adaptation",angle: 330, r: 130 },
  ];

  function toXY(angle: number, r: number, cx = CX, cy = 96) {
    const rad = ((angle - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  const alethiPoints = alethiSubs.map((n) => ({ ...n, ...toXY(n.angle, n.r) }));

  return (
    <div className="relative w-full max-w-2xl mx-auto select-none mt-8" aria-hidden="true">
      <svg viewBox="0 0 480 480" className="w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="clGlow1" cx="50%" cy="20%" r="40%">
            <stop offset="0%" stopColor="#5DDFF0" stopOpacity="0.12"/>
            <stop offset="100%" stopColor="#5DDFF0" stopOpacity="0"/>
          </radialGradient>
          <style>{`
            @keyframes clUp {
              0%   { stroke-dashoffset: 120; opacity: 0.2; }
              50%  { opacity: 0.9; }
              100% { stroke-dashoffset: 0;   opacity: 0.2; }
            }
            @keyframes clRing { 0%,100%{opacity:0.6} 50%{opacity:1} }
            .cl-up   { stroke-dasharray: 120; animation: clUp 3.2s ease-in-out infinite; }
            .cl-ring { animation: clRing 4s ease-in-out infinite; }
          `}</style>
        </defs>

        <circle cx={CX} cy="96" r="140" fill="url(#clGlow1)"/>

        {/* Vertical connectors between layers */}
        <line x1={CX} y1={350} x2={CX} y2={300}
          stroke="#7C9BFF" strokeWidth="1.2" className="cl-up"/>
        <line x1={CX} y1={210} x2={CX} y2={162}
          stroke="#5DDFF0" strokeWidth="1.2" className="cl-up"
          style={{ animationDelay: "0.8s" }}/>

        {/* Layer annotation text */}
        <text x="20" y="374" fill="#AABFD8" fontSize="12" fontFamily="Inter, sans-serif" opacity="0.5">track</text>
        <text x="20" y="244" fill="#AABFD8" fontSize="12" fontFamily="Inter, sans-serif" opacity="0.6">automate</text>
        <text x="20" y="100" fill="#5DDFF0" fontSize="12" fontFamily="Inter, sans-serif" opacity="0.7">decide + evolve</text>

        {/* Bottom two layer nodes */}
        {layers.slice(0, 2).map((l) => (
          <g key={l.label}>
            <circle cx={CX} cy={l.y} r={l.r}
              fill="none" stroke="#2E4A70" strokeWidth="1.5"/>
            <circle cx={CX} cy={l.y} r={l.r - 8} fill="#0F1E34"/>
            <text x={CX} y={l.y - 4} textAnchor="middle"
              fill={l.color} fontSize="13"
              fontFamily="Space Grotesk, sans-serif" fontWeight="600">
              {l.label}
            </text>
            <text x={CX} y={l.y + 13} textAnchor="middle"
              fill="#AABFD8" fontSize="10"
              fontFamily="Inter, sans-serif">
              {l.sub}
            </text>
          </g>
        ))}

        {/* Alethi sub-nodes */}
        {alethiPoints.map((n) => (
          <g key={n.label}>
            <line x1={CX} y1={96} x2={n.x} y2={n.y}
              stroke="#5DDFF0" strokeWidth="1.2" className="cl-up"
              style={{ animationDelay: `${alethiSubs.indexOf(n as typeof alethiSubs[0]) * 0.5 + 1.5}s` }}/>
            <circle cx={n.x} cy={n.y} r="5" fill="#5DDFF0" opacity="0.85"/>
            <text x={n.x} y={n.y + (n.y > 96 ? 16 : -12)}
              textAnchor="middle"              fill="#AABFD8"
              fontSize="12" fontFamily="Inter, sans-serif">
              {n.label}
            </text>
          </g>
        ))}

        {/* Alethi center — same as hero */}
        <circle cx={CX} cy={96} r="58"
          fill="none" stroke="#2E4A70" strokeWidth="1.5"
          className="cl-ring"/>
        <circle cx={CX} cy={96} r="50" fill="#0F1E34"/>
        <text x={CX} y={90} textAnchor="middle"
          fill="#F7FAFD" fontSize="18"
          fontFamily="Space Grotesk, sans-serif" fontWeight="700">
          Alethi
        </text>
        <text x={CX} y={107} textAnchor="middle"
          fill="#5DDFF0" fontSize="9"
          fontFamily="Inter, sans-serif" letterSpacing="2.5">
          INTELLIGENCE
        </text>
      </svg>
    </div>
  );
}
