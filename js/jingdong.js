  //可关闭按钮
  var guanbi=getClass("keguanbi_btn")[0];
  var keguanbi_box=getClass("keguanbi_box")[0];
  guanbi.onclick=function(){
      keguanbi_box.style.display="none";
  }
  guanbi.onmouseover=function(){
     guanbi.style.background="#c81623";
  }
  guanbi.onmouseout=function(){
     guanbi.style.background="";
  }

//--------------------------------------------------------------
  var imgs=getClass("banner")[0].getElementsByTagName('li')
  var lists=getClass("btn")[0].getElementsByTagName('li')  
//轮播图 
var  temp=0; 
function move(){    
       for (var i = 0; i < imgs.length; i++) {
            animate(imgs[i],{opacity:0});
            lists[i].style.background=""
       };       
          temp++;   
         if (temp>=imgs.length) {
            temp=0
         }; 
           animate(imgs[temp],{opacity:1});  
           lists[temp].style.background="#c81623" 
}
var t=setInterval(move,2000)
//滑到图片和按钮上以后清除轮播
  var big_box=getClass("bigBox")[0]
  var left=getClass("btn_left")     
  var right=getClass("btn_right")  
  big_box.onmouseover=function(){
    //调试多遍以后想到这种触发事件类型，只能给对象绑定一次事件。
    // 按钮消失
      left[0].style.display="block";
      right[0].style.display="block";
      //停止动画
       clearInterval(t)
  }
   big_box.onmouseout=function(){
    // 按钮隐藏
       left[0].style.display="none";
       right[0].style.display="none";
       //开始动画
       t=setInterval(move,2000)
  }
  //选项卡 banner (按钮)
   for (var i = 0; i < lists.length; i++) {
            lists[i].index=i
            lists[i].onmouseover=function(){
               for (var j = 0; j <imgs.length; j++) {
                    animate(imgs[j],{opacity:0});
                   lists[j].style.background=""
               };
               temp=this.index
               animate(imgs[this.index],{opacity:1});  
               lists[this.index].style.background="#c81623" 
     };
} 
 //按钮消失隐藏 
 var qiehuan=getClass("qiehuan_right_img_box")[0]
 var qiehuan_box=getClass("qiehuan_right")
 qiehuan.onmouseover=function(){
  left[1].style.display="block";
  right[1].style.display="block";
 }
 qiehuan.onmouseout=function(){
  left[1].style.display="none";
  right[1].style.display="none";
 }   
//左右按钮
 
left[0].onclick=function(){
  temp--
  if(temp==-1){
    temp=imgs.length-1
  }
  for (var i = 0; i < imgs.length; i++) {
    animate(imgs[i],{opacity:0});
    lists[i].style.background=""
  };
  animate(imgs[temp],{opacity:1});
  lists[temp].style.background="#c81623"
}  
right[0].onclick=function(){
     for (var i = 0; i < imgs.length; i++) {
        animate(imgs[i],{opacity:0});
        lists[i].style.background=""
   };       
      temp++;   
     if (temp>=imgs.length) {
        temp=0
     }; 
       animate(imgs[temp],{opacity:1});  
       lists[temp].style.background="#c81623" 
} 

//-----------------------------------------------------

 //-----------------------------------
 var w=parseInt(getStyle(qiehuan_box[0],"width"));

  qiehuan.style.width=w*qiehuan_box.length+"px";
  var index=0
right[1].onclick=function() {
    index++;
    if(index>qiehuan_box.length-1){
      index=0
    }
       
       animate(qiehuan,{marginLeft:-index*w},200)
}  

left[1].onclick=function() {
    index--;
    if(index==-1){
      index=qiehuan_box.length-1
    }
       
       animate(qiehuan,{marginLeft:-index*w},200)
}  


//-------------------------------------

//--------------------------------1楼选项卡
function xxk(links,imgBox){
   for (var j = 0; j < links.length; j++) {
       links[j].index=j  
       links[j].onmouseover=function(){
           for (var i = 0; i < links.length; i++) {
                 imgBox[i].style.zIndex=""
                 links[i].className=""
           };
           imgBox[this.index].style.zIndex='20'
           links[this.index].className="floor_li1"
     }
   }  
 }
var links=getClass("floor_list")[0].getElementsByTagName('li')
var imgBox=getClass("floor-bigbox1") 
xxk(links,imgBox)

var links=getClass("floor_list")[1].getElementsByTagName('li')
var imgBox=getClass("floor-bigbox2")
xxk(links,imgBox)

var links=getClass("floor_list")[2].getElementsByTagName('li')
var imgBox=getClass("floor-bigbox3") 
xxk(links,imgBox)

var links=getClass("floor_list")[3].getElementsByTagName('li')
var imgBox=getClass("floor-bigbox4") 
xxk(links,imgBox)

var links=getClass("floor_list")[4].getElementsByTagName('li')
var imgBox=getClass("floor-bigbox5") 
xxk(links,imgBox)


var links=getClass("floor_list")[5].getElementsByTagName('li')
var imgBox=getClass("floor-bigbox6") 
xxk(links,imgBox)

var links=getClass("floor_list")[6].getElementsByTagName('li')
var imgBox=getClass("floor-bigbox7") 
xxk(links,imgBox)

var links=getClass("floor_list")[7].getElementsByTagName('li')
var imgBox=getClass("floor-bigbox8") 
xxk(links,imgBox)

var links=getClass("floor_list")[8].getElementsByTagName('li')
var imgBox=getClass("floor-bigbox9") 
xxk(links,imgBox)

var links=getClass("floor_list")[9].getElementsByTagName('li')
var imgBox=getClass("floor-bigbox10") 
xxk(links,imgBox)


var links=getClass("floor_list")[10].getElementsByTagName('li')
var imgBox=getClass("floor-bigbox11")
xxk(links,imgBox)


//--------------------------------11楼选项卡


//天天低价效果

var im=getClass("im")
var tian_left=getClass("tian_left")[0]
for (var i = 0; i < im.length; i++) {
  im[i].index=i;
  im[i].onmouseover=function(){  
    animate(this,{left:0},400)
  }
  im[i].onmouseout=function(){
    animate(this,{left:10},400)
  }
}
  tian_left.onmouseover=function(){
    animate(tian_left,{left:30},400)
  }
  tian_left.onmouseout=function(){
    animate(tian_left,{left:40},400)
  }
//固定

  var box=getClass("box")
  for (var i = 0; i < box.length; i++) {
       Left(box[i],getClass("down",box[i])[0])

  };
  function Left(box,down){
  box.onmouseover=function(){
    animate(down,{left:-58},500,Tween.Quart.easeIn)
  }
  box.onmouseout=function(){
    animate(down,{left:0},500,Tween.Quart.easeIn)
  }
}

//京东生活
var IM=getClass("IM")
for (var i = 0; i < IM.length; i++) {
  IM[i].index=i;
  IM[i].onmouseover=function(){  
    animate(this,{left:0},300)
  }
  IM[i].onmouseout=function(){
    animate(this,{left:10},300)
  }
}
//3楼轮播
//-------------------------------------------------------封装函数开始
function lunbo(box3,img3box,Img,w,lbtn3,rbtn3,btns){

    img3box.style.width=w*Img.length+"px"
   var ind=0;
    function Move(){
      ind++;
      if(ind==Img.length){
        ind=0
      }
     
     for (var i = 0; i < btns.length; i++) {
       btns[i].style.background=""
     };
     animate(img3box,{marginLeft:-ind*w},200)
      btns[ind].style.background="#a50000"
}
var t=setInterval(Move,2000)
//--------------------------------
box3.onmouseover=function(){
  lbtn3.style.display="block"
  rbtn3.style.display="block"
  clearInterval(t)
}
box3.onmouseout=function(){
  lbtn3.style.display="none"
  rbtn3.style.display="none"
  t=setInterval(Move,2000)
}
//-----------------------------------
lbtn3.onclick=function(){
  ind--;
  if(ind==-1){
        ind=Img.length-1
      }
      for (var i = 0; i < btns.length; i++) {
         btns[i].style.background="";
     };
     animate(img3box,{marginLeft:-ind*w},200)
         btns[ind].style.background="#a50000";
}
rbtn3.onclick=function(){
  Move()
}
//---------------------------------
for (var i = 0; i < btns.length; i++) {
  btns[i].index=i
  btns[i].onmouseover=function(){
      ind=this.index-1;
      Move()
  }
};
}
//-----------------------------------------------封装函数结束
var lbtn3=getClass("lbtn3")
var rbtn3=getClass("rbtn3")
var box3=getClass("box3")
var img3box=getClass("img3box")

var Img=getClass("img3box")[0].getElementsByTagName("a")
var btns=getClass("btns3")[0].getElementsByTagName("li")
var w=parseInt(getStyle(Img[0],"width"))
lunbo(box3[0],img3box[0],Img,w,lbtn3[0],rbtn3[0],btns)


var Img=getClass("img3box")[1].getElementsByTagName("a")
var btns=getClass("btns3")[1].getElementsByTagName("li")
var w=parseInt(getStyle(Img[1],"width"))
lunbo(box3[1],img3box[1],Img,w,lbtn3[1],rbtn3[1],btns)


var Img=getClass("img3box")[2].getElementsByTagName("a")
var btns=getClass("btns3")[2].getElementsByTagName("li")
var w=parseInt(getStyle(Img[2],"width"))
lunbo(box3[2],img3box[2],Img,w,lbtn3[2],rbtn3[2],btns)




//-----------------------------------------封装函数结束

//天天低价之热门晒单滚动开始
var bigbox=$(".info-right")[0]
var box=$(".up-wheel")[0]
var listss=$("li",box)
var W=parseInt(getStyle(listss[0],"height"))
box.style.height=W*lists.length+"px";
 function gun(){        
          box.style.marginTop=-W+"px";
          box.insertBefore(getLast(box),getFirst(box))
          animate(box,{marginTop:0},500)
}
var t2=setInterval(gun,2000)
bigbox.onmouseover=function(){
  clearInterval(t2)
}
bigbox.onmouseout=function(){
   t2=setInterval(gun,2000)
}

//搜索框聚焦和失去焦点
var input=$("#sousuo_search_box")
var v=input.value
input.onfocus=function(){
  if (this.value==v) {
    this.value=""
  }

}
input.onblur=function(){
  if (this.value=="") {
    this.value=v
  };
}
//返回顶部
var fh=$(".fh")[0]
var ding=$(".dingbu")[0]
fh.onclick=function(){
  var doc=document.body.scrollTop?document.body:document.documentElement
  animate(doc,{scrollTop:0},600)
}
ding.onclick=function(){
  var doc=document.body.scrollTop?document.body:document.documentElement
  var speed=10;
  var t=setInterval(function(){
      doc.scrollTop-=speed;
    if (doc.scrollTop==0) {
      clearInterval(t)
    };
  },1000/60)


}
//跳转楼层
var floor=$(".floor")
var ding1=$(".ding1")
var aRR=[]
for (var i = 0; i < floor.length; i++) {
       aRR.push(floor[i].offsetTop)
       ding1[i].ind=i;
       ding1[i].onclick=function(){
       animate(document.body,{scrollTop:aRR[this.ind]},200)
       animate(document.documentElement,{scrollTop:aRR[this.ind]},200)
  }
};

var nums=$(".ding-b")
var fonts=$(".ding-a")
function MOVE(){
  var doc=document.body.scrollTop?document.body:document.documentElement
      var now=doc.scrollTop
  for (var i = 0; i < aRR.length; i++) {
       if ( now>=aRR[i]) {
        for (var j = 0; j < aRR.length; j++) {
             nums[j].style.display="block"
             fonts[j].style.display="none"
             
        };
        nums[i].style.display="none"
        fonts[i].style.display="block"};
  };
}
On(window,"scroll",MOVE)
//按需加载
var newarr=[]
var fl=$(".fl")

for (var i = 0; i < fl.length; i++) {
    newarr.push(fl[i].offsetTop)
};
var h=document.documentElement.clientHeight
function move(){

  var NOW=document.body.scrollTop||document.documentElement.scrollTop
  for (var i = 0; i < newarr.length; i++) {
  if (NOW>newarr[i]+h) {
    var imgs=$("img",newarr[i])
    for (var j = 0; j < imgs.length; j++) {
      imgs[j].src=imgs[j].getAttribute("asrc")
    }; 
  }; 
};
}
On(window,"scroll",move)