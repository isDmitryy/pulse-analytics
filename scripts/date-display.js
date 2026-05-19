(function () {
  const opts = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  document.getElementById("dateDisplay").textContent =
    new Date().toLocaleDateString("en-US", opts);
})();
