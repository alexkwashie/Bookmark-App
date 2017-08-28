//listen for form submit

document.getElementById('myForm').addEventListener('submit', saveBooking);

//Save bookmark
function saveBooking(e){
var siteName = document.getElementById('siteName').value;
var siteUrl = document.getElementById('siteUrl').value;

console.log(siteName);

//prevent form from submitting
e.preventDefault();

}
