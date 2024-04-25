// Get the modal

let modal = document.getElementById("myModal");
// Get the button that opens the modal

let addButton = document.getElementById("addbtn");
// Get the <span> element that closes the modal

let span = document.querySelector(".close");

// When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }
 addButton.onclick=function(event){
    event.preventDefault();
    modal.style.display="block";
   
 }
// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
const close = (params) => {
    modal.style.display="none";
};
span.addEventListener('click', close)

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle form submission
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission
//   var formData = new FormData(this); // Get form data
//   var name = formData.get("name");
//   var email = formData.get("email");

//   // Append data to table
//   var table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
//   var newRow = table.insertRow(table.rows.length);
//   var cell1 = newRow.insertCell(0);
//   var cell2 = newRow.insertCell(1);
//   cell1.innerHTML = name;
//   cell2.innerHTML = email;

//   // Close modal
//   modal.style.display = "none";
const form  = document.getElementById('myForm');
const  name  = document.getElementById('name').value ;
const email  = document.getElementById("email").value;
const tableBody = document.querySelector("#table-body");
const row  = document.createElement('tr');
row.innerHTML=`
<td>${name}</td>
<td>${email}</td>

`
modal.style.display="none"
tableBody.appendChild(row);

  // Reset form
  this.reset();
});
