getTheNumbers()
getTheOperator()
calculate()
allClear()
deleteBtn()

function add(add1, add2) {
    return add1 + add2;
}
function subtract(sub1, sub2) {
    return sub1 - sub2;
}
function multiply(multi1, multi2) {
    return multi1 * multi2;
}
function divide(div1, div2) {
    return div1 / div2;
}

let num1 = ""
let num2 = ""
let operator = ""
function operate() {
        num1 = +num1;
        num2 = +num2;
        if (operator == "×") {
            num1 = multiply(num1, num2).toString();
            displayResult();
        } else if (operator == "+") {
            num1 = add(num1, num2).toString();
            displayResult();
        } else if (operator == "−") {
            num1 = subtract(num1, num2).toString();
            displayResult();
        } else {
            if (num1.toString() == "0" || num2.toString() == "0"){
                num1 = ""
                num2 = ""
                operator = ""
                alert("You can't do that !!!")
                return display();
            }
            num1 = divide(num1, num2).toString();
            displayResult();
        }
}

function getTheNumbers() {
    const numberBtns = document.querySelectorAll(".numbers"); 
    numberBtns.forEach(numberBtn => {
        numberBtn.addEventListener("click", e => {
            if (!num1 == "" && operator == "") {
                num1 += e.target.innerText;
                display()
            } else if (operator == ""){
                num1 = e.target.innerText;
                display()
            }
            if (!operator == "" && num2 == "") {
                num2 = e.target.innerText;
                display()
            } else if (!operator == "" && !num2 == "") {
                num2 += e.target.innerText;
                display()
            }
        });
    })
}

function getTheOperator() {
    const operatorBtns = document.querySelectorAll(".operators"); 
    operatorBtns.forEach(operatorbtn => {
        operatorbtn.addEventListener("click", e => {
            if (num1 == "") {
                operator = ""
                display()
            } else if (!operator == "") {
                operator = ""
                operator = e.target.innerText
                display()
            } else {
                operator = e.target.innerText
                display()
            }
        });
    })
}

function display() {
    let display = document.querySelector(".display"); 
    display.textContent = `${num1}${operator}${num2}`;
}

function allClear() {
    const clearBtn = document.querySelector(".ac-btn");
    clearBtn.addEventListener("click", () => {
        num1 = "";
        num2 = "";
        operator = "";
        display();
    })
}

function deleteBtn() {
    const deleteBtn = document.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        if (!num1 == "" && !operator == "" && !num2 == "") {
            num2 = num2.slice(0, -1);
            display();
        } else if (!num1 == "" && !operator == ""){
            operator = "";
            display();
        } else {
            num1 = num1.slice(0, -1);
            display();
        }
        
    })
}

function calculate() {
    const calcBtn = document.querySelector(".calculate")
    calcBtn.addEventListener("click", e => {
    operate();    
    })
}

function displayResult(){
    num2 = ""
    operator = "";
    display();
}
