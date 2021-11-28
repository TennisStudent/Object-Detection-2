status = "";
img = "";

function preload()
{
    img = loadImage("foyer.jpg");
}
function setup()
{
    canvas = createCanvas(640, 380);
    canvas.center()
    object_detection = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelLoaded()
{
    console.log("cocossd is initialized");
    status = true;
    object_detection.detect(img, gotResult);
}
function gotResult(error, results)
{
    if(error)
    {
        console.log(error)
    }
    else
    {
        console.log(results);
    }
}