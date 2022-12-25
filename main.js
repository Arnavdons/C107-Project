//https://teachablemachine.withgoogle.com/models/76tV5J7Yd/model.json

function start(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/76tV5J7Yd/model.json",modelready);
}

function modelready(){
classifier.classify(gotresults);
}

function gotresults(error,results){
console.log("gotresult");
}