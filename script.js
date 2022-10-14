var item = 0;
var StartX =0;
var StartY = 0;
var drag;
var siteChange = false;
var click = true;
var elem = document.body;

/* When the openFullscreen() function is executed, open the video in fullscreen.
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

document.body.onload =(e)=>{
    $("#game").fadeIn(100)
}

document.body.onclick=(e)=>{
    if(isPlaying == false){
        isPlaying = true;
        document.getElementById('bgm').play()
        document.getElementById('bgm').volume = '0.2';
        document.getElementById('bgm1').play()
        document.getElementById('bgm1').volume = '0.6';
        if(/Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            openFullscreen()
        }
      }
    if(e.target == document.getElementById('play').querySelector('img')){
        $('#play').fadeOut('800')
        $('.text').fadeOut('800')
        $('#playground').fadeIn('800')
        var a = document.getElementsByClassName('ball')
        if(click==true){
            click=false;
            for (let i = 0; i < a.length; i++) {
                setTimeout(()=>{a[i].style.animation = '9000ms water ease-in infinite'},i*200)
            }
        }
        document.getElementById('anchor').style.display='block'
        document.getElementById('anchor').style.animation = '500ms anchordown linear';
        setTimeout(()=>{document.body.style.animation = 'shak 200ms linear'},700);
        setTimeout(()=>{
            for (let i = 0; i < 12; i++) {
                particlex(37,16,'url(./balls/bubble.png)','game') 
            }
        },800)
       
        
        


document.body.onmousemove = (event) =>{bubble(event)}
document.body.onmousedown=(e)=>{
    var allBall= document.getElementsByClassName('ball');
    for(const x of allBall){
        if(e.target == x){
            siteChange = true;
            StartX = e.clientX;
            StartY = e.clientY;
                document.body.onmousemove = (e)=>{
                    var FinalX = e.clientX;
                    var FinalY = e.clientY;
                    console.log(((StartX-FinalX)/screen.availWidth)*100 )
                    if(siteChange == true){
                    /////////LEFT ///////////////
                  if(StartX-FinalX > (2*vw) && StartX-FinalX < (5.5*vw)){
                    if(StartY-FinalY > (-1*vw) && StartY-FinalY < (1.2*vw)){
                        left()
                        document.body.onmousemove = (event) =>{bubble(event)};
                        $(x).css({
                            'border': 'none',
                            'border-radius': 'none'
                        })
                    } 
                   }
                   ///////// RIGHT //////////
                   if(StartX-FinalX < (-1.8*vw) && StartX-FinalX > (-5.5*vw)){
                    if(StartY-FinalY > (-1*vw) && StartY-FinalY < (1*vw)){
                        right()
                        document.body.onmousemove = (event) =>{bubble(event)}
                        $(x).css({
                            'border': 'none',
                            'border-radius': 'none'
                        })
                    } 
                   }
                   ////// DOWN ////////////////
                   if(StartX-FinalX > (-1*vw) && StartX-FinalX < (1*vw)){
                    if(StartY-FinalY < (-1.8*vw) && StartY-FinalY > (-5.5*vw)){
                        down()
                        document.body.onmousemove = (event) =>{bubble(event)}
                        $(x).css({
                            'border': 'none',
                            'border-radius': 'none'
                        })
                    } 
                   }
                   ////////// UP ///////////
                   if(StartX-FinalX > (-1*vw) && StartX-FinalX < (1*vw)){
                    if(StartY-FinalY > (1.8*vw) && StartY-FinalY < (5.5*vw)){
                        up()
                        document.body.onmousemove = (event) =>{bubble(event)}
                        $(x).css({
                            'border': 'none',
                            'border-radius': 'none'
                        })
                    }
                } 
                item = x;
                return;
                   }
                }
            }
    }
}  
    }               

           
        } 
          
function right(){
    
    var allitem = document.body.querySelectorAll('item')    
var no = parseInt($(item).attr('no'))
var rown = parseInt($(item).attr('rown'))
var coln = parseInt($(item).attr('coln'))
if(no != 7 && no != 15 && no != 23 && no != 31 && no != 39 && no != 47) {
    for (const x of allitem) {
        if($(x).attr('no')== (no+1)){
    var iteml = $(item).css('left');
    var itemt = $(item).css('top');
    var Riteml = $(x).css('left');
    var Ritemt= $(x).css('top');
    
    $(item).animate({
        left: Riteml,
        top: Ritemt
    },120)
    $(x).animate({
        left: iteml,
        top: itemt
    },120)
    $(item).attr('no',(no+1))
    $(x).attr('no',no)
    $(item).attr('coln',(coln+1))
    $(x).attr('coln',coln)
    chk(rown)
    colChk(coln)
    colChk(coln+1)
    // setTimeout(()=>{verChk(rown)},150)
    // setTimeout(()=>{colChk(coln)},150)
    // setTimeout(()=>{colChk(coln+1)},150)
    // if(coln<7 && coln>0){
    //     setTimeout(()=>{colChk(coln-1)},150)
    // }
     setTimeout(()=>{downfall()},800)
    return;
    
        } 
    }
} 
  
}
function left(){
    
    var allitem = document.body.querySelectorAll('item')    
var no = parseInt($(item).attr('no'))
var rown = parseInt($(item).attr('rown'))
var coln = parseInt($(item).attr('coln'))
if(no != 0 && no != 8 && no != 16 && no != 24 && no != 32 && no != 40) {
    for (const x of allitem) {
        if($(x).attr('no')== (no-1)){
            var iteml = $(item).css('left');
            var itemt = $(item).css('top');
            var Riteml = $(x).css('left');
            var Ritemt= $(x).css('top');
            
            $(item).animate({
                left: Riteml,
                top: Ritemt
            },120)
            $(x).animate({
                left: iteml,
                top: itemt
            },120)
            $(item).attr('no',(no-1))
            $(x).attr('no',no)
            $(item).attr('coln',(coln-1))
            $(x).attr('coln',coln)
            setTimeout(()=>{
                chk(rown)
            colChk(coln)
            colChk(coln-1)
            },150)
            
            // setTimeout(()=>{colChk(coln)},150)
            // if(coln<7 && coln>0){
            //     setTimeout(()=>{colChk(coln+1)},150)
            // }
            // setTimeout(()=>{colChk(coln-1)},150)
             setTimeout(()=>{downfall()},800)
            return;
        } 
    }

}   
}
function up(){
    
    var allitem = document.body.querySelectorAll('item')    
var no = parseInt($(item).attr('no'));
var rown = parseInt($(item).attr('rown'))
var coln = parseInt($(item).attr('coln'))
if(no != 0 && no != 1 && no != 2 && no != 3 && no != 4 && no != 5 && no != 6 && no != 7) {
    for (const x of allitem) {
        if($(x).attr('no')== (no-8)){
            var iteml = $(item).css('left');
            var itemt = $(item).css('top');
            var Riteml = $(x).css('left');
            var Ritemt= $(x).css('top');
            
            $(item).animate({
                left: Riteml,
                top: Ritemt
            },120)
            $(x).animate({
                left: iteml,
                top: itemt
            },120)
            $(item).attr('no',(no-8))
            $(x).attr('no',no)
            $(item).attr('rown',(rown-1))
            $(x).attr('rown',rown)
            //  setTimeout(()=>{verChk(rown)},150)
            // setTimeout(()=>{colChk(coln)},150)
            // setTimeout(()=>{verChk(rown-1)},150)
            // if(rown<5 && rown>0){
            //     setTimeout(()=>{verChk(rown+1)},150)
            // }
            setTimeout(()=>{downfall()},800)
            chk(rown)
            chk(rown-1)
            colChk(coln)
            return;
        } 
    }

}   
}
function down(){
    
    var allitem = document.body.querySelectorAll('item')    
var no = parseInt($(item).attr('no'))
var rown = parseInt($(item).attr('rown'))
var coln = parseInt($(item).attr('coln'))
if(no != 40 && no != 41 && no != 42 && no != 43 && no != 44 && no != 45 && no != 46 && no != 47) {
    for (const x of allitem) {
        if($(x).attr('no')== (no+8)){
            var iteml = $(item).css('left');
            var itemt = $(item).css('top');
            var Riteml = $(x).css('left');
            var Ritemt= $(x).css('top');
            
            $(item).animate({
                left: Riteml,
                top: Ritemt
            },120)
            $(x).animate({
                left: iteml,
                top: itemt
            },120)
            $(item).attr('no',(no+8))
            $(x).attr('no',no)
            $(item).attr('rown',(rown+1))
            $(x).attr('rown',rown)
            console.log(rown)
            //  setTimeout(()=>{verChk(rown)},150)
            // setTimeout(()=>{colChk(coln)},200)
            // setTimeout(()=>{verChk(rown-1)},250)
            // if(rown<5 && rown>0){
            //     setTimeout(()=>{verChk(rown+1)},350)
            // }
             setTimeout(()=>{downfall()},800)
            chk(rown)
            chk(rown+1)
            colChk(coln)
            return;
        } 
    }

}   
}
function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }
  var elem = document.body;

  


  document.body.ontouchstart =(e) =>{
    var allBall= document.getElementsByClassName('ball');
    for(const x of allBall){
    }
    StartX = e.touches[0].clientX;
    StartY = e.touches[0].clientY;
    var allBall= document.getElementsByClassName('ball');
    for(const x of allBall){
        if(e.target == x){item = x;}}
    document.body.ontouchmove =(ee) =>{
        var FinalX = ee.touches[0].clientX;
        var FinalY = ee.touches[0].clientY;
     //   console.log(((StartY-FinalY)/screen.availWidth)*100 )
        ///// LEFT ///////
        if(StartX-FinalX > (5.3*vw) && StartX-FinalX < (10.5*vw)){
            if(StartY-FinalY > (-1.4*vw) && StartY-FinalY < (2.2*vw)){
                left()
                document.body.ontouchmove = (event) =>{bubble(event)};
            } 
           }
        ///// RIGHT ///////  
      //  console.log(((StartX-FinalX)/screen.availWidth)*100 ) 
        if(StartX-FinalX > (-7*vw) && StartX-FinalX < (-3*vw)){
            if(StartY-FinalY > (-1.4*vw) && StartY-FinalY < (2.2*vw)){
                right()
                document.body.ontouchmove = (event) =>{bubble(event)};
            } 
           }
           ///// UP ///////  
        if(StartX-FinalX > (-0.5*vw) && StartX-FinalX < (1.2*vw)){
            if(StartY-FinalY > (2.5*vw) && StartY-FinalY < (7.5*vw)){
               up()
                document.body.ontouchmove = (event) =>{bubble(event)};
            } 
           }
        /////// DOWN ///////
      //  console.log(((StartY-FinalY)/screen.availWidth)*100 )
        if(StartX-FinalX > (-0.5*vw) && StartX-FinalX < (1.2*vw)){
            if(StartY-FinalY < (-2.5*vw) && StartY-FinalY > (-7.5*vw)){
               down()
                document.body.ontouchmove = (event) =>{bubble(event)};
            } 
           }   

    }
}   

               
