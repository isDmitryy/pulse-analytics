function generateData(range) {
  const rng = seededRand(range * 42 + 7);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let labels, userGrowth, revenueData, points;

  if (range === 365) {
    labels = months;
    points = 12;
    userGrowth = [];
    revenueData = [];
    let base = 14000,
      revBase = 32000;
    for (let i = 0; i < points; i++) {
      const trend = i / (points - 1);
      base += (800 + rng() * 400) * (1 + trend);
      userGrowth.push(Math.round(base));
      const seasonality = 1 + 0.08 * Math.sin((i / 12) * 2 * Math.PI + 1);
      revBase += (900 + rng() * 500) * seasonality;
      revenueData.push(Math.round(revBase));
    }
  } else if (range === 90) {
    labels = [];
    points = 12;
    userGrowth = [];
    revenueData = [];
    let base = 21000,
      revBase = 43000;
    for (let i = 0; i < points; i++) {
      const wk = Math.floor((i * 90) / 12);
      labels.push("W" + (Math.floor(wk / 7) + 1));
      base += 200 + rng() * 150;
      userGrowth.push(Math.round(base));
      revBase += 300 + rng() * 200;
      revenueData.push(Math.round(revBase));
    }
    labels = [...new Set(labels)].slice(0, 12);
    while (labels.length < 12) labels.push("W" + (labels.length + 1));
  } else if (range === 30) {
    labels = [];
    points = 12;
    userGrowth = [];
    revenueData = [];
    let base = 23500,
      revBase = 46000;
    for (let i = 0; i < points; i++) {
      const day = Math.round((i / 11) * 29) + 1;
      labels.push("D" + day);
      base += 40 + rng() * 60 - 10;
      userGrowth.push(Math.round(base));
      revBase += 80 + rng() * 100 - 20;
      revenueData.push(Math.round(revBase));
    }
  } else {
    labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    points = 7;
    userGrowth = [];
    revenueData = [];
    let base = 24200,
      revBase = 47500;
    for (let i = 0; i < 7; i++) {
      const weekend = i >= 5 ? 0.85 : 1;
      base += (rng() * 200 - 80) * weekend;
      userGrowth.push(Math.round(base));
      revBase += (rng() * 300 - 100) * weekend;
      revenueData.push(Math.round(revBase));
    }
  }

  return {
    labels: labels.slice(0, points),
    userGrowth: userGrowth.slice(0, points),
    revenueData: revenueData.slice(0, points),
  };
}
