var aa=0;
var commonItem =[];
var  aacol = []
var commonCol = []
function colChk(xx){
    var  aacol = []
var commonCol = []
    var a = document.body.querySelectorAll('item')
    aacol = []
      for (let x of a) {
          if($(x).attr('coln')==xx){
              aacol.push({item:x,bg:$(x).css('background-image'),rown:parseInt($(x).attr('rown')),coln:parseInt($(x).attr('coln')),no:parseInt($(x).attr('no'))})
          }
      }
      aacol.sort((a, b) => {
          return a.no - b.no;
      });
  commonCol = []
  for (let i = 0; i < aacol.length-2; i++) {
     if(aacol[i].bg==aacol[i+1].bg){
         if(aacol[i+1].bg==aacol[i+2].bg){
          commonCol.push(
                 {0:aacol[i],1:aacol[i+1],2:aacol[i+2]}
             )
             i= i+2;
     }}
  }
  if(commonCol.length>0){
    setTimeout(()=>{
        a= $(commonCol[0][0].item).css('background-image')
        bbg = './'+a.slice(114,a.length-2)
        for (let i = 0; i < 3; i++) {
            $(commonCol[0][i].item).css('animation','scaledown 300ms ease-in');
            var bg = $(commonCol[0][i].item).css('background-image')
            setTimeout(()=>{$(commonCol[0][i].item).fadeOut()},5) 
            setTimeout(()=>{
                var top = parseInt($(commonCol[0][i].item).css('top'));
                var left = parseInt($(commonCol[0][i].item).css('left'))
                for (let i = 0; i < 5; i++) {
                    particle(top,left,bg)
                }
          },50)}
          setTimeout(()=>{
            document.getElementById('yay').play()
        },200)
          downfall()
          putno(bbg)
    },50)
  }
}



function downfall(){
    for (let y = 0; y < 8; y++) {
        var a = document.body.querySelectorAll('item')
    column1 = []
    for (let x of a) {
           if($(x).attr('coln')== y){
               column1.push({item:x,bg:$(x).css('background-image'),rown:parseInt($(x).attr('rown')),coln:parseInt($(x).attr('coln')),no:parseInt($(x).attr('no'))})
           }
       }
    blankItem=[]
    for (let i = 0; i < column1.length; i++) {
       if($(column1[i].item).css('display')=='none'){
           blankItem.push(column1[i]);
       }
    }
    column1.sort((a, b) => {
        return a.rown - b.rown;
    });
    if(blankItem.length>0){
        allColumn = [...column1]
        for (let i = 0; i < column1.length; i++) {
           if($(column1[i].item).css('display')=='none'){
               column1.splice([i])
           }
        } 
        
        for (let i = 0; i < column1.length; i++) {
            
            $(allColumn[i].item).animate({
                top: $(allColumn[i+blankItem.length].item).css('top'),
                left: $(allColumn[i+blankItem.length].item).css('left')
            },150)
            $(allColumn[i].item).attr('no',$(allColumn[i+blankItem.length].item).attr('no'))
            $(allColumn[i].item).attr('rown',$(allColumn[i+blankItem.length].item).attr('rown'))
            $(allColumn[i].item).attr('coln',$(allColumn[i+blankItem.length].item).attr('coln'))
        }
        for (let i = 0; i < blankItem.length; i++) {
            $(blankItem[i].item).remove();
            
        }  
         
    }  
    }
    commonItem=[]
    commonCol=[]
}

function chk(xi){
         commonItem =[];
        var a = document.body.querySelectorAll('item')
        aa = []
        for (let x of a) {
            if($(x).attr('rown')==xi){
                aa.push({item:x,bg:$(x).css('background-image'),rown:parseInt($(x).attr('rown')),coln:parseInt($(x).attr('coln')),no:parseInt($(x).attr('no'))})
            }
        }
        aa.sort((a, b) => {
            return a.no - b.no;
        });
        console.log(aa)
    for (let i = 0; i < aa.length-2; i++) {
       if(aa[i].bg==aa[i+1].bg && aa[i].no+1==(aa[i+1].no)){
           if(aa[i+1].bg==aa[i+2].bg && aa[i+1].no+1==(aa[i+2].no)){
            commonItem.push(
                   {0:aa[i],1:aa[i+1],2:aa[i+2]}
               )
               i= i+2;
       }}
    }
    console.log(commonItem)
    if(commonItem.length>0){
        a= $(commonItem[0][0].item).css('background-image')
        bbg = './'+a.slice(114,a.length-2)
                for (let i = 0; i < 3; i++) {
                    $(commonItem[0][i].item).css('animation','scaledown 300ms ease-in')
                    var bg = $(commonItem[0][i].item).css('background-image')
                    $(commonItem[0][i].item).fadeOut(220)
                    var top = parseInt($(commonItem[0][i].item).css('top'))
                    var left = parseInt($(commonItem[0][i].item).css('left'))
                    for (let i = 0; i < 5; i++) {
                        particle(top,left,bg)
                    }
                }
                setTimeout(()=>{
                    document.getElementById('yay').play()
                },200)
                putno(bbg)
                downfall()
    }  
}
