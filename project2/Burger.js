//Brad Tully Project 2 November 16 2017

//Manually add the images
var img = []
img[0] = "BurgerImages/GroundBeef.png";
img[1] = "BurgerImages/WorcestershireSauce.jpeg";
img[2] = "BurgerImages/Garlic.jpg";
img[3] = "BurgerImages/Salt.jpg";
img[4] = "BurgerImages/Pepper.jpg";
img[5] = "BurgerImages/Parsley.jpg";
img[6] = "BurgerImages/SwissCheese.jpg";
img[7] = "BurgerImages/ParmesanCheese.jpg";
img[8] = "BurgerImages/PretzelBun.jpg";
var q = 0;

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
