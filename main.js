let DomElement=function(selector,height,width,bg,fontSize){
    this.selector=selector; 
    this.height=height; 
    this.width= width; 
    this.bg=bg; 
    this.fontSize=fontSize;
  
}

DomElement.prototype.createElem=function(text){
    let newEl,
    styles=`height:${this.height};
            width:${this.width};
            background-color:${this.bg};
            font-size:${this.fontSize};
            position:absolute`;
    if (this.selector[0]===".") newEl=document.createElement("div");
    else if (this.selector[0]==="#") newEl=document.createElement("p");
    newEl.classList.add(this.selector);
    newEl.style.cssText=styles;
    newEl.textContent=text;
    return newEl;
}


let elem=new DomElement(".block","100px","100px","red","14px");

let square=elem.createElem("HI")
document.body.append(square);



//движение квадрата по экрану с проверкой на ширину и высоту окна
document.addEventListener("keydown",(el)=>{
    let right=parseInt(square.style.left),
    top=parseInt(square.style.top),
    width=document.documentElement.clientWidth,
    height=document.documentElement.clientHeight,
    squareWidth=parseInt(square.style.width),
    squareHeight=parseInt(square.style.height);
    
    if (!right) right=square.offsetLeft;
    if(!top) top=square.offsetTop;

    if(el.key==="ArrowRight") if ((right+squareWidth)<width) right+=10;
    if (el.key==="ArrowLeft") if (right-10>0) right-=10;
    if (el.key==="ArrowUp") if (top-10>0) top-=10;
    if (el.key==="ArrowDown") if (squareHeight+top<height) top+=10;
            
    square.style.left=right+"px";
    square.style.top=top+"px";
    
    
})