let total = prompt("Enter the total number of students: ");
let obtengrade = prompt("Enter the obtained grade: ");
let percentage = (obtengrade / total) * 100;
let randem = Math.round(percentage);
console.log(randem+ "%");