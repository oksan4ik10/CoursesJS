//7
let week=['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
let day=new Date();
let numberWeek=day.getDay();
let s="";
week.forEach((el,i)=>{
    if ((i===5)||(i===6)){        
        s=`<font color="red">${el}</font><br>`;
    }else   s=el+"<br>";
    if ((numberWeek-1)===i){
        s=`<b>${el}</b><br>`;
    }
    document.writeln(s);
}

);