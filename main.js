let c = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

c.width=window.innerWidth -35;
c.height= window.innerHeight -20;

//c.style.border = '5px solid red';

let canvas_width = c.width;
let canvas_height = c.height;

//track mouse position on mousemove
var mousePosition;
//track state of mousedown and up
var isMouseDown;



//add listeners
document.addEventListener('mousemove', move, false);
document.addEventListener('mousedown', setDraggable, false);
document.addEventListener('mouseup', setDraggable, false);

//make some rectangles to form the place value grid


//make some circles
var c11 = new Circle(90, 140, 35, "DarkOrange", "black", "10,000");
var c12 = new Circle(90, 140, 35, "DarkOrange", "black", "10,000");
var c13 = new Circle(90, 140, 35, "DarkOrange", "black", "10,000");
var c14 = new Circle(90, 140, 35, "DarkOrange", "black", "10,000");
var c15 = new Circle(90, 140, 35, "DarkOrange", "black", "10,000");
var c16 = new Circle(90, 140, 35, "DarkOrange", "black", "10,000");
var c17 = new Circle(90, 140, 35, "DarkOrange", "black", "10,000");
var c18 = new Circle(90, 140, 35, "DarkOrange", "black", "10,000");
var c19 = new Circle(90, 140, 35, "DarkOrange", "black", "10,000");

var c21 = new Circle(280, 140, 35, "LightSkyBlue", "black", " 1,000");
var c22 = new Circle(280, 140, 35, "LightSkyBlue", "black", " 1,000");
var c23 = new Circle(280, 140, 35, "LightSkyBlue", "black", " 1,000");
var c24 = new Circle(280, 140, 35, "LightSkyBlue", "black", " 1,000");
var c25 = new Circle(280, 140, 35, "LightSkyBlue", "black", " 1,000");
var c26 = new Circle(280, 140, 35, "LightSkyBlue", "black", " 1,000");
var c27 = new Circle(280, 140, 35, "LightSkyBlue", "black", " 1,000");
var c28 = new Circle(280, 140, 35, "LightSkyBlue", "black", " 1,000");
var c29 = new Circle(280, 140, 35, "LightSkyBlue", "black", " 1,000");

var c31 = new Circle(460, 140, 35, "RebeccaPurple", "black", "  100");
var c32 = new Circle(460, 140, 35, "RebeccaPurple", "black", "  100");
var c33 = new Circle(460, 140, 35, "RebeccaPurple", "black", "  100");
var c34 = new Circle(460, 140, 35, "RebeccaPurple", "black", "  100");
var c35 = new Circle(460, 140, 35, "RebeccaPurple", "black", "  100");
var c36 = new Circle(460, 140, 35, "RebeccaPurple", "black", "  100");
var c37 = new Circle(460, 140, 35, "RebeccaPurple", "black", "  100");
var c38 = new Circle(460, 140, 35, "RebeccaPurple", "black", "  100");
var c39 = new Circle(460, 140, 35, "RebeccaPurple", "black", "  100");

var c41 = new Circle(640, 140, 35, "Gold", "black", "   10");
var c42 = new Circle(640, 140, 35, "Gold", "black", "   10");
var c43 = new Circle(640, 140, 35, "Gold", "black", "   10");
var c44 = new Circle(640, 140, 35, "Gold", "black", "   10");
var c45 = new Circle(640, 140, 35, "Gold", "black", "   10");
var c46 = new Circle(640, 140, 35, "Gold", "black", "   10");
var c47 = new Circle(640, 140, 35, "Gold", "black", "   10");
var c48 = new Circle(640, 140, 35, "Gold", "black", "   10");
var c49 = new Circle(640, 140, 35, "Gold", "black", "   10");

var c51 = new Circle(820, 140, 35, "DeepPink", "black", "    1");
var c52 = new Circle(820, 140, 35, "DeepPink", "black", "    1");
var c53 = new Circle(820, 140, 35, "DeepPink", "black", "    1");
var c54 = new Circle(820, 140, 35, "DeepPink", "black", "    1");
var c55 = new Circle(820, 140, 35, "DeepPink", "black", "    1");
var c56 = new Circle(820, 140, 35, "DeepPink", "black", "    1");
var c57 = new Circle(820, 140, 35, "DeepPink", "black", "    1");
var c58 = new Circle(820, 140, 35, "DeepPink", "black", "    1");
var c59 = new Circle(820, 140, 35, "DeepPink", "black", "    1");

//initialise our circles
var circles = [c11, c12, c13, c14, c15, c16, c17, c18, c19, c21, c22, c23, c24, c25, c26, c27, c28, c29, c31, c32, c33, c34, c35, c36, c37, c38, c39, c41, c42, c43, c44, c45, c46, c47, c48, c49, c51, c52, c53, c54, c55, c56,c57, c58, c59];

//main draw method
function draw() {
    //clear canvas
    ctx.clearRect(0, 0, c.width, c.height);
    drawTable();
    drawCircles();
}

//draw table
function drawTable() {
    initialX = 10
    rectWidth = 180

    ctx.fillStyle = "Black"
    ctx.font = "50px Arial";
    ctx.fillText("Drag-and-Drop, Place-Value Chart",80, 60);
    ctx.strokeStyle = "black";
    ctx.strokeRect(initialX, 10, rectWidth*5, 60);

    ctx.fillText("thousands",40, 265);
    ctx.fillStyle = "DarkOrange";
    ctx.fillRect(initialX, 200, rectWidth, 100);
    ctx.strokeStyle = "black";
    ctx.strokeRect(initialX, 200, rectWidth, 100);
    ctx.fillStyle = "Black"
    ctx.font = "25px Arial";
    ctx.fillText("ten",80, 240);
    ctx.fillText("thousands",40, 265);

    ctx.fillStyle = "LightSkyBlue";
    ctx.fillRect(initialX+ rectWidth, 200, rectWidth, 100);
    ctx.strokeStyle = "black";
    ctx.strokeRect(initialX+ rectWidth, 200, rectWidth, 100);
    ctx.fillStyle = "Black"
    ctx.font = "25px Arial";
    ctx.fillText("thousands",40 + rectWidth, 265);

    ctx.fillStyle = "Plum";
    ctx.fillRect(initialX + rectWidth*2, 200, rectWidth, 100);
    ctx.strokeStyle = "black";
    ctx.strokeRect(initialX + rectWidth*2, 200, rectWidth, 100);
    ctx.fillStyle = "Black"
    ctx.font = "25px Arial";
    ctx.fillText("hundreds",50 + rectWidth*2, 265);

    ctx.fillStyle = "Gold";
    ctx.fillRect(initialX + rectWidth*3, 200, rectWidth, 100);
    ctx.strokeStyle = "black";
    ctx.strokeRect(initialX + rectWidth*3, 200, rectWidth, 100);
    ctx.fillStyle = "Black"
    ctx.font = "25px Arial";
    ctx.fillText("tens",70 + rectWidth*3, 265);

    ctx.fillStyle = "DeepPink";
    ctx.fillRect(initialX + rectWidth*4, 200, rectWidth, 100);
    ctx.strokeStyle = "black";
    ctx.strokeRect(initialX + rectWidth*4, 200, rectWidth, 100);
    ctx.fillStyle = "Black"
    ctx.font = "25px Arial";
    ctx.fillText("ones",70 + rectWidth*4, 265);

    ctx.rect(initialX , 300, rectWidth, 400);
    ctx.rect(initialX + rectWidth, 300, rectWidth, 400);
    ctx.rect(initialX + rectWidth*2, 300, rectWidth, 400);
    ctx.rect(initialX + rectWidth*3, 300, rectWidth, 400);
    ctx.rect(initialX + rectWidth*4, 300, rectWidth, 400);

    //ctx.fillStyle = "#FFFFD9"
    //ctx.fillRect(initialX + rectWidth*2 , 750, rectWidth, 60);
    //ctx.rect(initialX + rectWidth*2 , 750, rectWidth, 60);
    //ctx.fillStyle = "Black"
    //ctx.font = "25px Arial";
    //ctx.fillText("Reset",70 + rectWidth*2, 790);
    ctx.stroke();
}
//draw circles
function drawCircles() {

    for (var i = circles.length - 1; i >= 0; i--) {
        circles[i].draw();
    }
    
}

//key track of circle focus and focused index
var focused = {
    key: 0,
    state: false
}

//circle Object
    function Circle(x, y, r, fill, stroke, text) {
        this.startingAngle = 0;
        this.endAngle = 2 * Math.PI;
        this.x = x;
        this.y = y;
        this.r = r;

        this.fill = fill;
        this.stroke = stroke;

        this.text = text;

        this.draw = function () {
            ctx.beginPath();
            
            ctx.arc(this.x, this.y, this.r, this.startingAngle, this.endAngle);
            ctx.fillStyle = this.fill;
            ctx.lineWidth = 3;
            ctx.fill();
            ctx.strokeStyle = this.stroke;
            ctx.stroke();
            ctx.fillStyle= "black"
            ctx.strokeStyle = "black";
            ctx.font = "bold 20px Arial";
            ctx.fillText(this.text, this.x-30, this.y+5);
            
            
            
        }
    }

    function move(e) {
        if (!isMouseDown) {
            return;
        }
        getMousePosition(e);
        //if any circle is focused
        if (focused.state) {
            circles[focused.key].x = mousePosition.x;
            circles[focused.key].y = mousePosition.y;
            draw();
            return;
        }
        //no circle currently focused check if circle is hovered
        for (var i = 0; i < circles.length; i++) {
            if (intersects(circles[i])) {
                circles.move(i, 0);
                focused.state = true;
                break;
            }
        }
        draw();
    }

    //set mousedown state
    function setDraggable(e) {
        var t = e.type;
        if (t === "mousedown") {
            isMouseDown = true;
        } else if (t === "mouseup") {
            isMouseDown = false;
            releaseFocus();
        }
    }

    function releaseFocus() {
        focused.state = false;
    }

    function getMousePosition(e) {
        var rect = c.getBoundingClientRect();
        mousePosition = {
            x: Math.round(e.x - rect.left),
            y: Math.round(e.y - rect.top)
        }
    }

    //detects whether the mouse cursor is between x and y relative to the radius specified
    function intersects(circle) {
        // subtract the x, y coordinates from the mouse position to get coordinates 
        // for the hotspot location and check against the area of the radius
        var areaX = mousePosition.x - circle.x;
        var areaY = mousePosition.y - circle.y;
        //return true if x^2 + y^2 <= radius squared.
        return areaX * areaX + areaY * areaY <= circle.r * circle.r;
    }

Array.prototype.move = function (old_index, new_index) {
    if (new_index >= this.length) {
        var k = new_index - this.length;
        while ((k--) + 1) {
            this.push(undefined);
        }
    }
    this.splice(new_index, 0, this.splice(old_index, 1)[0]);
};
draw();