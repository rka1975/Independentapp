function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/k2F9AnIIC/model.json',modelReady);
}

function modelReady()
 {
     classifier.classify(gotResults);
}
 
function gotResults(error,results)
{
    if(error){
        console.error(error);
    }else {
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML='I can hear-'+results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy-'+(results[0].confidence*100).toFixed(2)+"%";
        


        if(results[0].label=="Bob"){
            console.log("The caller is Bob")
            document.getElementById("Wanted").src="Bob.jpg"
        }else if(results[0].label=="Joe"){
            console.log("The caller is Joe")
            document.getElementById("Wanted").src="Joe.jpg"
        }else if(results[0].label=="Jerry"){
            console.log("the caller is Jerry")
            document.getElementById("Wanted").src="Jerry.jpg"
        }else if(results[0].label=="Watson"){
            console.log("The caller is Watson")
            document.getElementById("Wanted").src="Watson.jpg"
        }
    }
}