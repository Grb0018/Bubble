var item = 0;
document.body.onclick=(e)=>{
    if(isPlaying == false){
        isPlaying = true;
        document.getElementById('bgm').play()
        document.getElementById('bgm').volume = '0.4'
      }
    var allBall= document.getElementsByClassName('ball');
    for(const x of allBall){
        if(e.target == x){
            $('#pad').css({opacity:'1'})
            var allimgPad = document.getElementById('pad').querySelectorAll('img');
            allimgPad.forEach(element => {
            element.style.animation='do 1200ms linear infinite';
        });
        var allBalls= document.getElementsByClassName('ball');
        for (let y of allBalls) {
            $(y).css({
                        filter:'brightness(0.7)',
                })
        }
            $(x).css({
                    filter:'brightness(1)',
                    opacity:'1'
            })
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
                        filter:'brightness(1)',
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
    })
    $(x).animate({
        left: iteml,
        top: itemt
    })
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
            })
            $(x).animate({
                left: iteml,
                top: itemt
            })
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
            })
            $(x).animate({
                left: iteml,
                top: itemt
            })
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
            })
            $(x).animate({
                left: iteml,
                top: itemt
            })
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