console.log ('Hello World!')
let name = 'Juraj'
console.log ('Hello ' + name)
if (name !== "Juraj") {
    console.log("Name not correct")
}
if (name === "Juraj") {
    console.log("Name is correct")
}
let a = 7;
if (a < 5) {
  console.log(a / 2);
} else {
  console.log(a * 2);
}
let bookCount = 21

for (let i = 1; i < bookCount; i++) {
    console.log (i);
    // here comes the code which moves the books
  // this block will be repeated bookCount times
}
let payBill = (amount, beneficiary) => {
    return amount + " to " + beneficiary
    // transfer amount money to the beneficiary
  };
  console.log(payBill("10€","AXA"))

  for ( a = 1; a < 16; a++) {
      console.log (a)
  }
  for ( a = 1; a < 21; a++) {
    console.log (a)
}



let printValues = [10, 20, 30, 40 ,50, 12]
printValues.forEach ((Number) =>{
    console.log(Number)
})


//let printValues = (array) => {
  //  for (let i = 0; i < array.length; i++) {
    //  console.log(array[i]);
    //}
  //}
  