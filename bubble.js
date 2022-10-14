const vw = window.innerWidth /100;
const vh = window.innerHeight/100;
dire=['l','r'];
var count = 3*vw;
var ani=0;
var isPlaying = false;
var crush = 0;

 function bubble(event){
    if(ani==0){
      if(crush==0){
        crush =1;
        setTimeout(()=>{crush=0},230)
        var audio = new Audio('./sound/crush.mp3')
            audio.play()
      }
      
        ani=1;
        var c = document.createElement('c');
    create=1;
    var left;
    var chk = dire[Math.floor(Math.random()*2)]
    if(chk=='l'){
      left  = (event.clientX - Math.floor(Math.random()*count)) + 'px';
    }
    else{
      left= (event.clientX + Math.floor(Math.random()*count)) + 'px';
    }
    var height= (event.clientY - Math.floor(Math.random()*count)) + 'px';
    c.setAttribute('style','width:0.7vw;height:0.7vw;opacity:0.8;display:block; background-image: url(./balls/bubble.png);background-size: cover;border-radius:50%;box-shadow: inset -7px -7px 15px rgb(255 255 255 / 30%), 5px 5px 3px rgb(0 0 0 / 7%);overflow: hidden;position:absolute;z-index:5;');
   c.style.left  = event.clientX-20 + 'px' ;
   c.style.top = event.clientY +'px';
$(c).css({animation : 'up 20000ms linear'})
   document.body.append(c);
   $(c).fadeOut(3300)
   setTimeout(()=>{c.remove();part=false},3500);
   setTimeout(()=>{ani=0},400)
    }
} 
document.getElementById('playground').onmouseenter =()=>{
    ani=1;
}
document.getElementById('playground').onmouseleave =()=>{
    ani=0;
}


function crack(y,x){
    ani=1;
    var c = document.createElement('c');
create=1;
var left;
var chk = dire[Math.floor(Math.random()*2)]
if(chk=='l'){
  left  = (x - Math.floor(Math.random()*count)) + 'px';
}
else{
  left= (x + Math.floor(Math.random()*(10*vw))) + 'px';
}
var height= (y - Math.floor(Math.random()*count)) + 'px';
c.setAttribute('style','width:1.7vw;height:1.7vw;opacity:1;display:block;background-image: url(./balls/bubble.png);background-size: cover;border-radius:50%;box-shadow: inset -7px -7px 15px rgb(255 255 255 / 30%), 5px 5px 3px rgb(0 0 0 / 7%);overflow: hidden;position:absolute;z-index:5;');
c.style.left  = x+ (5*vw) + 'px' ;
c.style.top = y+ (2*vw) + 'px';
c.onmouseenter =()=>{
ani=1;
}
c.onmouseleave =()=>{
ani=0;
}
$(c).css({animation : 'up 20000ms linear'})
$(c).fadeOut(3900)
document.getElementById('playground').append(c);
setTimeout(()=>{c.remove();part=false},4000);
setTimeout(()=>{ani=0},700)
}
function particle(topy,leftx,ui){
  var c = document.createElement('c');
   create=1;
   var left;
   var chk = dire[Math.floor(Math.random()*10)]
   if(chk=='l'){
     left  = (leftx - Math.floor(Math.random()*count)) + 'px';
   }
   else{
     left= (leftx + Math.floor(Math.random()*count)) + 'px';
   }
   var height= (topy - Math.floor(Math.random()*count)) + 'px';
   c.setAttribute('style','width:3vw;height:3vw;display:block;position:absolute;z-index:5;background-size: cover;border-radius:50%;');
   var ran = Math.floor(Math.random()*4)
   c.style.backgroundImage = ui;
  c.style.left  = leftx + + (ran*vw)+ 'px' ;
  c.style.top = topy + (ran*vw) +'px';
  var time = Math.floor(Math.random()*10000);
  if(time<5000){time=5000}
  setTimeout(()=>{
   $(c).css('animation', 'up '+time+'ms linear')
  },490)
  document.getElementById('playground').append(c);
  $(c).animate({
    left: left,
    top: height
   },500)
  $(c).fadeOut(time-4000)
  setTimeout(()=>{c.remove();},time-3800)
  
}



function particlex(topy,leftx,ui,position){
  var c = document.createElement('c');
   create=1;
   var left;
   var chk = dire[Math.floor(Math.random()*10)]
   if(chk=='l'){
     left  = ((leftx*vw) - Math.floor(Math.random()*count)) + 'px';
   }
   else{
     left= ((leftx*vw) + Math.floor(Math.random()*count)) + 'px';
   }
   var height= (topy - Math.floor(Math.random()*16)) + 'vw';
   c.setAttribute('style','width:1vw;height:1vw;display:block;position:absolute;z-index:5;background-size: cover;border-radius:50%;top:'+topy+'vw;left:'+leftx+'vw');
   var ran = Math.floor(Math.random()*4)
   c.style.backgroundImage = ui;

 
  var time = Math.floor(Math.random()*10000);
  if(time<5000){time=5000}
   $(c).css('animation', 'up '+time+'ms linear')
 
  document.getElementById(position).append(c);
  $(c).animate({
    left: left,
    top: height
   },400)
  $(c).fadeOut(time-4000)
 setTimeout(()=>{c.remove();},time-3800)
  
}
