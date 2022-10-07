var item = 0;
var StartX =0;
var StartY = 0;
var drag;
var siteChange = false;
document.body.onload =(e)=>{
    $("#game").fadeIn(1500)
}

document.body.onclick=(e)=>{
    if(isPlaying == false){
        isPlaying = true;
        document.getElementById('bgm').play()
        document.getElementById('bgm').volume = '0.4'
      }
    if(e.target == document.getElementById('play').querySelector('img')){
        $('#play').fadeOut('800')
        $('.text').fadeOut('800')
        $('#playground').fadeIn('800')
        openFullscreen()
        var a = document.getElementsByClassName('ball')
for (let i = 0; i < a.length; i++) {
    setTimeout(()=>{a[i].style.animation = '9000ms water ease-in infinite'},i*200)
}
    }
    var allBall= document.getElementsByClassName('ball');
    for(const x of allBall){
        if(e.target == x){
            siteChange = true;
            console.log(parseInt($(e.target).css('border-radius')))
            if(parseInt($(e.target).css('border-radius')) >0){
                siteChange = false;
                $(e.target).css({
                    'border': 'none',
                    'border-radius': '0'
                })
            }
            StartX = e.clientX;
            StartY = e.clientY;
            if(siteChange == true){
                $(x).css({
                    'border': '0.2vw solid white',
                    'border-radius': '2.5vw'
                })
            }
                document.body.onmousemove = (e)=>{
                    var FinalX = e.clientX;
                    var FinalY = e.clientY;
                    console.log(((StartX-FinalX)/screen.availWidth)*100 )
                    if(siteChange == true){
                    /////////LEFT ///////////////
                  if(StartX-FinalX > (2.8*vw) && StartX-FinalX < (5.5*vw)){
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
                   }
                }

               
               
            
            $('#pad').css({opacity:'1'})
            var allimgPad = document.getElementById('pad').querySelectorAll('img');
            allimgPad.forEach(element => {
            element.style.animation='do 1200ms linear infinite';
        });
            item = x;
            return;
        } 
          
    }
}
function padReset(){
    $('#pad').css({opacity:'0.5'})
        var allimgPad = document.getElementById('pad').querySelectorAll('img');
        allimgPad.forEach(element => {
            element.style.animation='none';
        });
        var allBalls= document.getElementsByClassName('ball');
        for (let y of allBalls) {
            $(y).css({
                        filter:'brightness(0.92)',
                        opacity:'1'
                })
        }
}
function right(){
    padReset()
    var allitem = document.body.querySelectorAll('item')    
var no = parseInt($(item).attr('no'))
var rowNo = parseInt($(item).attr('rown'))
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
    },350)
    $(x).animate({
        left: iteml,
        top: itemt
    },350)
    $(item).attr('no',(no+1))
    $(x).attr('no',no)
    $(item).attr('coln',(coln+1))
    $(x).attr('coln',coln)
verChk(rowNo)
            colChk(coln)
            colChk(coln+1);
            setTimeout(()=>{downfall()},1900)
    return;
    
        } 
    }
} 
  
}
function left(){
    padReset()
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
            },350)
            $(x).animate({
                left: iteml,
                top: itemt
            },350)
            $(item).attr('no',(no-1))
            $(x).attr('no',no)
            $(item).attr('coln',(coln-1))
            $(x).attr('coln',coln)
            verChk(rown)
            colChk(coln)
            colChk(coln-1);
            setTimeout(()=>{downfall()},1900)
            return;
        } 
    }

}   
}
function up(){
    padReset()
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
            },350)
            $(x).animate({
                left: iteml,
                top: itemt
            },350)
            $(item).attr('no',(no-8))
            $(x).attr('no',no)
            $(item).attr('rown',(rown-1))
            $(x).attr('rown',rown)
            verChk(rown)
            verChk(rown-1)
            colChk(coln)
            setTimeout(()=>{downfall()},1900)
            return;
        } 
    }

}   
}
function down(){
    padReset()
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
            },350)
            $(x).animate({
                left: iteml,
                top: itemt
            },350)
            $(item).attr('no',(no+8))
            $(x).attr('no',no)
            $(item).attr('rown',(rown+1))
            $(x).attr('rown',rown)
            verChk(rown)
            verChk(rown+1)
            colChk(coln);
            setTimeout(()=>{downfall()},1900)
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
  var elem = document.body
  
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  $('#playground').css({'margin-top':'-2.5vw'})
}
  
  
  
  
   document.body.ontouchstart =(e) =>{
                    $(e.target).css({
                        'border': '0.2vw solid white',
                        'border-radius': '2.5vw'
                    })
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
                                $(e.target).css({
                                    'border': 'none',
                                    'border-radius': 'none'
                                })
                            } 
                           }
                        ///// RIGHT ///////  
                      //  console.log(((StartX-FinalX)/screen.availWidth)*100 ) 
                        if(StartX-FinalX > (-7*vw) && StartX-FinalX < (-3*vw)){
                            if(StartY-FinalY > (-1.4*vw) && StartY-FinalY < (2.2*vw)){
                                right()
                                document.body.ontouchmove = (event) =>{bubble(event)};
                                $(e.target).css({
                                    'border': 'none',
                                    'border-radius': 'none'
                                })
                            } 
                           }
                           ///// UP ///////  
                        if(StartX-FinalX > (-0.5*vw) && StartX-FinalX < (1.2*vw)){
                            if(StartY-FinalY > (2.5*vw) && StartY-FinalY < (7.5*vw)){
                               up()
                                document.body.ontouchmove = (event) =>{bubble(event)};
                                $(e.target).css({
                                    'border': 'none',
                                    'border-radius': 'none'
                                })
                            } 
                           }
                        /////// DOWN ///////
                      //  console.log(((StartY-FinalY)/screen.availWidth)*100 )
                        if(StartX-FinalX > (-0.5*vw) && StartX-FinalX < (1.2*vw)){
                            if(StartY-FinalY < (-2.5*vw) && StartY-FinalY > (-7.5*vw)){
                               down()
                                document.body.ontouchmove = (event) =>{bubble(event)};
                                $(e.target).css({
                                    'border': 'none',
                                    'border-radius': 'none'
                                })
                            } 
                           }   

                    }
                }   
