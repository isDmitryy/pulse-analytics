function init() {
  renderCharts(currentRange);
  drawDonutChart();
  buildDonutLegend();
  buildTable();
}

let resizeTimer;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    renderCharts(currentRange);
    drawDonutChart();
  }, 100);
});

window.addEventListener('load', init);