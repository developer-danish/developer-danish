var canvas = document.querySelector('canvas');
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;

var obj = canvas.getContext('2d');

var mouse = {
    x : undefined,
    y : undefined
 }
 
 var maxRadius = 25;
 var minRadius = 10;
 
 var colorArray = [
    '#977EF2','#2955D9','#0597F2','#F25C05','#F24C3D'
 ];
 console.log(colorArray)
 
 window.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
 })
 
 window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
 
    init();
 })
 
 
 function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random()*colorArray.length) ];
    this.minRadius = radius;
 
    this.draw = function(){
         obj.beginPath();
         obj.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
       //   obj.strokeStyle = `rgba(${x},${y},${dx},1)`;
       //   obj.stroke();
       obj.fillStyle = this.color;
         obj.fill();
    }
    this.update = function(){
     if(this.x+this.radius > innerWidth || this.x-this.radius < 0){
                 this.dx = -this.dx;
             }
             if(this.y+this.radius > innerHeight || this.y-this.radius < 0){
                this.dy = -this.dy;
             }
             this.x +=this.dx;
            this.y += this.dy;
 
            // interactivity....
            if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
               if(this.radius < maxRadius){
                this.radius += 1;
              } }else if (this.radius > this.minRadius){
                  this.radius -= 1;
               }
              
            
 
            this.draw();
 }
 }

 var circleArray = [];
function init(){
   circleArray = [];

   for(var i=0;i<250;i++){
      var x = Math.random() * (innerWidth - radius * 2) + radius;
      var y = Math.random()* (innerHeight - radius * 2) + radius;
      var radius = Math.random()* 6 +1;
      var dx = (Math.random() - 0.5);
      var dy =(Math.random() - 0.5);

      circleArray.push(new Circle(x,y,dx,dy,radius))
      
}
}

init();

function animate(){
   requestAnimationFrame(animate);
   obj.clearRect(0,0,innerWidth,innerHeight);
    
   for(let i=0;i<circleArray.length;i++){
     circleArray[i].update();
   }
}

animate();