
// function BankAccount(customerName,balance = 0){  // BankAccount isme pehla letter capital hai kyonki ye ek constructor function hai, constructor function normal function ki tarah hi hota hai
    // properties ya variable 
//    this.customerName = customerName;  
//    this.accountNumber = Date.now();
//    this.balance =  balance;   
// }

// oop me ham variables ko properties and function ko method bolte hai 

// ab ham constructor se object create karenge new keyword ka use kar ke 
// const hansrajAccount = new BankAccount("hansraj singh",1000);
// const shivAccount = new BankAccount("shiv yadav");

// jab bhi ham object banate hai to hamare computer ki memory ke andar ye har ek alag-alag object ke liye alag-alag memory space banegi
// is constructor function se ham jitne chahe utne object bna sakte hai 
// hansrajAccount and shivAccount instance hai iss BankAccount constructor function ke 

// console.log(hansrajAccount,shivAccount);

// ham ye jo properties hai unhe access bhi kar sakte hai 
// console.log(hansrajAccount.accountNumber);  // 1648738131793
// console.log(hansrajAccount.customerName);   // hansraj singh 

// shivAccount.balance = 2000;  //  iss tarah se real life project me nhi karna hai // ! iss chij ko secure karne ke liye ham encapsulation ka use karenge 
// encapsulation ke andar kya hota hai sari properties ko class ke andar private bna dete hai or fir usko shivAccount.balance = 2000; iss tarah se modify nhi kar payenge
// or fir isse modify karna pda to ham setters ka use karte hai

// console.log(shivAccount); // accountNumber: 1648740536862, balance: 2000, customerName: "shiv yadav"

// =====================================================================================================================


function BankAccount(customerName,balance = 0){  
    // properties ya variable 
    this.customerName = customerName;  
    this.accountNumber = Date.now();
    this.balance =  balance;
    
    // methods ya function // but method ko optimize karne ka ye proper way nhi hai isko iske liye ham inharitance ka use karenge 
    this.deposit = function(amount){
        this.balance = this.balance + amount; 
    } 

    this.withdraw = (amount) => {
        this.balance = this.balance - amount;
    }
    
 }

const hansrajAccount = new BankAccount("hansraj singh",1000);
const shivAccount = new BankAccount("shiv yadav");

hansrajAccount.deposit(5000);
shivAccount.deposit(1000);
hansrajAccount.withdraw(2000);

console.log(hansrajAccount);


// ================================== VanillaJS with OOPS =================================================================================

function BankAccount(customerName,balance = 0){  
    // properties ya variable 
    this.customerName = customerName;  
    this.accountNumber = Date.now();
    this.balance =  balance;
    
    // methods ya function // but method ko optimize karne ka ye proper way nhi hai isko iske liye ham inharitance ka use karenge 
    this.deposit = function(amount){
        this.balance = this.balance + amount; 
    } 

    this.withdraw = (amount) => {
        this.balance = this.balance - amount;
    }
    
}

const AccountsData = [];

//  Create Account
const accountForm = document.getElementById("accouuntForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");

accountForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const user = new BankAccount(customerName.value, +balance.value);  // +balance.value, isse ye string se number me change ho jayega 
    // console.log(customerName.value,balance.value);  // hansraj 100000000000
    AccountsData.push(user);
    console.log(AccountsData);
})

// Deposite Amount in Account
const depositForm = document.getElementById("depositForm");
const accountNumber = document.querySelector("#accountNumber");
const amount = document.querySelector("#amount");

depositForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const matchUser = AccountsData.find((user) =>  user.accountNumber === +accountNumber.value);
    matchUser.deposit(+amount.value);
    console.log(AccountsData)
})


// Use of Localstorage 
        // const AccountData = [hansrajAccount, shivAccount];
        // localStorage.setItem("Customers", JSON.stringify(AccountData));
        // const customers = localStorage.getItem('Customers');
        // const actData = JSON.parse(customers);
        // console.log(actData[0]);  // {customerName: 'hasnraj singh tomar', balance: 1000, accountNumber: 1674128901198}
        // console.log(actData[1]);  // {customerName: 'shiv yadav', balance: 1000, accountNumber: 1674128901198}
        // localStorage.clear();