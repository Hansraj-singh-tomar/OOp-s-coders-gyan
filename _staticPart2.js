// samajh lijiye hamari application ke andar kuch configration hai 
// ! static properties and method ko me uske instance ke upar access nhi kar sakte hai


class Config {
    static dbUser = 'hansraj';
    static dbPassword = 'secret';
    static apiToken = 'abcd';

    // inn properties ko modify karne ke liye agar kuch method chahiye vo bhi ham yha bna sakte hai iss class ke andar 
}

//! ab mujhe access karna hai dbUser to mujhe class ka nam use karna padega na ki uss class ke object/instance ka 
console.log(Config.dbUser);  // hansraj
console.log(Config.apiToken); // abcd



//TODO: iss exp. me ham dekhenge ki ye static method and properties kha kha par access hoti hai class ke andar 
class User{
 
    // yha ek object bna liya hai
    static cache = {
        1 : 'some value',
    };  

    constructor(name,age,income){
        this.name = name;
        this.age = age;
        this.income = income;
    }

    static checkcache(){
        console.log(this.cache); // {1: 'some value'}
    }

    

    static hasInCache(){
        // cache object ko access karna hai to ham yha kaise karenge
        // console.log(this.cache); //! static method ya properties me this tabhi kam karega jab ham static method ya properties ko hi access kar rhe hai 
        this.checkcache();  
    }
}

User.hasInCache(); // {1: 'some value'}

//TODO: ab ham static block ko samjhenge

class User{

    static cache = {
        1 : 'some value',
    };

    constructor(name,age,income){
        this.name = name;
        this.age = age;
        this.income = income;
    }

    //! isse ham static block bolte hai 
    //TODO: jab bhi ham static method ko call karenge pehli bar to ye static block ek bar run hoga 
    //TODO: agar hame iske andar kuch special configration karna hai to vo ham yha kar sakte hai   
    static {
      console.log('initialized')  
    }

    static hasInCache(){
        console.log(this.cache);
    }
}

User.hasInCache(); // isse do bar call karne par bhi static block ke andar ka code ek hi bar run hoga

/*
output - initialized
         {1: 'some value'}
*/

//! javascript ke andar bhut sari inbuit static method hai like - 
Math.random(); // ye hai hamri static method jisme Math class hai random() static method ki 
Object.hasOwnProperty();

// iss tarah se bhut sari inbuit static method hai js ke andar


// Another example - abhi dekhenge static properties kaise use karte hai 
// jab bhi koi user assign ho jayega to mujhe use ek ID assign karna hai - so how we will create
// or vo id hame har ek user create hone ke baad us id ko increament karna hai 
// jaise pehle object bnne par uski id 1 then second object ki id 2 and so on .


//! Id Increment - ye ek anti pattern hai jo hame nhi karna hai 
// let id = 1;
// class User{
//     constructor(name,age,income){
//         this.name = name;
//         this.age = age;
//         this.income = income;
//         this.id = id++;
//     }
// }

// const user1 = new User("hansraj",26,10000);
// const user2 = new User("shiv yadav",24,2000);
// const user3 = new User('parul yadav',22,7000);
// const user4 = new User('quality',23,17000);
// console.log(user1,user2,user3,user4);

//! better way to ID Increment - ye real life project me bhut use ho rha hota hai 

class User{
    static id = 1;
    constructor(name,age,income){
        this.name = name;
        this.age = age;
        this.income = income;
        this.id = User.id++;
    }
}

const user1 = new User("hansraj",26,10000);
const user2 = new User("shiv yadav",24,2000);
const user3 = new User('parul yadav',22,7000);
const user4 = new User('quality',23,17000);
console.log(user1,user2,user3,user4);
/* output - User {name: 'hansraj', age: 26, income: 10000, id: 1} 
            User {name: 'shiv yadav', age: 24, income: 2000, id: 2}
            User {name: 'parul yadav', age: 22, income: 7000, id: 3}
            User {name: 'quality', age: 23, income: 17000, id: 4}
*/