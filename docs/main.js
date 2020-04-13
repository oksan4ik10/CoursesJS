let todoControl=document.querySelector(".todo-control"),
headerInput=document.querySelector(".header-input"),
todoList=document.querySelector(".todo-list"),
todoCompleted=document.querySelector(".todo-completed");

todoObj=[]

const render=()=>{
    todoList.textContent="";
    todoCompleted.textContent="";
    todoObj.forEach((element,index) => {
        let newEl=document.createElement("li");
        newEl.classList.add("todo-item");
        newEl.innerHTML=`<span class="text-todo">${element.input}</span>
        <div class="todo-buttons">
            <button class="todo-remove"></button>
            <button class="todo-complete"></button>
        </div>`
        if(element.isValue) todoCompleted.append(newEl)
        else todoList.append(newEl);
        let btnTodoComplete=newEl.querySelector(".todo-complete");
        
        //добавить элемент в список
        btnTodoComplete.addEventListener("click",()=>{
            element.isValue=!element.isValue;
            render();
        })
        //добавляем элементы в локальное хранилище
        localStorage[element.input]=[element.isValue];
        console.log(localStorage);
        //удалить элемент из списка
        let btnTodoRemove=newEl.querySelector(".todo-remove");
        btnTodoRemove.addEventListener("click",()=>{
           todoObj.splice(index,1);
           //удаляем из локального хранилища
           localStorage.removeItem(element.input);
           console.log(localStorage);
            
           render();

        })
        
    });
}

todoControl.addEventListener("submit",()=>{
    event.preventDefault();    
    if (headerInput.value!==""){
        let newLi={
            input:headerInput.value,
            isValue:false
        }
        todoObj.push(newLi);
        headerInput.value="";
        render();
    }
    
})


//создание и рендер массива элементов из localStorage
if (localStorage.length!==0){
    for (key in localStorage){
        if(typeof(localStorage[key])==="string"){
            let newElem=localStorage[key];
            newElem==="true"?newElem=true:newElem=false;
            let newElement={
            input:key,
            isValue:newElem
        }
        todoObj.push(newElement);
    }
        
    }

        render();
}
