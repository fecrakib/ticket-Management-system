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

const form  = document.getElementById('myForm');
const  name  = document.getElementById('name').value ;
const email  = document.getElementById("email").value;
const tableBody = document.querySelector("#table-body");
const row  = document.createElement('tr');
row.innerHTML=`
<td>${name}</td>
<td>${email}</td>
<td><button class="deleteBtn">Delete</button></td>

`
modal.style.display="none"
tableBody.appendChild(row);

  // Reset form
  this.reset();
});
document.addEventListener("click", function(event) {
  
    if (event.target.classList.contains("deleteBtn")) {
      const row = event.target.closest("tr");
      console.log(row)
      row.remove();
    }
  });