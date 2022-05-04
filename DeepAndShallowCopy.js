//! Object copy - js ke andar jab bhi ham ek object ko dusre object ke andar assign karte hai to uska data copy nhi hota hai uska reference copy hota hai  
//!                 mtlb agar me dusre object ki value change karunga to pehle vale object ki value bhi change ho jayegi 

//! copy by reference ka example hai.
//TODO:1
// let obj = {
//     name: 'peter'
// };
// console.log(obj); // {name: 'peter'}

// let user = obj;
// user.name = "bruce";
// console.log(obj); // {name: 'bruce'}
// console.log(user); // {name: 'bruce'}


//! now copy do tarah se hoti hai copy by value and copy by reference, upar vale exp. copy by reference hua hai

//! ye copy by value ka example hai.
//TODO:2
// 1. 
// let x = 'anil';
// let y = x;
// y = 'sidhu';
// console.log(x); // anil 
// console.log(y); // sidhu

// 2.
// let a = 2;
// let b = a;
// console.log(a); // 2
// console.log(b);  // 2

// object me jo problem aa rhi thi uska solution hai deep copy and sallow copy

//TODO:3 solution off first example - isse hi ham Shallow copy bolte hai 
//! Shallow copy se ham keval ek level tak hi value ko handle kar sakte hai 
//! object ke andar object aa jata hai tab shallow copy se ham second object ki value ko change nhi kar sakte hai 
// let obj = {
//     name: 'peter'
// };
// console.log(obj); // {name: 'peter'}

// let user = Object.assign({},obj); //! /first way to make shallow copy
// let user = {...obj}; //! this is second way to make shallow copy
// user.name = "bruce";
// console.log('object is: ',obj); //object is: {name: 'peter'}
// console.log("user is: ",user); //user is: {name: 'bruce'}

//TODO:4
// let obj = {
//     name: 'peter',
//     address: {
//         city: 'Indore',
//         state: 'MP'
//     }
// };

// console.log(obj); // {name: 'peter', address: {city: 'Bhopal', state: 'MP'}}

// let user = {...obj};
// user.address.city = 'Bhopal';

// console.log("object is: ",obj); //object is: {name: 'peter', address: {city: 'Bhopal', state: 'MP'}}
// console.log("user is: ",user); //user is: {name: 'peter', address: {city: 'Bhopal', state: 'MP'}}

// TODO:5 - solution of TODO:4
//! Deep copy - isme ham object ko json.stringify() se string me convert kar dete hai and json.parse se vapis object me convert kar dete hai 
//! Deep copy ka use ham second level ke object ko handle karne ke liye karte hai 

// let obj = {
//     name: 'peter',
//     address: {
//         city: 'Indore',
//         state: 'MP'
//     }
// };

// console.log(obj); // {name: 'peter', address: {city: 'Indore', state: 'MP'}}

// // let user = {...obj}; // instead of this we will use json.parse() and json.stringify()
// let user = JSON.parse(JSON.stringify(obj));
// user.address.city = 'Bhopal';

// console.log("object is: ",obj); //object is: {name: 'peter', address: {city: 'Indore', state: 'MP'}}
// console.log("user is: ",user); //user is: {name: 'peter', address: {city: 'Bhopal', state: 'MP'}}
//!Deep copy ka koi or tarika nhi hai

//TODO:6 - Disadvantage of Deep Copy

// let obj = {
//     name: 'peter',
//     address: {
//         city: 'Indore',
//         state: 'MP'
//     },
//     getData: function(){
//         return 'all data is here';
//     }
// };

// console.log(obj); // {name: 'peter', address: {city: 'Indore', state: 'MP'}}

// let user = JSON.parse(JSON.stringify(obj));
// user.address.city = 'Bhopal';

// console.log("object is: ",obj); //object is: {name: 'peter', address: {city: 'Indore', state: 'MP'}, getData: f}
// console.log("user is: ",user); //user is: {name: 'peter', address: {city: 'Bhopal', state: 'MP'}}
//! user object me mera getData function hi gayab ho gya hai 
//! ab iss problem ka solution hai lodash jo ek npm package hai   


//TODO:7 - use of Lodash

// let obj = {
//     name: 'peter',
//     address: {
//         city: 'Indore',
//         state: 'MP'
//     },
//     getData: function(){
//         return 'all data is here';
//     }
// };

// console.log(obj); // {name: 'peter', address: {city: 'Bhopal', state: 'MP'}}

// let user = _.cloneDeep(obj);
// user.address.city = 'Bhopal';

// console.log("object is: ",obj); //object is: {name: 'peter', address: {city: 'Indore', state: 'MP'}, getData: f}
// console.log("user is: ",user); //user is: {name: 'peter', address: {city: 'Bhopal', state: 'MP'}, getData: f}

