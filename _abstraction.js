//! an abstraction is a way of hiding the implementaion details and showing only the functionality to the users.
//! Hide Details
//! Show Essentials

function Employee(name, age, baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    let monthlyBonus = 1000; 

    let calculateFinalSalary = function(){
        let finalSalary = this.baseSalary + this.monthlyBonus;
        console.log('Final Salary is: '+ finalSalary);
    }
  

    this.getEmpDetails = function(){
        console.log("Name: "+this.name+ "| Age : "+this.age);
        calculateFinalSalary();
    }
}

let emp1 = new Employee('hansraj',30,2000);
emp1.getEmpDetails(); // Name : john | Age : 30
// emp1.monthlyBonus = 2000; //! ham nhi chahte koi isse bahar se change kare  
//TODO: so this should not be accessible so to make this inaccessible from outside i can actually make this private or make this 
//TODO: as a functional variable. 
//TODO: Here, i am using functional variable- let monthlyBonus = 1000 and the scope of this variable is only within this function as we go 
// out of this function if this variable is out of scope .    
emp1.calculateFinalSalary();  // Final Salary is : 3000  //! let ya private karne par me isse esa nhi kar sakta hu 