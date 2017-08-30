// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save Bookmark
function saveBookmark(e){
  // Get form values
  var siteName =document.getElementById('siteName').value;
  var siteUrl =document.getElementById('siteUrl').value;

  var bookmark = {
    name: siteName,
    url: siteUrl
  }

  /*
    // Local Storage Test
    localStorage.setItem('test', 'Hello World');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
  */

  // Test if bookmarks is null
  if(localStorage.getItem('bookmarks') === null){
    // Init array
    var bookmarks = [];
    // Add to array
    bookmarks.push(bookmark);
    // Set to localStorage and convt to a JSON string
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    // Get bookmarks from localStorage & convt back to a normal string
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Add bookmark to array
    bookmarks.push(bookmark);
    // Re-set back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  // Clear form
  document.getElementById('myForm').reset();

  // Prevent form from submitting
  e.preventDefault();
}

//fetch Bookmark
function fetchBookmarks(){
  //Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
//Get output Id from html
  var bookmarkResults = document.getElementById('bookmarksResults');

  JSON.stringify()
}
