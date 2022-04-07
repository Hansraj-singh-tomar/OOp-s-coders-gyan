//! polymorphism in oops is the ability to create a variable , a funnction or an object that has more than one form .
// poly = many , Morph = forms , polymorphism = many form 

//1. 
class Animal{
    constructor(name){
        this.name = name;
    }
    eats(){
        console.log(this.name+' eats food');
    }
}

class Aligator extends Animal {
    eats(){
        console.log(this.name+' eats fishes');
    }
}

// let murphy = new Aligator('Murphy');
// murphy.eats(); // murphy eats fishes. 

//2. 
class Animal{
    constructor(name){
        this.name = name;
    }
    eats(){
        console.log(this.name+' eats food');
    }
}

class Aligator extends Animal {
    //! what if i don't have any any eats function in that class 
}

// let murphy = new Aligator('Murphy');
// murphy.eats(); // Merphy eats food.

//TODO: so if there is no fun in the child class it looks into the parent class and run this fun however if the function is 
// parent with the same name in the child class the eats fun get overridden, so this fun. gets overridden by the child class
// func. the child class function takes preferences and this is also called as method overriding.

//3.
class Animal{
    constructor(name){
        this.name = name;
    }
    eats(){
        console.log(this.name+' eats food');
    }
}

class Aligator extends Animal {

    //! constructor bhi use kar sakte hai 
    // constructor(name){
    //     super(name);
    // }
    eats(){
        super.eats(); //! super parent class ki method ko call karta hai 
        console.log(this.name+' eats fishes');
    }
}

let murphy = new Aligator("Murphy")
murphy.eats(); 
/*
output- Murphy eats food 
        Murphy eats fishes
*/
