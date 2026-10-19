const hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", function () {
    hoverBox.style.backgroundColor = "#e74c3c";
    hoverBox.textContent = "Мышь наведена!";
});

hoverBox.addEventListener("mouseout", function () {
    hoverBox.style.backgroundColor = "#3498db";
    hoverBox.textContent = "Наведите курсор!";
});

const liveInput = document.getElementById("liveInput");
const liveOutput = document.getElementById("liveOutput");

liveInput.addEventListener("keyup", function () {
    if (liveInput.value.trim() === "") {
        liveOutput.textContent = "...";
    } else {
        liveOutput.textContent = liveInput.value;
    }
});

function calculate(operator) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultSpan = document.getElementById("calcResult");

    if (isNaN(num1) || isNaN(num2)) {
        resultSpan.textContent = "Пожалуйста, введите оба числа!";
        return;
    }

    let result = 0;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultSpan.textContent = "Ошибка: Деление на ноль!";
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    resultSpan.textContent = result;
}