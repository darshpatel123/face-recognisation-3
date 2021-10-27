Webcam.set({
    width:395,
    height:395,
    image_format:"png",
    png_quality:90
});
camera = document.getElementById("webcam_html");
Webcam.attach("#webcam_html");
function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';

    });
}
console.log("Ml5Version:",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/EbHk47VMz/model.json',modelLoaded);
function modelLoaded(){
    console.log("How Ml5 Just loaded");
    
}
function check(){
    img= document.getElementById("captured_image");
    classifier.classify(img ,getresult);
}
function getresult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_accuarcy").innerHTML= results[0].confidence.toFixed(3);
        document.getElementById("object_identified").innerHTML=results[0].label;
    }
}