function preload(){
}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(100, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw()
{
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    noFill();
    stroke("DarkRed");
    rect(50, 50, 500, 400)
    fill("red");
    circle(50, 50, 50)
    circle(50, 450, 50)
    circle(540, 50, 50)
    circle(540, 450, 50)
}

function take_snapshot()
{
    save('student_name.png');
}
function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}