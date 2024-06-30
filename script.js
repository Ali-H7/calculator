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

let num1; 
let num2; 
let operator; 

function operate(num1 ,num2, operator) {
    if (operator == add) {
        add(num1, num2)
    } else if (operator == subtract) {
        subtract(num1, num2)
    } else if (operator == multiply) {
        multiply(num1, num2)
    } else if (operator == divide) {
        divide(num1, num2)
    }
}

