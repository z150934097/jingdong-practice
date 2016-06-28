//事件流
var cheng=$(".chengshi")[0]
var sp=$("span",cheng)
cheng.onclick=function(e){
   var ev=e||window.event
   var shi=ev.target||ev.srcElement  
   if(shi.nodeName=="SPAN"){
  for (var i = 0; i < sp.length; i++) {
   	sp[i].style.cssText=""
   };
   shi.style.cssText="background:#C81623;color:#fff;"

    }
 }  