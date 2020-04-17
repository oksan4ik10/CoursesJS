const calc=document.getElementById("start"),
cancel=document.getElementById("cancel"),
buttonPlus1=document.getElementsByTagName("button")[0],
buttonPlus2=document.getElementsByTagName("button")[1],
check=document.getElementById("deposit-check"),

//right
budgetDayValue=document.getElementsByClassName("budget_day-value")[0],
budgetMonthValue=document.getElementsByClassName("budget_month-value")[0],
expensesMonth=document.getElementsByClassName("expenses_month-value")[0],
incomeValue=document.getElementsByClassName("additional_income-value")[0],
addExpenses=document.getElementsByClassName("additional_expenses-value")[0],
accumulation=document.getElementsByClassName("income_period-value")[0],
missionMonth=document.getElementsByClassName("target_month-value")[0],
//left

money=document.querySelector(".salary-amount"),
incomeTitle=document.querySelector(".income-title"),
addincomeItems=document.querySelectorAll(".additional_income-item"),
expensesTitle=document.querySelector(".expenses-title"),
expensesAmount=document.querySelector(".expenses-amount"),
addExpensesItem=document.querySelector(".additional_expenses-item"),
targetAmount=document.querySelector(".target-amount"),
period=document.querySelector(".period-select"),


periodAmount=document.querySelector(".period-amount"),

inputText=document.querySelectorAll("input[type=text] "); //все инпуты с типом текст для блокировки и разблокировки


//поля доходы и обязательные расходы
let incomeItems=document.querySelectorAll(".income-items"),
expensesItems=document.querySelectorAll(".expenses-items");



//для добавления пустых инпутов (дополнительный доход, обязательные расходы)
const expItem=expensesItems[0].cloneNode(true),
incItem=incomeItems[0].cloneNode(true);

class AppData{
    constructor(){


    this.incomeMonth=0;
    this.addIncome=[];

    this.addExpenses=[];
    this.mission="";
    this.deposit=false;
    this.period=0;
    this.budgetDay=0;
    this.budgetMonth=0;
    this.expensesMonth=0;
    this.percentDeposit=0;
    this.moneyDeposit=0;

    //стали не нужны после объединение двух методов
        // this.income={}; //дополнительный заработок
        // this.expenses={};
    }
        start(){
            this.getExpensIncome();
            // this.getExpensesMonth();
            // this.getIncomeMonth();
            this. getAddExpInc();
            // this.getAddExpenses();
            // this.getAddIncome();
            this.getBudget();
            this.getTargetMonth();
            this.showResult();
            this.res();
            this.addIncome=[];
        }


    //один метод вместо двух getExpensesMonth() и getIncomeMonth() 
        getExpensIncome(){
            let summa=(items)=>{
                let newOb={};
                console.log(items);
                
                items.forEach((el)=>{
                    let nameClass=el.className.split("-")[0],
                    nameProperty=el.querySelector(`.${nameClass}-title`).value.trim(),
                    nameValue=el.querySelector(`.${nameClass}-amount`).value.trim();
                    newOb[nameProperty]=nameValue
                })
                let sum=0;
                for(let key in newOb){
                    if(!isNaN(newOb[key])){
                        sum+=+newOb[key]; 
                    }      
                }
                return sum;
            
            }
            // expensesItems.forEach(summa);
            // incomeItems.forEach(summa);
            this.expensesMonth=summa(expensesItems);
            this.incomeMonth=summa(incomeItems);  

        }


        //один метод вместо двух getAddExpenses() и getAddIncome()
        getAddExpInc(){
            console.log(addincomeItems.value);
            
            
            const addItem=(newArr)=>{
                let arr=[];
                newArr.forEach((el)=>{
                    console.log(el);
                    
                    el=el.trim();
                    if (el!=="") arr.push(el);
                })
               return arr;
            }
            
            let arrAddIncome=[];
            addincomeItems.forEach((el) => arrAddIncome.push(el.value))
            this.addIncome=addItem(arrAddIncome);
            this.addExpenses=addItem(addExpensesItem.value.split(","));

        }
         getBudget(){
            this.budgetMonth=(+money.value+this.incomeMonth)-this.expensesMonth;
            this.budgetDay=(this.budgetMonth/30).toFixed(2);   
          }
          getTargetMonth() {
            let target=parseFloat(targetAmount.value);
            if (!isNaN(target)){
                let res=target/appData.budgetMonth;
                let str=(res>0)?  Math.ceil(res):"Цель не будет достигнута"
                appData.mission=str;
            }
          } 
          showResult(){
            expensesMonth.value=this.expensesMonth;
            addExpenses.value=this.addExpenses.join(", ");
            incomeValue.value=this.addIncome.join(", ");
            
            budgetDayValue.value=this.budgetDay;
            budgetMonthValue.value=this.budgetMonth;
            accumulation.value=+this.budgetMonth*period.value;  
            period.addEventListener("input",()=>accumulation.value=this.budgetMonth*period.value)
            missionMonth.value=this.mission;
          }

          //функция сброса
        res=()=>{
            inputText.forEach((el)=>el.readOnly=true); //блокировать все input
            calc.disabled=false
            calc.style.display="none";
            cancel.style.display="block"; //кнопка сбросить    
        }
            
}

const appData=new AppData ();





//для обнуления значений запомним начальное состояние appData
const oldAppData={}
 for(key in appData){
     oldAppData[key]=appData[key];
 }



//функции для добавления новых полей по клику по +
const addExpensesValue=()=>{
    let newEl=expItem.cloneNode(true);
    if (expensesItems.length<3){
       expensesItems[expensesItems.length-1].parentNode.insertBefore(newEl,buttonPlus2);
    }
    expensesItems=document.querySelectorAll(".expenses-items")                      
};

const addIncomeValue=()=>{
    let newItem=incItem.cloneNode(true);
    if (incomeItems.length<3){
       incomeItems[0].parentNode.insertBefore(newItem,buttonPlus1);
    }
    incomeItems=document.querySelectorAll(".income-items")   
};



//сброс всех инпутов
cancel.addEventListener("click",()=>{
    let inputAll=document.querySelectorAll("input");
    inputAll.forEach((el)=>{
        if (el.type==="range") el.value=1
        else el.value="";
    });
    for(key in appData){
        appData[key]=oldAppData[key];
    }
    inputText.forEach((el)=>el.readOnly=false);
    
    
    calc.style.display="block";
    calc.disabled=true;
    cancel.style.display="none"; //кнопка сбросить 
 })


 //пока не заполнено поле Бюджет, кнопка Рассчитать не работает
calc.disabled=true;
 money.addEventListener("input",()=>{
     if (money.value!==""){         
        calc.disabled=false;
     }
     else{ calc.disabled=true}
 })
calc.addEventListener("click",appData.start.bind(appData));//привязка к контексту





buttonPlus1.addEventListener("click",addIncomeValue);
buttonPlus2.addEventListener("click",addExpensesValue);
period.addEventListener("input",()=>periodAmount.textContent=period.value)


 //запрет ввода 
const nameWords=document.querySelectorAll("input[placeholder='Наименование']"),
nameSum=document.querySelectorAll("input[placeholder='Сумма']");

nameWords.forEach((el)=>{
        el.addEventListener("input",(e)=>{
           e.target.value=e.target.value.replace(/([A-Z])|(\d)/gi,"");
        })
})
nameSum.forEach((el)=>{
    el.addEventListener("input",(e)=>{
        e.target.value=e.target.value.replace(/\D/g,"");
    })
})

