let lineBarTooltipData = null;

function drawLineChart(labels, data) {
  const canvas = document.getElementById('lineChart');
  const { ctx, w, h } = setupCanvas(canvas);

  const padL = 52, padR = 20, padT = 20, padB = 40;
  const cw = w - padL - padR;
  const ch = h - padT - padB;

  ctx.clearRect(0, 0, w, h);

  const minV = Math.min(...data) * 0.95;
  const maxV = Math.max(...data) * 1.02;
  const range = maxV - minV;

  function xPos(i) { return padL + (i / (labels.length - 1)) * cw; }
  function yPos(v) { return padT + ch - ((v - minV) / range) * ch; }

  // Gridlines
  const gridLines = 5;
  ctx.strokeStyle = 'rgba(255,255,255,0.05)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= gridLines; i++) {
    const y = padT + (i / gridLines) * ch;
    ctx.beginPath();
    ctx.moveTo(padL, y);
    ctx.lineTo(padL + cw, y);
    ctx.stroke();

    const val = maxV - (i / gridLines) * range;
    ctx.fillStyle = '#6b7280';
    ctx.font = '10px -apple-system, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(val >= 1000 ? (val / 1000).toFixed(0) + 'k' : val.toFixed(0), padL - 6, y + 4);
  }

  // X labels
  ctx.fillStyle = '#6b7280';
  ctx.font = '10px -apple-system, sans-serif';
  ctx.textAlign = 'center';
  const step = Math.ceil(labels.length / 8);
  for (let i = 0; i < labels.length; i += step) {
    ctx.fillText(labels[i], xPos(i), h - padB + 16);
  }
  // Always draw last label
  if ((labels.length - 1) % step !== 0) {
    ctx.fillText(labels[labels.length - 1], xPos(labels.length - 1), h - padB + 16);
  }

  // Gradient fill
  const grad = ctx.createLinearGradient(0, padT, 0, padT + ch);
  grad.addColorStop(0, 'rgba(99,102,241,0.35)');
  grad.addColorStop(1, 'rgba(99,102,241,0)');

  ctx.beginPath();
  ctx.moveTo(xPos(0), yPos(data[0]));
  for (let i = 1; i < data.length; i++) {
    const px = xPos(i - 1), py = yPos(data[i - 1]);
    const cx1 = px + (xPos(i) - px) / 2, cy1 = py;
    const cx2 = xPos(i) - (xPos(i) - px) / 2, cy2 = yPos(data[i]);
    ctx.bezierCurveTo(cx1, cy1, cx2, cy2, xPos(i), yPos(data[i]));
  }
  ctx.lineTo(xPos(data.length - 1), padT + ch);
  ctx.lineTo(xPos(0), padT + ch);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Line
  ctx.beginPath();
  ctx.moveTo(xPos(0), yPos(data[0]));
  for (let i = 1; i < data.length; i++) {
    const px = xPos(i - 1), py = yPos(data[i - 1]);
    const cx1 = px + (xPos(i) - px) / 2, cy1 = py;
    const cx2 = xPos(i) - (xPos(i) - px) / 2, cy2 = yPos(data[i]);
    ctx.bezierCurveTo(cx1, cy1, cx2, cy2, xPos(i), yPos(data[i]));
  }
  ctx.strokeStyle = '#6366f1';
  ctx.lineWidth = 2.5;
  ctx.lineJoin = 'round';
  ctx.stroke();

  // Dots
  for (let i = 0; i < data.length; i++) {
    ctx.beginPath();
    ctx.arc(xPos(i), yPos(data[i]), 3.5, 0, Math.PI * 2);
    ctx.fillStyle = '#6366f1';
    ctx.fill();
    ctx.strokeStyle = '#1a1d27';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  lineBarTooltipData = { labels, data, xPos, yPos, padL, padR, padT, padB, cw, ch };
}