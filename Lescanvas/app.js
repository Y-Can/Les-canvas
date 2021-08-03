var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;

//ctx.fillRect(100, 100, 100, 100)

//ctx.beginPath();
//ctx.moveTo(44, 55,);
//ctx.lineTo(400, 450);
//ctx.stroke();

// ctx.beginPath();
// ctx.arc(100, 100, 90, 0, 2 * Math.PI)
// ctx.fillStyle = 'red';
// ctx.fill()
// ctx.strokeStyle = 'blue';
// ctx.lineWidth = 5;
// ctx.stroke();

var x = 75;
var v = 5;

function anim(){

    requestAnimationFrame(anim);
    console.log("hello");

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.beginPath();
    ctx.arc(x, 75, 50, 0,  2 * Math.PI)
    ctx.strokeStyle ='red';
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke();


    if(x + 50 > canvas.width || x - 50 < 0){
        v = - v
    }

    x+= v;
}

anim();