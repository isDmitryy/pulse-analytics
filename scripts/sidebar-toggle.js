function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  sidebar.classList.toggle("open");
  overlay.classList.toggle("show");
}
function closeSidebar() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", function () {
    document
      .querySelectorAll(".nav-item")
      .forEach((n) => n.classList.remove("active"));
    this.classList.add("active");
  });
});
