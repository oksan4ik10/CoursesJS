let num=266219;
let str=String(num);
let res=1;
for (let index = 0; index < str.length; index++) {
    res*=+(str[index]);
}
res=res**3;
console.log(String(res).substring(0,2));