const vw = screen.availWidth/100;
const vh = screen.availHeight/100;
dire=['l','r'];
var count = 3*vw;
var ani=0;
var isPlaying = false;
var crush = 0;
document.body.onmousemove = (event) =>{bubble(event)}
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
    c.setAttribute('style','width:0.7vw;height:0.7vw;opacity:0.8;display:block;background-color: rgba(255,255,255,0.2);border-radius:50%;box-shadow: inset -7px -7px 15px rgb(255 255 255 / 30%), 5px 5px 3px rgb(0 0 0 / 7%);overflow: hidden;position:absolute;z-index:5;');
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
document.getElementById('pad').onmouseenter =()=>{
    ani=1;
}
document.getElementById('pad').onmouseleave =()=>{
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
c.setAttribute('style','width:0.7vw;height:0.7vw;opacity:1;display:block;background-color: rgba(255,255,255,0.2);border-radius:50%;box-shadow: inset -7px -7px 15px rgb(255 255 255 / 30%), 5px 5px 3px rgb(0 0 0 / 7%);overflow: hidden;position:absolute;z-index:5;');
c.style.left  = x+ (5*vw) + 'px' ;
c.style.top = y+ (2*vw) + 'px';
c.onmouseenter =()=>{
ani=1;
}
c.onmouseleave =()=>{
ani=0;
}
$(c).css({animation : 'up 20000ms linear'})
$(c).animate({
 left: left,
 top: height
},700)
$(c).fadeOut(3900)
document.getElementById('playground').append(c);
setTimeout(()=>{c.remove();part=false},4000);
setTimeout(()=>{ani=0},700)
}