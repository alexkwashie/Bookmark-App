// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save Bookmark
function saveBookmark(e){
  // Get form values
  var siteName =document.getElementById('siteName').value;
  var siteUrl =document.getElementById('siteUrl').value;

if (!siteName || !siteUrl){
  alert('Please fill in the from');
  return false;
}
var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);

if (!siteUrl.match(regex)){
  alert('Please enter a valid URL');
  return false;
}
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
  //Re-fetch bookmarks
    fetchBookmarks()

  // Clear the form
  document.getElementById('myForm').reset();

  // Prevent form from submitting
  e.preventDefault();
}

//delete Bookmark function
function deleteBookmark(url){
  //Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  //loop through url
  for (i = 0; i < bookmarks.length; i++){
    //Remove bookmark from array
    if(bookmarks[i].url == url){
      bookmarks.splice(i, 1);
    }
  }
  // Set to localStorage and convt to a JSON string
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

//Re-fetch bookmarks
  fetchBookmarks()
}


//fetch Bookmark
function fetchBookmarks(){
  //Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
//Get output Id from html
  var bookmarkResults = document.getElementById('bookmarksResults');

  //build output
  bookmarkResults.innerHTML = '';
  for (var i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarkResults.innerHTML += '<div class="alert alert-warning">' +
                                 '<h3>'+name+
/*_blank - open in another tab*/ ' <a class="btn btn-primary" target="_blank" href="'+url+'" style="margin-right:50px">Visit</a> '+
                                 ' <a onclick ="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#" style="float:right">Delete</a> '+
                                 '</h3>'+
                                 '</div>';


  }
}
