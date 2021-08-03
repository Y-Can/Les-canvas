// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');

// canvas.width = 600;
// canvas.height = 600;

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

// var x = 75;
// var v = 5;

// function anim(){

//     requestAnimationFrame(anim);
//     console.log("hello");

//     ctx.clearRect(0,0,canvas.width,canvas.height);

//     ctx.beginPath();
//     ctx.arc(x, 75, 50, 0,  2 * Math.PI)
//     ctx.strokeStyle ='red';
//     ctx.fillStyle = 'red';
//     ctx.fill();
//     ctx.stroke();


//     if(x + 50 > canvas.width || x - 50 < 0){
//         v = - v
//     }

//     x+= v;

    
// }

// anim();


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;
var running = false;

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 1,
  radius: 25,
  color: 'blue',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function clear() {
  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
}

function draw() {
  clear();
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mousemove', function(e){
  if (!running) {
    clear();
    ball.x = e.clientX;
    ball.y = e.clientY;
    ball.draw();
  }
});

canvas.addEventListener("click",function(e){
  if (!running) {
    raf = window.requestAnimationFrame(draw);
    running = true;
  }
});

canvas.addEventListener("mouseout",function(e){
  window.cancelAnimationFrame(raf);
  running = false;
});

ball.draw();


