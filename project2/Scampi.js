//Brad Tully Project 2 November 16 2017

//Manually add the images
var img = []
img[0] = "ScampiImages/Butter.jpg";
img[1] = "ScampiImages/Garlic.jpg";
img[2] = "ScampiImages/Pepper.jpg";
img[3] = "ScampiImages/Rice.jpg";
img[4] = "ScampiImages/Shrimp.jpg";

//Get all of the images and give them an event listener
var pictures = document.querySelectorAll('[name=Ingredients]');
for(var i=0; i < pictures.length; i++) {
  var picture = pictures[i];
  picture.addEventListener('click', nextPicture(), false);
}

//Switch the picture to the next one
function nextPicture() {
  var increment = 0;
  return function(event) {
    increment++;
    this.src = img[increment % img.length];
  }
}

//Get the submit comment button and add an event listener to it
var submitBut = document.getElementById("SubmitButton");
submitBut.addEventListener('click', MakeComment);

//Upload the comment to the website screen when the button is pressed
function MakeComment() {
  document.getElementById("CommentThread").innerHTML += "<br><br>" + document.getElementById("comment").value;
}
