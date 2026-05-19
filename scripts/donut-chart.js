const donutSegments = [
  { label: "Organic", pct: 42, color: "#6366f1" },
  { label: "Direct", pct: 28, color: "#22c55e" },
  { label: "Referral", pct: 18, color: "#f59e0b" },
  { label: "Social", pct: 12, color: "#ec4899" },
];

function drawDonutChart() {
  const canvas = document.getElementById("donutChart");
  const size = 200;
  canvas.width = size * dpr();
  canvas.height = size * dpr();
  canvas.style.width = size + "px";
  canvas.style.height = size + "px";
  const ctx = canvas.getContext("2d");
  ctx.scale(dpr(), dpr());

  const cx = size / 2,
    cy = size / 2,
    r = 78,
    inner = 52;
  let angle = -Math.PI / 2;

  ctx.clearRect(0, 0, size, size);

  donutSegments.forEach((seg) => {
    const sweep = (seg.pct / 100) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, angle, angle + sweep);
    ctx.closePath();
    ctx.fillStyle = seg.color;
    ctx.fill();
    angle += sweep;
  });

  // Hole
  ctx.beginPath();
  ctx.arc(cx, cy, inner, 0, Math.PI * 2);
  ctx.fillStyle = "#1a1d27";
  ctx.fill();

  // Gap lines between segments
  angle = -Math.PI / 2;
  donutSegments.forEach((seg) => {
    const sweep = (seg.pct / 100) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx + inner * Math.cos(angle), cy + inner * Math.sin(angle));
    ctx.lineTo(cx + r * Math.cos(angle), cy + r * Math.sin(angle));
    ctx.strokeStyle = "#1a1d27";
    ctx.lineWidth = 2;
    ctx.stroke();
    angle += sweep;
  });
}

function buildDonutLegend() {
  const legend = document.getElementById("donutLegend");
  legend.innerHTML = "";
  donutSegments.forEach((seg) => {
    const item = document.createElement("div");
    item.className = "legend-item";
    item.innerHTML = `
      <div class="legend-dot" style="background:${seg.color}"></div>
      <div class="legend-name">${seg.label}</div>
      <div class="legend-bar-wrap"><div class="legend-bar" style="width:${seg.pct}%;background:${seg.color}"></div></div>
      <div class="legend-pct">${seg.pct}%</div>
    `;
    legend.appendChild(item);
  });
}
