
function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/MHjW0-oRM/model.json", modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    r = Math.floor(Math.random() * 255) + 1;
    g = Math.floor(Math.random() * 255) + 1;
    b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("label").innerHTML = "Detected voice is of  - "+ results[0].label;
    document.getElementById("count").innerHTML = "Detected Dog - "+dog+ "Detected Cat - "+cat;
    document.getElementById("label").style.color = "rgb("+r+","+g+","+b+")";
    document.getElementById("count").style.color = "rgb("+r+","+g+","+b+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "barking") {
      img.src = "bark.gif";
      dog = dog+1;
    } else if (results[0].label == "meow") {
      img.src = "meow.gif";
      cat = cat + 1;
    } else{
      img.src = "listen.gif";
    }
  }
}