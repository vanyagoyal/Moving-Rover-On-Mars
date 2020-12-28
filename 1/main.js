canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

images_array = ["Nasa image1.jpg","image2.jpg","image3.jpg","image4.jpg"];
random_no = Math.floor(Math.random()*4);
console.log(random_no);

rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;

background_img=images_array[random_no];
console.log("Background Image = "+ background_img);

rover_img="rover.png";

function add(){
    bg_img=new Image();
    bg_img.onload=upload_bg;
    bg_img.src=background_img;

    rover_image=new Image();
    rover_image.onload=rover_upload;
    rover_image.src=rover_img;
}

function upload_bg(){
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}

function rover_upload(){
    ctx.drawImage(rover_image,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == "38"){
        up();
        console.log("up");
    }
    if(keypressed == "40"){
        down();
        console.log("down");
    }
    if(keypressed == "39"){
        right();
        console.log("right");
    }
    if(keypressed == "37"){
        left();
        console.log("left");
    }
}
function up(){
    if (rover_y >= 0){
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed,X=" + rover_x + " & Y=" + rover_y);
        upload_bg();
        rover_upload();
    }
}
function down(){
    if (rover_y <= 500){
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed,X=" + rover_x + " & Y=" + rover_y);
        upload_bg();
        rover_upload();
    }
}
function right(){
    if (rover_x <= 700){
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed,X=" + rover_x + " & Y=" + rover_y);
        upload_bg();
        rover_upload();
    }
}
function left(){
    if (rover_x >= 0){
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed,X=" + rover_x + " & Y=" + rover_y);
        upload_bg();
        rover_upload();
    }
}