screen_width = 0;
screen_height = 0;

var apple = "";
var speak_data = "";
var to_number = "";
function preload()
{
    loadImage(apple)
    to_number = Number(content);

    if(Number.isInteger(to_number))
    var draw_apple = "set";

    screen_width = window.innerWidth;
    createCanvas(screen_width, screen_height-150.);
    canvas.position(img_Coordinates = 0-150);
}

function draw() 
if(draw_apple == "set")
for(var i = 1; i <= to_number; i++)
{
     x = Math.floor(Math.random() * 700);
     y = Math.floor(Math.random() * 400);
     Image(apple, x, y, 50, 50);
}