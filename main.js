let randomColor=()=>{
    let chislo=Math.floor(Math.random()*16777216);
    let newColor=chislo.toString(16);
    while (newColor.length<6){
        newColor="0"+newColor.slice(0);
    }
    return newColor;
}

let h=document.querySelector("h1");
let button=document.querySelector("button");
button.addEventListener("click",()=>{
    let color="#"+randomColor();
    h.textContent=color;
    document.body.style.backgroundColor=color;

})





