class BankAccount {
    customerName;
    accountNumber;
    // _balanace = 0; // pehle ye sign use karte the properties ko private karne ke liye but now we use #
    // #balance = 0;  // ab ye private propertie me convert ho gya hai 
    
    //! private properties and method ko ham keval ussi class ke andar hi use kar sakte hai, inhe ham subclass me bhi access nhi kar sakte hai 

    constructor(customerName,balance=0){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;
        // let balance = balance; //! let and const ka bhi use kar sakte hai kyonki inka sirf block scoop hota hai that's why ?
    }
  
    deposite(amount){
        this.#balance += amount;
    }

    withdraw(amount){
        this.#balance -= amount;
    }

    // ye public method hogi jiska use ham private properties ko midify karne ke liye use karenge.
    //! how to create Setter function - bahar se jo bhi value bheji jayegi usse set karenge iss setter function ke through
    // Todo: Old way
    // setBalance(amount){
    //    if(isNaN(amount)){
    //      throw new Error("Amount is not a valid input");
    //    }
    //      this.#balance = amount;
    // }  
    // Todo: New way          
    set balance(amount){  
        if(isNaN(amount)){
            throw new Error("Amount is not a valid input");
        }
        this.#balance = amount;
    }

    //! how to create Getter function - iska use kar ke ham private value ko return karenge jo bhi object isse call karega 
    // Todo: Old way
    // getBalance(){  
    //  return this.#balance;
    // } 
    //Todo: New way
    get balance(){    
        return this.#balance;
    }
}

class CurrentAccount extends BankAccount { 
    // ! BankAccount ki private properties ko ham iski sub class me bhi nhi use kar sakte hai 
    transationLimit = 50000;

    
    constructor(customerName,balance = 0){
        super(customerName,balance); 
        // console.log(this.#balance); //! ye parent class ki private value hai iss vajah se ham isse iss subclass me access nhi kar sakte hai 
    }

    //! yha ham private method create kar rhe hai 
    #calculateInterest(amount){   //! ab isse bahara se access nhi kar sakte hai 
        console.log('Calculating interest');
    }

    takeBusinessLoan(amount){
        // Logic 
        this.#calculateInterest(amount);
        console.log('Taking business loan ' + amount);
    }
}

// const shivAccount = new CurrentAccount('shiv yadav',2000);
// shivAccount.balanace = 5000; // yha ham jo andar ki chije hai unhe ham bahar se change kar rhe hai jo ki nhi hona chahiye 
// shivAccount.balance = 'hello'; // yha number hona chahiye tha but ham string data bhej rhe hai or iss ek galti se hamari sari functnality break ho sakti hai
// console.log(shivAccount);

// ! iss problem ka solution hai encapsulation, means ham properties and methods ko private kar denge, # ka use kar ke taki koi class ke andar ki properties ko bahar se modify na kar sake 
// ! or un private method ko access karne ke liye ham getter and setter function bnayenge or unka use karenge or ye methods class ke andar hi bnegi

//! class me private properties bnane ke baad hame ye error dekhne ko milegi
// const shivAccount = new CurrentAccount('shiv yadav',2000);
// shivAccount.#balance = 5000;
// console.log(shivAccount); // Uncaught SyntaxError: Private field '#balanace' must be declared in an enclosing class

//! class ki private properties ko modify karne ke liye 
const shivAccount = new CurrentAccount('shiv yadav',2000);
console.log(shivAccount); // CurrentAccount {customerName: 'shiv yadav', accountNumber: 1649094042181, transationLimit: 50000, #balance: 2000}
console.log(shivAccount.balance); // 2000

//TODO: how to use setter function
// shivAccount.setBalance(100);  //! old way to use setter function
shivAccount.balance = 100;  //! New way to use setter funtion
console.log(shivAccount);  // CurrentAccount {customerName: 'shiv yadav', accountNumber: 1649092211362, transationLimit: 50000, #balance: 100}

//! ab string data bhejne par ham error show kar sakte hai 
// shivAccount.balance = "hello";
// console.log(shivAccount);  // Uncaught Error: Amount is not a valid input //! yha hmane condition lgai hai iske setter function me 

//TODO: how to use getter function
// console.log(shivAccount.getBalance()); // 100  // ! old way to use getter function 
console.log(shivAccount.balance); // 100 //! New way to use getter function  
// todo: upar class me hamne get and set keyword lgaya hai iss vajah se hame shivAccount.getBalance(), isse tarah se call karne ki jarurat nhi hai 


//! for private method 
shivAccount.takeBusinessLoan(400); //  Calculating interest
                                   //  Taking business loan 400

shivAccount.calculateInterest();   // private na karne par output:- Calculating interest //! isse mujhe bahar se access nhi karne dena hai that's very wrong, to ham iss calculateInterest method ko private bna denge
// ye error dega jab ham iss function(calculateInterest()) ko private kar denge tab