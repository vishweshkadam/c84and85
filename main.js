var canvas=document.getElementById("my_canvas");
var ctx=canvas.getContext("2d");
var car_width=100;
var car_height=50;
var background_img="racing.jpg";
var car_img="car1.png";
var car2_img="car2.png";
var car_x=10;
var car_y=10;
var car2_x=70;
var car2_y=70;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src=background_img;

    car_imgTag = new Image();
    car_imgTag.onload = uploadcar;
    car_imgTag.src=car_img;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src=car2_img;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar() {
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}
function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car_width, car_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        car1_up();
        console.log("up")
    }
    if(keyPressed == '40')
    {
        car1_down();
        console.log("down")
    }
    if(keyPressed == '37')
    {
        car1_left();
        console.log("left")
    }
    if(keyPressed == '39')
    {
        car1_right();
        console.log("right")
    }
    if (keyPressed == '85'){
        car2_up()
        console.log("up2")
    }
    if (keyPressed == '68'){
        car2_down()
        console.log("down2")
    }
    if (keyPressed == '82'){
        car2_right()
        console.log("right2")
    }
    if (keyPressed == '76'){
        car2_left()
        console.log("left2")
    }
}

//Moving Car-1
function car1_up(){
    if(car_y>=0){
        car_y = car_y - 10;
        console.log("When up arrow is pressed,  x = " + car_x + " | y = " +car_y);
         uploadBackground();
         uploadcar();
         uploadcar2();
    }
}
function car1_down(){
    if(car_y<=550){
        car_y = car_y + 10;
        console.log("When up arrow is pressed,  x = " + car_x + " | y = " +car_y);
         uploadBackground();
         uploadcar();
         uploadcar2();
    }
}
function car1_left(){
    if(car_x>=0){
        car_x = car_x - 10;
        console.log("When up arrow is pressed,  x = " + car_x + " | y = " +car_y);
         uploadBackground();
         uploadcar();
         uploadcar2();
    }