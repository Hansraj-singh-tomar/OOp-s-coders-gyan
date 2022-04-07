/*
    ES6 ke andar class ko introduce kiya gya tha 
    jo hamne constructor function bnaya tha usse ham kaise class ke andar covert karte hai 
*/

class BankAccount {
    // customerName;
    // accountNumber;
    // balanace;
    //! constructor - it is always called whenever a class is instantiated or an object is created
    //! it class always has a constructor even if you do not provided it has a constructor and we can also override the default constructor 
    // jo values ham constructor function me get kar rhe the unhe ab ham kaise get karenge class ke andar
    // isko karne ke liye class ke andar ek special method aati hai, jo hai constructor(){...} method, jisko ham banate hai hamare class ke andar 
    // or ab iss method ke andar ye value pass kar ke get kar sakte hai    
    constructor(customerName,balanace=0){   // constructor function class ko point karta hai ya kahe to BankAccount class ke liye work karta hai  
        this.customerName = customerName;   //! yha this iss class ke instance/object ko point kar rha hota hai
        this.accountNumber = Date.now();
        this.balanace = balanace;
    }

    // class ke andar deposite and withdraw method ka code likhenge to vo unhe direct BankAccount (constructor function) ke prototype me add kar deti hai 
    // yha hame alag se prototype ke upar method add nhi krni hoti hai // isse hamari memory ki bachat bhi hoti hai  
    deposite(amount){
        this.balanace += amount;
    }
    withdraw(amount){
        this.balanace -= amount;
    }
}

const hansrajAccount = new BankAccount('hansraj singh tomar',1000);
const shivAccount = new BankAccount('shiv yadav');

console.log(hansrajAccount);
/*  output - 
    accountNumber: 1648962007073
    balanace: 3000
    customerName: "hansraj singh tomar"
    [[Prototype]]: Object
    constructor: class BankAccount
    deposite: ƒ deposite(amount)
    withdraw: ƒ withdraw(amount)
    [[Prototype]]: Object
*/
console.log(shivAccount);
/*  output - 
    accountNumber: 1648962007073
    balanace: 2000
    customerName: "shiv yadav"
    [[Prototype]]: Object
    constructor: class BankAccount
    deposite: ƒ deposite(amount)
    withdraw: ƒ withdraw(amount)
    [[Prototype]]: Object
*/

hansrajAccount.deposite(4000);
console.log(hansrajAccount);  // BankAccount {customerName: 'hansraj singh tomar', accountNumber: 1648962007073, balanace: 5000}

shivAccount.deposite(2000);
console.log(shivAccount);  // BankAccount {customerName: 'shiv yadav', accountNumber: 1648962007073, balanace: 2000}

hansrajAccount.withdraw(2000);
console.log(hansrajAccount);  // BankAccount {customerName: 'hansraj singh tomar', accountNumber: 1648962007073, balanace: 3000}

/*
1.
function hello(){
    console.log('hello');  // hello
}
hello();
*/

/*
2. 
hello();
function hello(){
    console.log('hello');  // hello
}

! yha dono me hoisting kam kar rhi hai
! normal function me hoisting kam karti hai but classes ke sath ye kam nhi karegi

3.
const hansrajAccount = new BankAccount("hansraj singh",1000);
class BankAccount{
    .....
}  // ! ye galat hai or yha hoisting bhi kam nhi karegi 
! error : uncaught referrence error : cannot access BankAccount before initialization
! yha hame makesure karna hai ki pehle ham class declaire kar rhe hai then usse use kar rhe hai 
*/

/*
1. function expression
const hello = function(){

}

2. function declairation
function hello(){

}
! class ko bhi dono tarah se bna sakte hai but function declairation se banana shi rhega
*/

/*
Another example a class without default constructor function 
class Employee {
    setDetailes(name, id){
        this.name = name;
        this.id = id;
    }
}

let emp1 = new Employee();
emp1.setDetailes('john',10002);
console.log(emp1.name);  // john
console.log(emp1.id);  // 10002
*/