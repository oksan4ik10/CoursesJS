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
    this.income={}; //дополнительный заработок
    this.incomeMonth=0;
    this.addIncome=[];
    this.expenses={};
    this.addExpenses=[];
    this.mission="";
    this.deposit=false;
    this.period=0;
    this.budgetDay=0;
    this.budgetMonth=0;
    this.expensesMonth=0;
    this.percentDeposit=0;
    this.moneyDeposit=0;
    }
        start(){
            this.getExpensesMonth();
            this.getIncomeMonth();
            this.getAddExpenses();
            this.getAddIncome();
            this.getBudget();
            this.getTargetMonth();
            this.showResult();
            this.res();
            this.addIncome=[];
        }
        getExpensesMonth(){
                expensesItems.forEach((el)=>{
                appData.expenses[el.querySelector(".expenses-title").value.trim()]=el.querySelector(".expenses-amount").value.trim();
            })
            let sum=0;
            for(let key in this.expenses){
                if(!isNaN(this.expenses[key])){
                    sum+=+this.expenses[key]; 
                }      
            }
            this.expensesMonth=sum;
        }
        getIncomeMonth() {
            incomeItems.forEach((el)=>{
                this.income[el.querySelector(".income-title").value.trim()]=el.querySelector(".income-amount").value.trim();
            })
            let sum=0;
            for(let key in this.income){
                if(!isNaN(this.income[key])){
                    sum+=+this.income[key]; 
                }      
            }
            this.incomeMonth=sum;    
        }
        getAddExpenses(){
            let arr=[];
            let newEl=addExpensesItem.value.split(",");
            newEl.forEach((el)=>{
                el=el.trim();
                if (el!=="") arr.push(el);
            })
            return arr;
         }

         getAddIncome(){
            this.addIncome=[];
            addincomeItems.forEach((el)=>{            
                el=el.value.trim();
                if (el!=="") this.addIncome.push(el);
            })
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
            addExpenses.value=this.getAddExpenses().join(", ");
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

