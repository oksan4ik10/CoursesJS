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
            font-size:${this.fontSize}`;
    if (this.selector[0]===".") newEl=document.createElement("div");
    else if (this.selector[0]==="#") newEl=document.createElement("p");
    newEl.classList.add(this.selector);
    newEl.style.cssText=styles;
    newEl.textContent=text;
    return newEl;
}


let elem=new DomElement(".block","100px","100px","red","14px");

document.body.append(elem.createElem("HI"));

