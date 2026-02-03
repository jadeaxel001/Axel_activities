function plus(){
    document.getElementById('operator').value = '+';  
    const display = document.getElementById('display').value;

    if (display.value !== "0"){
        document.getElementById('display2').value = display;
        document.getElementById('display').value = "0";
    }
}
function minus(){
    document.getElementById('operator').value = '-';  
    const display = document.getElementById('display').value;

    if (display.value !== "0"){
        document.getElementById('display2').value = display;
        document.getElementById('display').value = "0";
    }
}
function times(){
    document.getElementById('operator').value = '*';  
    const display = document.getElementById('display').value;

    if (display.value !== "0"){
        document.getElementById('display2').value = display;
        document.getElementById('display').value = "0";
    } 
}
function divide(){
    document.getElementById('operator').value = '/';  
    const display = document.getElementById('display').value;

    if (display.value !== "0"){
        document.getElementById('display2').value = display;
        document.getElementById('display').value = "0";

    }
}
function equals() {
    const num = document.getElementById('display').value;
    const num2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (operator == "+") {
        answer = Number(num) - Number(num2);
    }
    else if(operator == "-") {
        answer = Number(num) - Number(num2);
    }
    else if(operator == "*") {
        answer = Number(num) * Number(num2);
    }
    else if(operator == "/") {
        answer = Number(num) / Number(num2);
    }
    document.getElementById('display').value = answer;
    document.getElementById('display2').value = "0";
    document.getElementById('operator').value = "";


}