console.log("=== TASK 0 ===");
console.log("Student Name: Alikhan Smagul");
console.log("Group: SE-2529");

alert("Hello, JavaScript World!");

console.log("\n=== TASK 1 ===");

let studentName = "Alikhan";
let age = 19;
let isStudent = true;

console.log("String variable:", studentName, "| Type:", typeof studentName);
console.log("Number variable:", age, "| Type:", typeof age);
console.log("Boolean variable:", isStudent, "| Type:", typeof isStudent);

let a = 15;
let b = 4;

console.log("\n--- Arithmetic Operations ---");
console.log(`a = ${a}, b = ${b}`);
console.log("Addition (a + b):", a + b);
console.log("Subtraction (a - b):", a - b);
console.log("Multiplication (a * b):", a * b);
console.log("Division (a / b):", a / b);
console.log("Modulus/Remainder (a % b):", a % b);

let greeting = "Привет, меня зовут " + studentName + ", и мне " + age + " лет.";
console.log("\n--- String Concatenation ---");
console.log(greeting);

let statusMessage = `Является ли студентом? Ответ: ${isStudent}`;
console.log(statusMessage);