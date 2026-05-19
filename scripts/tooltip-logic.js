const tooltip = document.getElementById("chartTooltip");
const tooltipLabel = document.getElementById("tooltipLabel");
const tooltipVal = document.getElementById("tooltipVal");

function showTooltip(x, y, label, val) {
  tooltipLabel.textContent = label;
  tooltipVal.textContent = val;
  tooltip.style.display = "block";
  const tw = tooltip.offsetWidth,
    th = tooltip.offsetHeight;
  let tx = x + 14,
    ty = y - th / 2;
  if (tx + tw > window.innerWidth - 10) tx = x - tw - 14;
  if (ty < 5) ty = 5;
  tooltip.style.left = tx + "px";
  tooltip.style.top = ty + "px";
}

function hideTooltip() {
  tooltip.style.display = "none";
}

document.getElementById("barChart").addEventListener("mousemove", function (e) {
  if (!barChartData) return;
  const { labels, data, xBar, barW, n } = barChartData;
  const rect = this.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  let found = false;
  for (let i = 0; i < n; i++) {
    const bx = xBar(i);
    if (mx >= bx && mx <= bx + barW) {
      showTooltip(
        e.clientX,
        e.clientY,
        labels[i],
        "$" + data[i].toLocaleString(),
      );
      found = true;
      break;
    }
  }
  if (!found) hideTooltip();
});
document.getElementById("barChart").addEventListener("mouseleave", hideTooltip);

document
  .getElementById("lineChart")
  .addEventListener("mousemove", function (e) {
    if (!lineBarTooltipData) return;
    const { labels, data, xPos, yPos } = lineBarTooltipData;
    const rect = this.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    let closest = 0,
      minDist = Infinity;
    for (let i = 0; i < labels.length; i++) {
      const d = Math.abs(mx - xPos(i));
      if (d < minDist) {
        minDist = d;
        closest = i;
      }
    }
    if (minDist < 30) {
      showTooltip(
        e.clientX,
        e.clientY,
        labels[closest],
        data[closest].toLocaleString() + " users",
      );
    } else {
      hideTooltip();
    }
  });
document
  .getElementById("lineChart")
  .addEventListener("mouseleave", hideTooltip);
