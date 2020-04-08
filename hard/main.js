//7
let week=['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
let month=['январь','февраль',"март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"]

 
  
  

function words(clock,minute,sec){
    let c=+clock%10,
    m=+minute%10,
    s=+sec%10,
    strClock, strMinute,strSec;
    if ((clock>20||clock<10)&&c==1) {strClock= "час"}
    else if ((clock>20||clock<10)&&(c==2||c==3||c==4))strClock= "часа"
    else strClock="часов";
    if ((minute>20||minute<10)&&m==1) {strMinute= "минута"}
    else if ((minute>20||minute<10)&&(m==2||m==3||m==4))strMinute= "минуты"
    else strMinute="минут";
    if ((sec>20||sec<10)&&s==1) {strSec= "секунда"}
    else if ((sec>20||sec<10)&&(s==2||s==3||s==4))strSec= "секунды"
    else strSec="секунд";
    return [strClock,strMinute,strSec];
}

setInterval(()=>{
    document.body.textContent="";
    let day=new Date().toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
      });
    date=day.split(", ");
time=date[2].split(":");
time.forEach((element,index) => {
    time[index]=parseInt(element)
});

timeWord=words(...time);

s1=`Сегодня ${date[0]}, ${date[1]}, ${time[0]} ${timeWord[0]} ${time[1]} ${timeWord[1]} ${time[2]} ${timeWord[2]}`;
let p1=document.createElement("p");
p1.style="color:red";
p1.innerHTML=s1;
document.body.append(p1);
// document.write(`<font color='red'>${s1}</font><br>`)

timeD=new Date().toLocaleDateString();
s2=`${timeD} - ${date[2]}`;
let p2=document.createElement("p");
p2.style="color:red";
p2.innerHTML=s2;
document.body.append(p2);

},1000)


