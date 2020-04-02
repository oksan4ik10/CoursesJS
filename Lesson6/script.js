// function isNum(n){
//     return !isNaN(parseFloat(n)) && isFinite(n);
// }
// console.log(isNum(prompt()))
function game(){
    let num=150;
    let user=prompt("Угадай число от 1 до 100");
    
    if (user===null){
        return;
    } 
    else if (user==num){
        alert("Вы угадали! Ура");
        return;
    }
    else{
        if (num>user) {
            alert("Загаданное число больше")
        } else if(num<user){
            alert("Загаданное число меньше")
        } else if (isNaN(user)){
            alert("Вы ввели не число!")
        } 
        game();
    }
}

game();