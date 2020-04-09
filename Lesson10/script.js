let adv=document.querySelector(".adv"),
books=document.querySelectorAll(".book"),
asideBooks=document.querySelector(".books"),
books2List=books[0].querySelectorAll("li"),
books2=books[0].querySelector("ul"),
books5List=books[5].querySelectorAll("li"),
books5=books[5].querySelector("ul"),

books6=books[2].querySelector("ul"),
books6List=books6.querySelectorAll("li"),

newEl=document.createElement("li");
newEl.textContent="Глава 8: За пределами ES6"
books6List[books6List.length-2].append(newEl);

adv.remove();

 



// asideBooks.append(books[1]);
// asideBooks.append(books[0]);
// asideBooks.append(books[4]);
// asideBooks.append(books[3]);
// asideBooks.append(books[5]);
// asideBooks.append(books[2]);

document.body.style="background-image: url(./image/you-dont-know-js.jpg);";

books[4].querySelector("h2 a").textContent="Книга 3. this и Прототипы Объектов";


//v 1.0
function laziness(arr,book){
    let count=[];
    for (let i=2; i<arr.length;i++)
    {
        if (arr[i].textContent.indexOf("Глава 1")!==-1) count[0]=arr[i];
        else if (arr[i].textContent.indexOf("Глава 2")!==-1) count[1]=arr[i];
        else if (arr[i].textContent.indexOf("Глава 3")!==-1) count[2]=arr[i];
        else if (arr[i].textContent.indexOf("Глава 4")!==-1) count[3]=arr[i];
        else if (arr[i].textContent.indexOf("Глава 5")!==-1) count[4]=arr[i];
        else if (arr[i].textContent.indexOf("Глава 6")!==-1) count[5]=arr[i];
        else if (arr[i].textContent.indexOf("Приложение A")!==-1) count[6]=arr[i];
        else if (arr[i].textContent.indexOf("Приложение B")!==-1) count[7]=arr[i];
        else if (arr[i].textContent.indexOf("Приложение C")!==-1) count[8]=arr[i];
        else if (arr[i].textContent.indexOf("Приложение D")!==-1) count[9]=arr[i];
    }
    for (let index = 0; index < count.length; index++) {
        if(count[index]!==undefined){
            book.append(count[index]);    
        }
            
    }
}

// v2/0
books2List[1].after(books2List[3]);
books2List[3].after(books2List[6]);
books2List[6].after(books2List[8]);
books2List[9].after(books2List[2]);

books5List[1].after(books5List[9]);
books5List[4].after(books5List[2]);
books5List[7].after(books5List[5]);


