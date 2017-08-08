var PuppyView = require('./views/puppyView');

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
}

var requestComplete = function() {
  if(this.status != 200) return;

  var puppyString = this.responseText;
  var puppies = JSON.parse(puppyString);
  var puppyView = new PuppyView(puppies);  
}

var app = function(){
  var url = 'http://localhost:3000/puppies';
  makeRequest(url, requestComplete);
}



window.addEventListener('load', app);