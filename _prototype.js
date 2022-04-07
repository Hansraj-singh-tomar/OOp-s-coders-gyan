function BankAccount(customerName,balance = 0){  
     
    this.customerName = customerName;  
    this.accountNumber = Date.now();
    this.balance =  balance;
    
    // in method ke andar apna kud ka koi data nhi hai, ye kya kar rhe hai hamare object ka data hai uske upar operation kar rhi hai
    // yha method ke andar jo this.balance me jo this hai vo object ko point kar rha hai   
    // this.deposit = function(amount){
    //     this.balance = this.balance + amount; 
    // } 

    // this.withdraw = (amount) => {
    //     this.balance = this.balance - amount;
    // }
}

const hansrajAccount = new BankAccount("hansraj singh tomar");
const shivAccount  = new BankAccount("shiv yadav",1000);

// console.log(hansrajAccount); // BankAccount {customerName: 'hansraj singh tomar', accountNumber: 1648915911574, balance: 0, deposit: ƒ, withdraw: ƒ}
// console.log(shivAccount); // BankAccount {customerName: 'shiv yadav', accountNumber: 1648915911574, balance: 1000, deposit: ƒ, withdraw: ƒ}

/*  
    ! constructor function ke andar ye jo customerName, accountNumber, deposite, withdraw and balance hai ye har object ke liye alag apna-apna hoga
    ! but ye jo deposite and withdraw methods hai ye shared hona chahiye mtlb koi bhi use kar sake inn methods ko, hame har ek object ke andar method create karne ki jarurat nhi 
    ! ab hame kuch esa karna padega ki jab ham ek bar ye method bnayenge or fir jab sare object bnayenge iss constructor function se to vo sare inn sare method ko share kar paye 
    ! mtlb har object ke andar ye method bnne ki jarurat nhi hai, isse extra memory consume ho rhi hai jo ki acha nhi hai
    todo: hame inn method ko ek jagah par rakhna padega or jab constructor fun se jo object banege vo inhe use kar paye, or iss problem ko solve karne me hamri madad karta hai _prototype

*/ 

// console.log(BankAccount.prototype); 
// abhi ham yha (.) dot kaise use kar rhe hai function ke upar dot to ham object ke kiye use karte hai but here in js everything is object thats why use are using dot   
// so ham iss function ke upar properties add bhi kar sakte hai or access bhi kar sakte hai dot ka use kar ke 

// BankAccount.prototype.text = "issme hamne text property add kari hai"; // yha ham string ki jagah function bhi add kar sakte hai, array bhi add kar sakte hai
// console.log(BankAccount.prototype);  // {text: 'issme hamne text property add kari hai', constructor: ƒ}

// ! js ke andar jab bhi koi function banta hai to js ke dvara uske andar ek property add kar di jati hai jo hai [[prototype]], ye ek empty object hota hai   
// ! [[prototype]] = {}

BankAccount.prototype.deposit = function(amount){  
    // yha ham arrow fundtion use nhi kar sakte hai kyoki arrow function ka apna kud ka context nhi hota hai 
    // ! mtlb iss arrow function ke andar jo this hota hai vo uske outer scope se le leta hai and iska outer scope window object hai to ye window object me balance property ko find karega jo shi nhi hai 
    this.balance = this.balance + amount; 
} 
BankAccount.prototype.withdraw = function(amount){
    this.balance = this.balance - amount; 
} 

console.log(BankAccount.prototype);  // {deposit: ƒ, withdraw: ƒ, constructor: ƒ}

console.log(hansrajAccount);  // BankAccount {customerName: 'hansraj singh tomar', accountNumber: 1648919549509, balance: 0} 
hansrajAccount.deposit(5+"$");
shivAccount.deposit(3000);
console.log(hansrajAccount);  // BankAccount {customerName: 'hansraj singh tomar', accountNumber: 1648919475595, balance: '05$'} 
// iss console me hame hamari deposite ki gyi value mili hai, js iss object ke andar check karega kya iss object ke andar deposite method hai nhi milne par js kya karegi uss object ka jo constructor hai uska prototype check karegi or vha par deposite method ko check karegi or vha par usse mil gyi deposite method.   
// ! ab hamara memory vala problem hai vo solve ho chhuka hai 
console.log(shivAccount);  // BankAccount {customerName: 'shiv yadav', accountNumber: 1648920232748, balance: 4000}

// ! inheritance ek tarah se prototypes ki chain hoti hai 
// ! [[prototype]] bhi constructor function hai jaisa hamara BankAccount constructor function hai 
// ! Array and Object are in-built constructor in javascript   
// ! Array constructor function se array ki sari methods bni hai like - find(), some(), concat() etc.
// ! ye hai array ka constructor function => function Array(){...} iske andar sari methods add ki gyi hai 
// Array.prototype karne par hame iski sari methods dekhne ko milegi like - at,concat,constructor,push,pop,entries and all.
