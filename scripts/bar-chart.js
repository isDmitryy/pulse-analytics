let barChartData = null;

function drawBarChart(labels, data) {
  const canvas = document.getElementById("barChart");
  const { ctx, w, h } = setupCanvas(canvas);

  const padL = 52,
    padR = 20,
    padT = 20,
    padB = 40;
  const cw = w - padL - padR;
  const ch = h - padT - padB;

  ctx.clearRect(0, 0, w, h);

  const maxV = Math.max(...data) * 1.1;
  const n = labels.length;
  const barW = (cw / n) * 0.55;
  const gap = (cw / n) * 0.45;

  function xBar(i) {
    return padL + i * (cw / n) + gap / 2;
  }
  function barH(v) {
    return (v / maxV) * ch;
  }

  // Gridlines + Y labels
  const gridLines = 5;
  for (let i = 0; i <= gridLines; i++) {
    const y = padT + (i / gridLines) * ch;
    ctx.strokeStyle = "rgba(255,255,255,0.05)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padL, y);
    ctx.lineTo(padL + cw, y);
    ctx.stroke();
    const val = maxV * (1 - i / gridLines);
    ctx.fillStyle = "#6b7280";
    ctx.font = "10px -apple-system, sans-serif";
    ctx.textAlign = "right";
    ctx.fillText(
      "$" + (val >= 1000 ? (val / 1000).toFixed(0) + "k" : val.toFixed(0)),
      padL - 6,
      y + 4,
    );
  }

  // X labels
  ctx.fillStyle = "#6b7280";
  ctx.font = "10px -apple-system, sans-serif";
  ctx.textAlign = "center";
  const step = Math.ceil(n / 8);
  for (let i = 0; i < n; i += step) {
    ctx.fillText(labels[i], xBar(i) + barW / 2, h - padB + 16);
  }
  if ((n - 1) % step !== 0) {
    ctx.fillText(labels[n - 1], xBar(n - 1) + barW / 2, h - padB + 16);
  }

  // Bars
  for (let i = 0; i < n; i++) {
    const bh = barH(data[i]);
    const x = xBar(i),
      y = padT + ch - bh;
    const grad = ctx.createLinearGradient(0, y, 0, padT + ch);
    grad.addColorStop(0, "#818cf8");
    grad.addColorStop(1, "#4338ca");
    ctx.fillStyle = grad;

    const r = Math.min(5, barW / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + barW - r, y);
    ctx.quadraticCurveTo(x + barW, y, x + barW, y + r);
    ctx.lineTo(x + barW, padT + ch);
    ctx.lineTo(x, padT + ch);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
    ctx.fill();
  }

  barChartData = {
    labels,
    data,
    xBar,
    barH,
    barW,
    padL,
    padR,
    padT,
    padB,
    ch,
    n,
  };
}
