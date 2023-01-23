function setup()
{
    video = createCapture(VIDEO);
    video.size(500,550);
    video.position(30,100)

    canvas = createCanvas(800,600);
    canvas.position(560,150);

    PoseNet = ml5.poseNet(video,modelLoaded);

    PoseNet.on('pose',gotPoses);

} 

function modelLoaded()
{
    console.log("The model has Loaded");
}

function gotPoses(results)
{
    if(results.length > 0 )
    {
        console.log(results);
    }

    
}