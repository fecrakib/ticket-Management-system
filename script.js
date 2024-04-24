
const bookTicket = (params) => {
    params.preventDefault();
    let name  = document.getElementById("name").value ;
    let seat  = document.getElementById("seat").value;
    let date  = document.getElementById("date").value;
    let from  = document.getElementById("from").value;
    let to  = document.getElementById("to").value;
    let viewHistory = document.getElementById("view-history-btn");
    let ticketId  = "R"+Math.floor(Math.random()*100);
    let tableBody = document.getElementById("history-table-body");
    let newRow  = tableBody.insertRow();
    newRow.innerHTML=`
    
    <th>${ticketId}</th>
    <th>${name}</th>
    <th>${seat}</th>
    <th>${date}</th>
    <th>${from}</th>
    <th>${to }</th>
    <th>Booked</th>
    <th>  <button class="delete-btn id="${ticketId}" >Delete</button></th>
   

    `
    tableBody.appendChild(newRow);
    // document.getElementById("ticket-history").style.display="none";
    alert("Ticket with ID " + ticketId + " has been booked successfully.");
    document.getElementById("ticket-form").reset();
   
};

const view  = () => {
  console.log('object');
    document.getElementById("ticket-history").style.display="block";
};

document.getElementById('ticket-form').addEventListener('submit',bookTicket)
const viewBtn  = document.getElementById("view-history-btn");
viewBtn.addEventListener('click',view);