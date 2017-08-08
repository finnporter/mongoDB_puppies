var PuppyView = function(puppies){
  this.render(puppies);
}

PuppyView.prototype = {
  render: function(puppies){
    
    console.log(puppies);
    puppies.forEach( function(puppy){
      console.log(puppy);
      var ul = document.getElementById('puppies');

      var li = document.createElement('li');
      var text = document.createElement('p');
      var img = document.createElement('img');

      img.src = puppy.url;
      text.innerText = puppy.name + ' is a(n) ' + puppy.breed;

      li.appendChild(text);
      ul.appendChild(li);
      ul.appendChild(img);
    })
  }
}

 module.exports = PuppyView;