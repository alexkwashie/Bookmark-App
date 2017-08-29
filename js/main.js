//listen for form submit

document.getElementById('myForm').addEventListener('submit', saveBooking);

//Save bookmark
function saveBooking(e){
var siteName = document.getElementById('siteName').value;
var siteU = document.getElementById('siteUrl').value;

var bookmark = {
name: siteName,
Url: siteU
}

/*
//local storage test
localStorage.setItem('test', 'Newfile');
console.log(localStorage.getItem('test'));
localStorage.removeItem('test');
console.log(localStorage.getItem('test'));
*/

//Test if bookmark is null
if (localStorage.getItem('bookmarks') === null){
//initiate array
  var bookmarks = [];
// this adds to bookmark to the array from
localStorage.push('bookmark');
//Set to local storage and changes the set up to  string
localStorage.setItem('bookmarks', JSON.stringify(bookmark));



}
//prevent form from submitting
e.preventDefault();

}
