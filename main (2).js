Webcam.attach( '#camera' );

camera = document.getElementById("camera");
      
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  })

  function take_snapshot (){
    Webcam.snap(function(data_uri) {
        document.getElementById("snapshot").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
    console.log('Snapshot taken')
  }
  console.log('ml5 version:', ml5.version);

  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-DENsSUjS/', modelLoaded);

  function modelLoaded (){
      console.log('Model Load!');
  }

function check (){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult (error, results  ) {
if (error) {
    console.error(error);
} else{
    feeling_name = results[0].label(); 
    accuracy = results[0].confidence.toFixed(3);
    console.log(results);
    document.getElementById("result_Feeling_name").innerHTML = feeling_name;
    document.getElementById("result_Feeling_accuracy").innerHTML = accuracy;
}
}