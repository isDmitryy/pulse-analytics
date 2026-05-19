let currentRange = 365;

function renderCharts(range) {
  const { labels, userGrowth, revenueData } = generateData(range);
  drawLineChart(labels, userGrowth);
  drawBarChart(labels, revenueData);

  // Update growth badge
  const first = userGrowth[0],
    last = userGrowth[userGrowth.length - 1];
  const pct = (((last - first) / first) * 100).toFixed(1);
  document.getElementById("lineGrowthBadge").textContent =
    (pct >= 0 ? "+" : "") + pct + "% growth";
  document.getElementById("revenueBadge").textContent =
    "$" +
    (revenueData[revenueData.length - 1] / 1000).toFixed(1) +
    "k this period";

  updateKPIs(range);
}

document.querySelectorAll(".pill").forEach((pill) => {
  pill.addEventListener("click", function () {
    document
      .querySelectorAll(".pill")
      .forEach((p) => p.classList.remove("active"));
    this.classList.add("active");
    currentRange = parseInt(this.dataset.range);
    renderCharts(currentRange);
  });
});
