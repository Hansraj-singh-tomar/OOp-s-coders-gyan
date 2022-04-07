//! static methods and properties = aisi methods and properties hoti hai jinka class ke instance/object se koi lena dena nhi hota hai ye kud class ke upar store ho jati hai  

//Utility function - utility function ke liye jo static method and prop. hai unka kaise use kiya jata hai 
class User{
    constructor(name,age,income){
        this.name = name;
        this.age = age;
        this.income = income;
    }
    static compareByAge(a,b){  // yha hame do object mil jayennge compare karne ke liye 
        return a.age - b.age;
    }
    static compareByIncome(a,b){
        return a.income - b.income;
    }
}

const user1 = new User("hansraj",26,10000);
const user2 = new User("shiv yadav",24,2000);
const user3 = new User('parul yadav',22,7000);
const user4 = new User('quality',23,17000);
// console.log(user1,user2,user3); // in objects ko short karna hai unke age vise
/* output - User {name: 'hansraj', age: 26} 
            User {name: 'shiv yadav', age: 24} 
            User {name: 'parul yadav', age: 22}
*/  

// const userData = [user1,user2,user3];
// userData.sort((a,b)=>a.age - b.age);
// console.log(userData);
/* output- (3) [User, User, User]
                    0: User {name: 'parul yadav', age: 22}
                    1: User {name: 'shiv yadav', age: 24}
                    2: User {name: 'hansraj', age: 26}
                    length: 3
                    [[Prototype]]: Array(0)
*/

//! ye jo sorting ka code hai vo hamare user se related hai, 
//! to kya ham esa kar sakte hai ki User class ke andar ye code ki ek method bna le
//! lekin class ke andar ese normal method ki tarah bnaunga compare karne ke liye to vo method instance(User class) se bind ho jayega
//! lekin ham yha sare user1,user2,user3 objects ko compare kar rhe hai, iska mtlb instance method ko use kar ke sort karna sare object/users ko ye yha sense banta nhi hai
//! to ham class ke andar static keyword ka use karke ek static method bnayenge     

// after creating static method for sorting age 
const userData = [user1,user2,user3,user4];

userData.sort(User.compareByAge); // class ke upar dot lgana hai object ke upar nhi like user1.compareByAge
console.log(userData);
/* output - (3) [User, User, User]
                    0: User {name: 'parul yadav', age: 22}
                    1: User {name: 'shiv yadav', age: 24}
                    2: User {name: 'hansraj', age: 26}
                    length: 3
                    [[Prototype]]: Array(0)
*/

userData.sort(User.compareByIncome);
console.log(userData);
/* output - (3) [User, User, User]
                    0: User {name: 'shiv yadav', age: 24, income: 2000}
                    1: User {name: 'parul yadav', age: 22, income: 7000}
                    2: User {name: 'hansraj', age: 26, income: 10000}
                    length: 3
                    [[Prototype]]: Array(0)
*/

// inn static method/properties ko ham instance/object/User1,user2,user3 ke upar call nhi kar sakte hai 
//! instance/object ka inn static method se koi relation nhi hai 
//! jo static method and properties hoti hai vo hamare kud class ke upar store ho jati hai
//! jabki jo class ki normal properties and method hoti hai vo hamare instance/object ke upar store ho jati hai   
