function updateKPIs(range) {
  const kpiData = {
    365: {
      mau: "24,800",
      mauT: "+12.3%",
      mrr: "$48,200",
      mrrT: "+8.7%",
      churn: "2.1%",
      churnT: "-0.4%",
      session: "4m 32s",
      sessionT: "+0.8 min",
    },
    90: {
      mau: "23,100",
      mauT: "+6.1%",
      mrr: "$45,600",
      mrrT: "+4.2%",
      churn: "2.4%",
      churnT: "-0.2%",
      session: "4m 18s",
      sessionT: "+0.5 min",
    },
    30: {
      mau: "24,200",
      mauT: "+3.8%",
      mrr: "$47,100",
      mrrT: "+2.1%",
      churn: "2.2%",
      churnT: "-0.1%",
      session: "4m 27s",
      sessionT: "+0.3 min",
    },
    7: {
      mau: "24,650",
      mauT: "+1.2%",
      mrr: "$48,050",
      mrrT: "+0.8%",
      churn: "2.1%",
      churnT: "0.0%",
      session: "4m 30s",
      sessionT: "+0.1 min",
    },
  };
  const d = kpiData[range] || kpiData[365];
  document.getElementById("kpi-mau").textContent = d.mau;
  document.getElementById("kpi-mau-trend").textContent = d.mauT;
  document.getElementById("kpi-mrr").textContent = d.mrr;
  document.getElementById("kpi-mrr-trend").textContent = d.mrrT;
  document.getElementById("kpi-churn").textContent = d.churn;
  document.getElementById("kpi-churn-trend").textContent = d.churnT;
  document.getElementById("kpi-session").textContent = d.session;
  document.getElementById("kpi-session-trend").textContent = d.sessionT;
}
