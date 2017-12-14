//Brad Tully Project 2 November 16 2017

//Get the canvas item
var c = document.getElementById("canvas");
var ct = c.getContext("2d");

//Get the submit color button give it an event listener
var submitColor = document.getElementById("SubmitColor");
submitColor.addEventListener('click', MakeIconColor);

//Change the color of the canvas
function MakeIconColor() {
  ct.clearRect(0, 0, 200, 200);
  ct.fillStyle = document.getElementById("back").value;
  ct.fillRect(0,0,200,200);
}

//Get the canvas item
var theCanvas = document.getElementById("canvas");
var content = theCanvas.getContext("2d");
content.font = "50px Arial";

//Get the submit button for line one
var submitIcon = document.getElementById("SubmitIcon");
submitIcon.addEventListener('click', MakeIconOne);

//Add text to the first line of the canvas/ icon
function MakeIconOne() {
  content.strokeText(document.getElementById("icon").value,10,75);
}

//Make the canvas item
var theCan = document.getElementById("canvas");
var con = theCan.getContext("2d");
con.font = "50px Arial";

//Submit button for the second line button
var submitIcon2 = document.getElementById("SubmitIcon2");
submitIcon2.addEventListener('click', MakeIconTwo);

//Adds text to the second line of the canvas/ icon
function MakeIconTwo() {
  con.strokeText(document.getElementById("icon2").value,10,150);
}
