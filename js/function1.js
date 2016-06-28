  0
//兼容性的获取类名
function getClass(classname,obj){
	var obj=obj||document
	if(obj.getElementsByClassName!=undefined){ 
		return obj.getElementsByClassName(classname);
	}else{
		var arr=[];
		var ALL=obj.getElementsByTagName("*")
		for (var i = 0; i < ALL.length; i++) {
			   if(check(ALL[i].className,classname)){
			   	  arr.push(ALL[i])
			   }
		};
		return arr;
	}
}
//如果类名有多个的话，ie6——8不支持，必须将字符串分割成数组，
//然后遍历，一一比较，如果有一个类名相同返回真，否则返回假。
function check(oldclass,newclass){
	   var arr=oldclass.split(" ")
	   for (var i = 0; i < arr.length; i++) {
	     if(arr[i]==newclass){
             return true;
	     }
	    }; 
	  return false; 
}
//-------------------------------------------------------------
//兼容的获取和设置内容

function getText(obj,val){
  if(val==undefined){  
	if (obj.innerText==undefined) {
		return obj.textContent
	}else{
         return obj.innerText
	  }
}
  else{
  	if (obj.innerText==undefined) {
		 obj.textContent=val
	}else{
         obj.innerText=val
	  }
  }
}
//-------------------------------------
 //兼容的获取 行内样式和外部样式
/*   对象.currentStyle.属性 IE 用来获得实际的样式属性
 getComputedStyle(对象,null).属性 FF 用来获得实际的样式属性
 只能获取不能设置*/
function getStyle(obj,attr){
    if (obj.currentStyle) {
    	return obj.currentStyle[attr]
    }else{
    	return getComputedStyle(obj,null)[attr]
    }
}
//$函数  封装windo.onload 和 获取css 选择器

function $(selector,content){
	if(typeof selector=="string"){
		content=content||document;
		if (selector.charAt(0)=="#") {
			return  document.getElementById(selector.substr(1))
		}else if(selector.charAt(0)=="."){
			return getClass(selector.substr(1),content)
		}else if (/^[a-zA-Z][A-Za-z1-6]*$/.test(selector)) {
                  return content.getElementsByTagName(selector)
		}else if(/^<[a-zA-Z][A-Za-z1-6]{0,10}>$/.test(selector)){
                 return document.createElement(selector.slice(1,-1))
		 }

	} else if(typeof selector=="function"){
		 window.onload=function(){
			selector()
		}
	}
}
 
//去除字符串的空格 a 全部 l 左侧 r 右侧 lr 左右 （默认）

function trim(str,type){
	type=type||"rl"
	if (type=="a") {
       return str.replace(/\s*/g,"")
	}else if (type=="l") {
       return str.replace(/^\s*/g,"")
	 }else if (type=="r") {
       return str.replace(/\s*$/g,"")
	   }else if(type=="rl"){
	   	return str.replace(/^\s*|\s*$/g,"")
	   }
}
//获取子节点的集合 
  //a 代表获取文本的子节点 或者获取 元素的子节点（默认）
  //b 获取元素的子节点
function getChilds(obj,type){
   type=type||"a"
    var childs=obj.childNodes;
    var arr=[]
  if(type=="a"){
    for (var i = 0; i < childs.length; i++) {
    	if(childs[i].nodeType==1||(childs[i].nodeType==3&&trim(childs[i].nodeValue)!="")){
    		arr.push(childs[i])
    	}
    }
    return arr;
}
else if(type=="b"){
	for (var i = 0; i < childs.length; i++) {
    	if(childs[i].nodeType==1){
    		arr.push(childs[i])
    	}
    }
    return arr;
}
}

//获取第一个子节点

function getFirst(obj,type){
	return getChilds(obj)[0]
}
//获取最后一个子节点
function getLast(obj,type){
	return getChilds(obj)[getChilds(obj).length-1]
}

//获取一个任意节点
function getNum(obj,num){
	return getChilds(obj)[num]
}

//获取下一个兄弟节点
function getNext(obj,type){
	var next=obj.nextSibling
    if (next==null) {
    	return false
    };
	while(next.nodeType==8||(next.nodeType==3&&trim(next.nodeValue)=="")){
        next=next.nextSibling
}
    if (next==null) {
    	return false
    };
     return next;
}    
//获取上一个兄弟节点
function getSi(obj,type){
   var up=obj.previousSibling
    if (up==null) {
    	return false
    };
    while(up.nodeType==8||(up.nodeType==3&&trim(up.nodeValue)=="233")){
        up=next.previousSibling
}
    if (up==null) {
    	return false
    };
     return up;
}
//获取某个对象的下一个
function insertAfter(obj,afterobj){
	var next=getNext(obj)
	if (next==false) {
		afterobj.parentNode.appendChild(obj)
	};
	return afterobj.parentNode.insertBefore(obj,next)
}
//删除对象  父对象.removeChild(要删除的对象)，此方法只是在页面结构中移除了，
//要想在内存中完全清除还需【要删除的对象=null】
function remove(obj,type){
     obj.parentNode.removeChild(obj)
} 
// 兼容的给对象的同一个事件绑定或删除多个事件处理程序
function On(obj,event,fn){
	if (obj.addEventListener) {
		obj.addEventListener(event,fn,false)
	}else{
		obj.attachEvent("on"+event,fn)
	}
}

function Off(obj,event,fn){
	if (obj.removeEventListener) {
		obj.removeEventListener(event,fn,false)//firefox, ie11,chrome 
	}else{
		obj.detachEvent("on"+event,fn)//ie6-10
	}
}