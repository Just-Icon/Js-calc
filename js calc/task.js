
const firstNumber = parseFloat(window.prompt("Enter a number: "));
const secondNumber = parseFloat(window.prompt("Another number: "));
const ops = window.prompt("Choose any of these operators(+, -, *, /)")

if (ops == "+") {
    result = firstNumber + secondNumber
    window.alert(result)
}else if (ops == "-") {
    result = firstNumber - secondNumber
    window.alert(result)
}else if (ops == "*") {
    result = firstNumber * secondNumber
    window.alert(result)
}else if (ops == "/"){
    result = firstNumber / secondNumber
    window.alert(result)
}