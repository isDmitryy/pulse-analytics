const activities = [
  {
    name: "Sarah Chen",
    email: "sarah@acmecorp.com",
    action: "Upgraded to Pro plan",
    time: "2 min ago",
    status: "active",
    color: "#6366f1",
    initials: "SC",
  },
  {
    name: "Marcus Webb",
    email: "marcus@devstudio.io",
    action: "Exported analytics report",
    time: "14 min ago",
    status: "active",
    color: "#22c55e",
    initials: "MW",
  },
  {
    name: "Priya Nair",
    email: "priya@techwave.co",
    action: "Invited 3 team members",
    time: "38 min ago",
    status: "pending",
    color: "#f59e0b",
    initials: "PN",
  },
  {
    name: "Jordan Ellis",
    email: "jordan@launchpad.app",
    action: "Connected Slack integration",
    time: "1 hr ago",
    status: "active",
    color: "#ec4899",
    initials: "JE",
  },
  {
    name: "Tom Bakers",
    email: "tom@cloudbase.net",
    action: "Cancelled subscription",
    time: "3 hrs ago",
    status: "inactive",
    color: "#8b5cf6",
    initials: "TB",
  },
];

function buildTable() {
  const tbody = document.getElementById("activityTable");
  tbody.innerHTML = "";
  activities.forEach((row) => {
    const tr = document.createElement("tr");
    const badgeClass =
      row.status === "active"
        ? "badge-active"
        : row.status === "pending"
          ? "badge-pending"
          : "badge-inactive";
    const badgeLabel = row.status.charAt(0).toUpperCase() + row.status.slice(1);
    tr.innerHTML = `
      <td>
        <div class="user-cell">
          <div class="user-initials" style="background:${row.color}">${row.initials}</div>
          <div>
            <div class="user-name">${row.name}</div>
            <div class="user-email">${row.email}</div>
          </div>
        </div>
      </td>
      <td class="action-text">${row.action}</td>
      <td class="time-text">${row.time}</td>
      <td><span class="status-badge ${badgeClass}">${badgeLabel}</span></td>
    `;
    tbody.appendChild(tr);
  });
}
