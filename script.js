document.getElementById("registrationForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let phone = document.getElementById("phone").value.trim();
let dob = document.getElementById("dob").value;
let event = document.getElementById("event").value;
let college = document.getElementById("college").value.trim();
let confirm = document.getElementById("confirm").checked;

let gender = document.querySelector('input[name="gender"]:checked');
let mode = document.querySelector('input[name="mode"]:checked');

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Validation */

if(name === ""){
alert("Name cannot be empty");
return;
}

if(!emailPattern.test(email)){
alert("Enter valid email");
return;
}

if(phone.length !== 10){
alert("Phone must contain 10 digits");
return;
}

if(dob === ""){
alert("Select Date of Birth");
return;
}

if(!gender){
alert("Select Gender");
return;
}

if(event === ""){
alert("Select Event");
return;
}

if(!mode){
alert("Select Participation Mode");
return;
}

if(college === ""){
alert("Enter College/Company");
return;
}

if(!confirm){
alert("Please confirm declaration");
return;
}

/* Add row to table */

let table = document.getElementById("participantsTable");

let row = table.insertRow();

row.insertCell(0).innerText = name;
row.insertCell(1).innerText = email;
row.insertCell(2).innerText = phone;
row.insertCell(3).innerText = event;
row.insertCell(4).innerText = mode.value;

/* Success Message */

let msg = document.getElementById("successMessage");
msg.innerText = "Registration Successful!";
msg.style.color = "green";

setTimeout(function(){
msg.innerText = "";
},3000);

/* Reset form */

document.getElementById("registrationForm").reset();

});
