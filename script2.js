const contentParagraph = document.getElementById("contentParagraph");
const changeTextBtn = document.getElementById("changeTextBtn");

changeTextBtn.addEventListener("click", function () {
    contentParagraph.textContent = "Hello, JavaScript!";
});


const styleBox = document.getElementById("styleBox");
const boxText = document.getElementById("boxText");
const changeBgBtn = document.getElementById("changeBgBtn");
const changeFontSizeBtn = document.getElementById("changeFontSizeBtn");

const colors = ["#ffeaa7", "#fab1a0", "#74b9ff", "#55efc4", "#a29bfe", "#fd79a8"];

changeBgBtn.addEventListener("click", function () {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    styleBox.style.backgroundColor = randomColor;
});

let isLargeFont = false;
changeFontSizeBtn.addEventListener("click", function () {
    if (!isLargeFont) {
        boxText.style.fontSize = "24px";
        boxText.style.fontWeight = "bold";
        isLargeFont = true;
    } else {
        boxText.style.fontSize = "16px";
        boxText.style.fontWeight = "normal";
        isLargeFont = false;
    }
});


const itemList = document.getElementById("itemList");
const addItemBtn = document.getElementById("addItemBtn");
const removeItemBtn = document.getElementById("removeItemBtn");

let itemCounter = itemList.children.length;

addItemBtn.addEventListener("click", function () {
    itemCounter++;
    const newLi = document.createElement("li");
    newLi.textContent = `List ${itemCounter}`;
    itemList.appendChild(newLi);
});

removeItemBtn.addEventListener("click", function () {
    if (itemList.lastElementChild) {
        itemList.removeChild(itemList.lastElementChild);
        if (itemCounter > 0) itemCounter--;
    } else {
        alert("Список уже пуст!");
    }
});