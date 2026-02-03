function normal() {
    const sum = getSum(11,20);
    alert(sum);
}

function withParameter(fname,lname) {
    alert("Hello " + fname + " " + lname);
}

function getSum(num1, num2) {
    const sum = num1 + num2;
    return sum;
}


window.calculate = function(a, b, op){
    switch(op){
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b === 0 ? 'Error' : a / b;
        default: return b;
    }
};
