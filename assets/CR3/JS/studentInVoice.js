const calculateStuInvoice = (starterPrice, maindishPrice, dessertPrice, beveragePrice) => {
    let discount = 0.9
    let i = starterPrice * discount;
    let j = maindishPrice * discount;
    let k = dessertPrice * discount;
    let sum = i + j + k + beveragePrice;
    let prc = `Your student price will be ${sum}€`;
    return (prc);
}

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
//Again we call the function with just the variables as arguments and applying the discout to the food:
console.log(calculateStuInvoice(chur,merl,cana,beer));
console.log(calculateStuInvoice(tort,polb,sant,cafe));
console.log(calculateStuInvoice(boq,paell,rosq,agua));

