function isNum(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}


function game(){
    let num,count;
    function data(){
        num=Math.round(Math.random()*100);
        console.log(num);
        count=0;
    }
    data();
    function change(){
        
        let user=prompt("Угадай число от 1 до 100");
        count++;
        console.log(count);
        if (count===10){
            if(confirm("Попытки закончились, хотите сыграть еще?")) data();
            else return;
            change();
        }
        if (isNum(user)){   
            if (+user===num){
                if(confirm("Поздравляю, Вы угадали! \n Хотите сыграть еще?")) data();
                else return;
                change();
            } else{
                if (num>user) {
                    alert(`Загаданное число больше \n Осталось попыток ${10-count}`)
                } else if(num<user){
                    alert(`Загаданное число меньше \n Осталось попыток ${10-count}`)
                } 
                change();
            }
        }
        else{
            if (user===null){
                alert ("Игра закочена..");
                return;
            }
            else {
                alert("Вы ввели не число!")
            }
            change();
        } 
    }
    return change();
    
}

game();