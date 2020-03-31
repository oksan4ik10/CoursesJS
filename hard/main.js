"use strict";
//2
// let num=266219;
// let str=String(num);
// let res=1;
// for (let index = 0; index < str.length; index++) {
//     res*=+(str[index]);
// }
// res=res**3;
// console.log(String(res).substring(0,2));

//3
// let lang="ru";
// if (lang=="ru"){
//     console.log("Понедельник \n Вторник \n Среда\n Четверг \n Пятница \n Суббота \n Воскресенье");
// }
// else if (lang=="en"){
//     console.log("Mondey \n Tuesday \n Wednesday\n Thursday \n Friday \n Saturday \n Sunday");
// }

// switch(lang){
//     case "ru":
//             console.log("Понедельник \n Вторник \n Среда\n Четверг \n Пятница \n Суббота \n Воскресенье");
//             break;
//     case "en":
//             console.log("Mondey \n Tuesday \n Wednesday\n Thursday \n Friday \n Saturday \n Sunday");
//             break;
//     default:
//         console.log("error");
// }

// let new_arr={ru:"Понедельник \n Вторник \n Среда\n Четверг \n Пятница \n Суббота \n Воскресенье",en:"Mondey \n Tuesday \n Wednesday\n Thursday \n Friday \n Saturday \n Sunday"};
// console.log(new_arr[lang]);

// let namePerson="Максим";

// namePerson=="Артем"? console.log("директор"):namePerson=="Максим"?
// console.log("преподаватель"):console.log("студент");

//4
let strFunc=(str)=>{
    if (typeof(str)==="string"){
        str=str.replace(/\s\s+/g,"");
        if (str.length>30){
            str=str.substring(0,30)+"...";
        }
        return str;
    }
    else{
        return "Аргумент  не строка!";
    }
}

console.log(strFunc("     Поэтому мы решили написать ознакомительный материал. Мы поговорим о системе контроля версий и логике её работы, с самых азов. С Git можно работать с помощью  разных клиентов, потому в статье не пойдет речь об интерфейсе пользователя. Это может показаться непривычным, но это сделано намеренно. Вместо этого мы сфокусируемся на рабочем каталоге, коммитах, ветках, командах pull, push и прочих.    "));