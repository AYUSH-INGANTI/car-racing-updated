canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
car_width = 120;
car_height = 60;
background_image = "racing2.jpg";
car_image = "car1.png";
car2_image = "car1.png";
car_x = 10;
car_y = 10;
car2_x = 10;
car2_y = 70;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car_imgTag = new Image();
    car_imgTag.onload = uploadCar;
    car_imgTag.src = car_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar() {
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}

function uploadCar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car_width, car_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up")
    }
    if (keyPressed == "40") {
        down();
        console.log("down");
    }
    if (keyPressed == "37") {
        left();
        console.log("left");
    }
    if (keyPressed == "39") {
        right();
        console.log("right");
    }
    if (keyPressed == "87") {
        car2_up();
        console.log("key w");
    }
    if (keyPressed == "65") {
        car2_left();
        console.log("key a");
    }
    if (keyPressed == "83") {
        car2_down();
        console.log("key s");
    }
    if (keyPressed == "68") {
        car2_right();
        console.log("key d");
    }
}

function up() {
    if (car_y >= 0) {
        car_y -= 10;
        console.log("when up arrow is pressed, x =" + car_x + "y =" + car_y);
        uploadBackground();
        uploadCar2();
        uploadCar();
    }
}

function down() {
    if (car_y <= 500) {
        car_y += 10;
        console.log("when down arrow is pressed, x =" + car_x + "y =" + car_y);
        uploadBackground();
        uploadCar2();
        uploadCar();
    }
}

function left() {
    if (car_x >= 0) {
        car_x -= 10;
        console.log("when left arrow is pressed, x =" + car_x + "y =" + car_y);
        uploadBackground();
        uploadCar2();
        uploadCar();
    }
}

function right() {
    if (car_x <= 700) {
        car_x += 10;
        console.log("when down arrow is pressed, x =" + car_x + "y =" + car_y);
        uploadBackground();
        uploadCar2();
        uploadCar();
    }
}

function car2_up() {
    if (car2_y >= 0) {
        car2_y -= 10;
        console.log("when up arrow is pressed, x =" + car2_x + "y =" + car2_y);
        uploadBackground();
        uploadCar();
        uploadCar2();
    }
}

function car2_down() {
    if (car2_y <= 500) {
        car2_y += 10;
        console.log("when down arrow is pressed, x =" + car2_x + "y =" + car2_y);
        uploadBackground();
        uploadCar();
        uploadCar2();
    }
}

function car2_left() {
    if (car2_x >= 0) {
        car2_x -= 10;
        console.log("when left arrow is pressed, x =" + car2_x + "y =" + car2_y);
        uploadBackground();
        uploadCar();
        uploadCar2();
    }
}

function car2_right() {
    if (car2_x <= 700) {
        car2_x += 10;
        console.log("when down arrow is pressed, x =" + car2_x + "y =" + car2_y);
        uploadBackground();
        uploadCar();
        uploadCar2();
    }
}
if(car1_x > 700){
 console.log("car1 won");
 document.getElementById("game-status").innerHTML = "Car1 Won!!!";
}
if(car2_x > 700){
    console.log("car2 won");
    document.getElementById("game-status").innerHTML = "Car2 Won!!!";
   }