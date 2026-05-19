function dpr() {
  return window.devicePixelRatio || 1;
}

function setupCanvas(canvas) {
  const rect = canvas.getBoundingClientRect();
  const w = rect.width || canvas.offsetWidth || 600;
  const h = canvas.height;
  canvas.width = w * dpr();
  canvas.height = h * dpr();
  canvas.style.width = w + "px";
  canvas.style.height = h + "px";
  const ctx = canvas.getContext("2d");
  ctx.scale(dpr(), dpr());
  return { ctx, w, h };
}
