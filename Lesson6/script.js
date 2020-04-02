function isNum(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}


function game(){
    let num=Math.round(Math.random()*100);
    console.log(num);
    function change(){
        let user=prompt("Угадай число от 1 до 100");
        if (isNum(user)){   
            if (+user===num){
                alert("Ты выиграл! ура :)")
                return;
            } else{
                if (num>user) {
                    alert("Загаданное число больше")
                } else if(num<user){
                    alert("Загаданное число меньше")
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