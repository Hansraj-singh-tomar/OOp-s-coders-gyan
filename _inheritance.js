// inheritance means like virasat me milna, 
//! Defination - process where one class acquires properties & method from another class.
// means jo parent classes hoti hai unse kuch properties ya kuch methods ham inherite kar sakte hai mtlb unke jo child classes honge uske andar use kar sakte hai
// DRY - do not repeat yourself
// inheritance ki help se hamare program ke andar jitni bhi repeatation ho rhi hai usko ham yha solve kar sakte hai  

// ! pehle ham constructor function ke through dekhenge ki without inheritance code kitn complicate ho jata hai kitna jyada repeatation hota hai. 

// function BankAccount(customerName,balance = 0){
//     this.customerName = customerName;
//     this.accNumber = Date.now();
//     this.balance = balance;
// }

// BankAccount.prototype.deposite = function (amount){
//     this.balance += amount;
// };

// BankAccount.prototype.withdraw = function (amount){
//     this.balance -= amount;
// };

// const hansAccount = new BankAccount('hansraj',1000);
// console.log(hansAccount);

//  ! saving account
// function SavingAccount(customerName,balance = 0){
//     this.customerName = customerName;
//     this.accNumber = Date.now();
//     this.balance = balance;
     // todo: new property added 
//     this.transationLimit = 10000;
// }

 // todo: new method added.
// SavingAccount.prototype.takePersonalLoan = function (amount) {
//     console.log('Taking personal loan :' + amount);
// };

// SavingAccount.prototype.deposite = function (amount){
//     this.balance += amount;
// };

// SavingAccount.prototype.withdraw = function (amount){
//     this.balance -= amount;
// };

// const shivAccount = new SavingAccount('hansraj',1000);
// console.log(shivAccount);

 // ! current account
// function CurrentAccount(customerName,balance = 0){
//     this.customerName = customerName;
//     this.accNumber = Date.now();
//     this.balance = balance;
     // todo: new property added 
//     this.transationLimit = 50000;
// }

// todo: new method added.
// CurrentAccount.prototype.takeBusinessLoan = function (amount) {
//     console.log('Taking business loan :' + amount);
// };

// CurrentAccount.prototype.deposite = function (amount){
//     this.balance += amount;
// };

// CurrentAccount.prototype.withdraw = function (amount){
//     this.balance -= amount;
// };

// const parulAccount = new CurrentAccount('hansraj',1000);
// console.log(parulAccount);


// ! ad ham construction function ke through dekhenge inharitance se kaise code short, easy to read ho jata hai 

//  todo - ye hamara parent constructor hai 
// function BankAccount(customerName,balance = 0){
//     this.customerName = customerName;
//     this.accNumber = Date.now();
//     this.balance = balance;
// }

// BankAccount.prototype.deposite = function (amount){
//     this.balance += amount;
// };

// BankAccount.prototype.withdraw = function (amount){
//     this.balance -= amount;
// };


 // ! saving account - ye hamara child constructor hai
// function SavingAccount(customerName,balance = 0){
    
//      jo BankAccount hai uski property hai vo chahiye hame to ham usse iss tarah se get karenge - static method ko call karenge jo call() method
//      ! isse ham constructor linking bolte hai 
//     BankAccount.call(this,customerName,balance) // yha this SavingAccount ko point kar rha hai

     // todo: new property added 
//     this.transationLimit = 10000;
// }

 // todo: ab isme ham BankAccount ke prototype ko link karenge
// SavingAccount.prototype = Object.create(BankAccount.prototype); // jo parent constructor ka prototype hai usse ek object create kar ke usse hamare CurrentAccount.prototype se link karva do  

 // todo: new method added.
// SavingAccount.prototype.takePersonalLoan = function (amount) {
//     console.log('Taking personal loan :' + amount);
// };


 // ! current account - this one also our child component
// function CurrentAccount(customerName,balance = 0){
    
     // jo BankAccount hai uski property hai vo chahiye hame to ham usse iss tarah se get karenge - static method ko call karenge jo call() method
    // ! isse ham constructor linking bolte hai 
//     BankAccount.call(this,customerName,balance) // yha this SavingAccount ko point kar rha hai

     // todo: new property added 
//     this.transationLimit = 50000;
// }

 // todo: ab isme ham BankAccount ke prototype ko link karenge
// CurrentAccount.prototype = Object.create(BankAccount.prototype); // jo parent constructor ka prototype hai usse ek object create kar ke usse hamare CurrentAccount.prototype se link karva do  

 // todo: new method added.
// CurrentAccount.prototype.takeBusinessLoan = function (amount) {
//     console.log('Taking business loan :' + amount);
// };

// const hansAccount = new BankAccount('hansraj',1000);
// console.log(hansAccount);

// const shivAccount = new SavingAccount('shiv yadav',1000);
// console.log(shivAccount);
/*
 output - 
        accNumber: 1649040451638
        balance: 1000
        customerName: "shiv yadav"
        transationLimit: 10000
            [[Prototype]]: BankAccount
                takePersonalLoan: ƒ (amount)
                    [[Prototype]]: Object  // ! jo parent constructor ka prototype hai usse ek object create kar ke usse hamare CurrentAccount.prototype se link krva diya
                        deposite: ƒ (amount)
                        withdraw: ƒ (amount)
                        constructor: ƒ BankAccount(customerName,balance = 0)
                        [[Prototype]]: Object
*/
// shivAccount.deposite(600);
// console.log(shivAccount);

// shivAccount.takePersonalLoan(200000);  // Taking personal loan :200000

// const parulAccount = new CurrentAccount('parul yadav',1000);
// console.log(parulAccount);
// parulAccount.withdraw(200);
// console.log(parulAccount);
// parulAccount.takeBusinessLoan(2000000);  // Taking business loan :2000000


// -----------------------------------------------------------------------------------------------------------------------



// ! Classes ka use kar ke inhariatance ko samjhenge, or hame yhi method follow karni hai hamare  code/project me

// class BankAccount {

//     // jo values ham constructor function me get kar rhe the unhe ab ham kaise get karenge class ke andar
//     // isko karne ke liye class ke andar ek special method aati hai, jo hai constructor(){...} method, jisko ham banate hai hamare class ke andar 
//     // or ab iss method ke andar ye value pass kar ke get kar sakte hai    
//     constructor(customerName,balanace=0){
//         this.customerName = customerName;
//         this.accountNumber = Date.now();
//         this.balanace = balanace;
//     }

//     // class ke andar deposite and withdraw method ka code likhenge to vo unhe direct BankAccount (constructor function) ke prototype me add kar deti hai 
//     // yha hame alag se prototype ke upar method add nhi krni hoti hai // isse hamari memory ki bachat bhi hoti hai  
//     deposite(amount){
//         this.balanace += amount;
//     }
//     withdraw(amount){
//         this.balanace -= amount;
//     }
// }

// class CurrentAccount extends BankAccount {  // iska mtlb BankAccount se inherite kar rha hai properties and method currentAccount class ke constructor me use karne ke liye.
//     transationLimit = 50000;

//     constructor(customerName,balanace = 0){
//         super(customerName,balanace); // iske upar/parent me jo constructor hai usko call karo, mtlb BankAccount ka constructor
//               // super se ham parameter pass kar paaye parent constructor me or fir vo uske constructor ke andar usko set karega
//     }

//     takeBusinessLoan(amount){
//         console.log('Taking business loan' + amount);
//     }
// }

// class SavingAccount extends BankAccount {  // iska mtlb BankAccount se inherite kar rha hai properties and method currentAccount
//     transationLimit = 10000;

//     constructor(customerName,balanace = 0){
//         super(customerName,balanace); // iske upar/parent me jo constructor hai usko call karo, mtlb BankAccount ka constructor
//               // super se ham parameter pass kar paaye parent constructor me or fir vo uske constructor ke andar usko set karega
//     }

//     takePersonalLoan(amount){
//         console.log('Taking Personal loan' + amount);
//     }
// }

// const hansAccount = new BankAccount('hansraj',1000);
// console.log(hansAccount);

// const shivAccount = new SavingAccount('shiv yadav',1000);
// console.log(shivAccount);
// shivAccount.deposite(600);
// console.log(shivAccount);
// shivAccount.takePersonalLoan(200000);  // Taking personal loan :200000

// const parulAccount = new CurrentAccount('parul yadav',1000);
// console.log(parulAccount);
// parulAccount.withdraw(200);
// console.log(parulAccount);
// parulAccount.takeBusinessLoan(2000000);  // Taking business loan :2000000


// To handle the duplicity of takePersonalLoan we can define this function inside our parent function
// and we can use it in our inherite class - like that, super.takeBusinessLoan();


class BankAccount{
    constructor(customerName, balance){
        this.customerName = customerName;
        this.balance = balance;
        this.accountNumber = Date.now();
    }

    deposite(amount){
        this.balance += amount;
    }

    withdraw(amount){
        this.balance -= amount;
    }

    takePersonalLoan(amount){
      console.log(`${this.customerName} taking personal loan of ${amount}`);
    }
}

class savingAccount extends BankAccount {
    transectionLimit = 40000;

    constructor(customerName, balance){
        super(customerName, balance);
    }

    // takePersonalLoan(amount){
    //     console.log("Taking Personal Loan of " + amount);
    // }

    takeBusinessLoan(amount){
      super.takePersonalLoan(amount)
    }

}

class currentAccount extends BankAccount {
    transectionLimit = 50000;
    
    constructor(customerName, balance){
        
        super(customerName, balance);
    }
    
    // takePersonalLoan(amount){
    //     console.log("Taking Personal Loan of " + amount);
    // }

    takeBusinessLoan(amount){
      super.takePersonalLoan(amount)
    }
}


let hansrajAcc = new savingAccount("hansraj singh tomar", 1000);
let amanAcc = new currentAccount("aman singh gour", 2000);

// console.log(hansrajAcc); // savingAccount {customerName: 'hansraj singh tomar', balance: 1000, accountNumber: 1680352021274, transectionLimit: 40000}
// console.log(amanAcc); // currentAccount {customerName: 'aman singh gour', balance: 2000, accountNumber: 1680352021274, transectionLimit: 50000}

hansrajAcc.takeBusinessLoan(7000)
amanAcc.takeBusinessLoan(8000)