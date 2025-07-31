function addCustomer() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const accountType = document.getElementById("accountType").value;

  if (!name || !email || !contact || !accountType) {
    alert("Please fill in all fields.");
    return;
  }

  const tableBody = document.getElementById("customerTableBody");

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${contact}</td>
    <td>${accountType}</td>
  `;

  tableBody.appendChild(row);

  // Clear fields after adding
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("contact").value = "";
  document.getElementById("accountType").value = "";
}
