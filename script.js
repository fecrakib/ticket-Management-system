const bookTicket = (event) => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let seat = document.getElementById("seat").value;
    let date = document.getElementById("date").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let ticketId = "R" + Math.floor(Math.random() * 100);
    let tableBody = document.getElementById("history-table-body");
    let newRow = tableBody.insertRow();
    newRow.id = ticketId;
    newRow.innerHTML = `
        <td>${ticketId}</td>
        <td>${name}</td>
        <td>${seat}</td>
        <td>${date}</td>
        <td>${from}</td>
        <td>${to}</td>
        <td>Booked</td>
        <td><button class="delete-btn" id="${ticketId}" onclick="deleteRow(this)">Delete</button></td>
    `;
    tableBody.appendChild(newRow);
    alert("Ticket with ID " + ticketId + " has been booked successfully.");
    document.getElementById("ticket-form").reset();
};

const view = () => {
    document.getElementById("ticket-history").style.display = "block";
};

const deleteRow = (button) => {
    let row = button.parentElement.parentElement;
    console.log(row);
    row.remove();
};

document.getElementById('ticket-form').addEventListener('submit', bookTicket);
document.getElementById("view-history-btn").addEventListener('click', view);
