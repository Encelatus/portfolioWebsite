// This is my function to calculate the Invoice
const calculateInvoice = (starterPrice, maindishPrice, dessertPrice, beveragePrice) => {
    let sum = starterPrice + maindishPrice + dessertPrice + beveragePrice;
    let prc = `Your total price is ${sum}€` ;
    return (prc);
}
console.log(calculateInvoice(4,8,4,3));

//Variables for the starters:
var croq = 3; 
var boq = 5; 
var gaz = 4; 
var tort = 4; 

//Variablse for main dishes:
var paell = 10;
var faba = 9;
var polb = 12;
var merl = 12;

//Variables for desserts:
var chur = 3;
var sant = 3;
var rosq = 4;
var cana = 5; 

//Variables for drinks:
var agua = 4;
var beer = 3;
var toro = 5;
var cafe = 3;

//A variable if the customer did not order one of the dishes:
var no = 0;

//Now we can call the function while using my variables as arguments:
console.log(calculateInvoice(croq,paell,sant,beer));
console.log(calculateInvoice(faba,merl,rosq,cafe));
console.log(calculateInvoice(gaz,faba,cana,agua));
console.log(calculateInvoice(boq,polb,chur,toro));

