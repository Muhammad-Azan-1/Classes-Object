// // // we can use anything of an object into another object as a prototype
// // let obj1:any = {
// //     callTax:function(){
// //         console.log("Tax is 20%")
// //     },
// //     name:"azan"
// // }
// // obj1.callTax()    // Tax is 20%
// // /// Now if we want to use this callTax function inside the obj2  // the method used is call Object.setPrototype(to which object , from which object)
// // //by this method we are actually passing a prorotype of callTax() function whihc is insde the obj1 into the obj2
// // let obj2:any = {
// //     salary:20
// // }
// // Object.setPrototypeOf(obj2,obj1)
// // console.log(obj2)
// // // we can do same thing by proto
// // // obj2.__proto__ = obj1;
// // // now due to above method we have are callTax() function inside the obj2 as well
// // obj2.callTax() //  Tax is 20%
// // console.log(obj2.name) // azan
// // // IN case if both objects have same propteries 
// // let obj3:any = {
// //     callTax:function(){
// //         console.log("Tax is 20%")
// //     },
// // }
// // let obj4:any = {
// //     callTax:function(){
// //         console.log("Tax is 10%")
// //     },
// //     salary:20
// // }
// // Object.setPrototypeOf(obj4,obj3)  // here we passs the property of obj3 as an prototype to obj4 but obj4 has also the same property => callTax()
// // // so In this case the obj3 property  callTax()  is  overwrite by obj4  so when we call , obj4.callTax()  we get thr callTax function of object4 not object3
// // obj4.callTax()  // "Tax is 10%""
// // //__________________________________________________Classes and objects____________________________________________________________________//
// // // Class in a porgram code is a blueprint / templete for creating objects
// // //syntax   class myClass {....any Work}
// // //  to create instance of that class new myClass()  =>  when we are creating an instance we are actually creating an object based on the blue print of that class
// // class myClass {
// //     name:string;
// //     brand:string;
// //     constructor(name:string, brand:string){
// //         this.name = name;
// //         this.brand = brand;
// //     }   
// //     carName(){
// //         console.log("Great")   // this function also go inside the car object when we create an instance but it will be inside the prototype 
// //       //  and in prototype it will be inside the constuctor thats  why we cant see it, we can see it in browser window
// //     }
// // }
// // let car : myClass =  new myClass("fortuner","Toyota")   
// // // as we creat instances of myClass we are eventually creating a object based on the blue print define in my class , here new keyword is used to invoke the contructor method
// // console.log(car)   // myClass { name: 'fortuner', brand: 'Toyota' }                                      
// // car.carName()   // "hi"
// // /// this is what happen behind the scenes when we create a instance of myClass
// // // let car = {
// // //     name:"fortuner",
// // //     brand:"Toyota",
// // //     carName(){
// // //             console.log("Great")
// // //     }
// // // }
// // class MyClass {
// //     // Define properties
// //     property1: string;
// //     property2: number;
// //     constructor(property1: string, property2: number) {
// //         console.log("creating Object");
// //         // Assign values to the properties
// //         this.property1 = property1 ;
// //         this.property2 =  property2;
// //     }
// // }
// // // Instantiate the class
// // let object: MyClass = new MyClass("Value2",22);   // Output:creating Object
// // console.log(object); // Output: MyClass { property1: 'Value1', property2: 42 }
// // ///___________________________________________________________________Inheritance_______________________________________________________________________________________////
// // // Inheritance is used to pass down properties and methods from the parent class to child class using 
// // // syntax   
// // // class Parent{
// // // }
// // // class Child extends Parent{
// // // }
// // class parent {
// //     name:string;
// //     brand:string;
// //     constructor(name:string, brand:string){
// //         this.name = name;
// //         this.brand = brand;
// //     }   
// //     carName(){
// //         console.log("Great")  
// //     }
// // }
// // class child extends parent {
// // }
// // let childCar : child =  new child("Fortuner","Toyota")
// // console.log(childCar)  //  child { name: 'Fortuner', brand: 'Toyota' }
// // childCar.carName()  // "Great"
// // //  if parent and child class have same  mehtods , then child methods  will be used . this is called method overridding
// // class Person {
// //     name:string;
// //     constructor(name:string){
// //         this.name = name;
// //     }
// //     eat(){
// //         console.log("Chiken biryani")
// //     }
// //     sleep(){
// //         console.log("Azan is sleeping")
// //     }
// //     work(){
// //         console.log("Building a Application...")
// //     }
// // }
// // class developer extends Person  {
// //     work(){
// //         console.log("Building a website...")
// //     }
// // }
// // let objects : developer =  new developer("Homo sapiens")
// // console.log(objects)
// // console.log(objects.name)  // homo sapiens
// // objects.eat()  // Chiken biryani
// // objects.sleep() // Azan is sleeping
// // objects.work()//  buiding a website
// // //__________________________________________________________lets dive into super keyword_____________________________________________________________/////
// // // The  super keyword is used to the call constructor of parent class. to access the properties ad method of parent class into child
// // //start with a basic example
// class Person1 {
//     constructor(){
//         console.log("Enter inside the parent class")
//     }
//     eat(){
//         console.log("Chiken biryani")
//     }
//     sleep(){
//         console.log("Person is sleeping")
//     }
// }
// class doctor extends Person1 {
//     constructor(){
//         console.log("Enter inside the child class")
//        super()  // here super keyword is calling the parent class constructor, Note: if you have to make another constructor in child class even though you have constructor in parent class then you have to call super() keyword otherwise  error: constructors for derived classes must contain a 'super' call
//        super.eat() // here we are calling function of parent class // Chiken biryani
//         console.log("Exit from the child class")
//     }   
//     work(){
//         console.log("Doctor is working")
//     }
// }
// // but as we know on creating instance we get a object based on the blue print which is define
// let obj1 : doctor = new doctor()
// console.log(obj1) // object having all functions
// obj1.eat()  // Chiken biryani
// obj1.sleep() // Person is sleeping
// obj1.work() // Doctor is working
// // so this is how we use the super keyword to call the construstor ,
// // ________________EXAMPLE No:2
// // but if you want to pass any value to the parent constructor then you have to do that like this
// class Person2 {
//     name:string;
//     constructor(name: string){
//         console.log("Inside the parent class")
//         this.name = name;
//     }
//     eat(){
//         console.log("Eating nihari")
//     }
// }
// class engr extends Person2 {
// constructor(name: string){
//     console.log("Inside the child class")
//     super(name)  // here we are passing the name to parent class constructor
//     console.log("Exit from the child class")  
// }
//     work(){
//             console.log("Working as a mechanical engineer")
//     }
// }
// let obj2 : engr = new engr("Azan")
// console.log(obj2) // engr { name: 'Azan' }
// obj2.eat()  // Eating nihari
// obj2.work() // Working as a mechanical engineer
// console.log(obj2.name) // Azan
// //__________Example 3
// // pasing value from super to the parent constructor and also passing values to the child  constructor
// class person3 {
//     name:string;
//     age:number;
//     constructor(name: string, age: number){
//         console.log("Inside the parent class")
//         this.name = name;
//         this.age = age;
//     }
//     student(){
//         console.log("M.Azan is a student in class 12")
//     }
// }
// class students extends person3 {
//     rollNumber:number;
//     isPresent:boolean;
//     constructor(name:string,age:number,rollNum:number,isPresent:boolean){
//         console.log("Inside the child class")
//         super(name,age)  // here we are passing name and age to parent class constructor
//         this.rollNumber = rollNum;
//         this.isPresent = isPresent;
//         console.log("Exit from the child class")
//     }
//     exams(){
//              console.log("M.Azan is appearing for exams")
//     }
// }
// let student : students = new students("Bisma",20,1220,true);
// console.log(student)   // { name: 'Bisma', age: 20, rollNumber: 1220, isPresent: true }
// student.student()  // M.Azan is a student in class 12
// student.exams()  // M.Azan is appearing for exams
// //super keyword is use to  call the parent constructor and its method and also to pass value to the parent constructor , 
// //plus you must use super in the constructor of a derived class if the parent class has a constructor.other wise 
// //error: Constructors for derived classes must contain a 'super' call  , super keyword can only be used inside constructor when we are  extending a class
// //the super keyword is used to call the constructor and methods of the parent class,
// // but the object is created based on the blueprint defined by the class. 
// //The super keyword ensures that the parent class is properly initialized before the subclass can use it.
// //___________________________________________________________ Classes and Objects  Practice Questions_________________________________________________________________________________//
// class User {
//     name: string;
//     email: string;
//     constructor(name: string, email: string){
//         this.name = name;
//         this.email = email;
//     }
//     viewWbesite(){
//         let website =  `Visit ${this.name}'s website: https://${this.email.split('@')[1]}.com`
//         console.log(website);
//     }
// }
// let data : User = new User("Muhammad Azan","muhammad.azan18@icloud.com")
//  console.log(data) // { name: 'Muhammad Azan', email: 'muhammad.azan18@icloud.com' }
// data.viewWbesite()  // Visit Muhammad Azan's website: https://icloud.com.com
// // or
// class inheritance extends User {
//     pass : number;
//     constructor(name: string, email: string, pass:number){
//         super(name, email)  // calling parent constructor
//         this.pass = pass;
//     }
// }
// let anotheeData:inheritance = new inheritance("ayesah","ayesha123@gamil.com",12344)
// console.log(anotheeData)
// anotheeData.viewWbesite()  // Visit ayesah's website: https://gamil.com.com
// /// QNO : 2 using user class
// class Admin extends User{
//     name2 :string;
//     constructor(name: string, email: string, name2: string){
//         super(name, email)  // calling parent constructor
//         this.name2 = name2;
//     }
//     editWebsite(){
//         console.log(`${this.name2} is editing the website`)
//     }
// }
// let admin : Admin =  new Admin("Ayesah", "ayesha123@gamil.com","Admin Azan");
// console.log(admin)
// admin.editWebsite() // Admin Azan is editing the website
let a = 5;
let b = 9;
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`a+b = ${a + b}`);
try {
    console.log(`a-b = ${a - c}`);
}
catch (err) {
    console.log(err.message);
}
console.log(`a-b = ${a * b}`);
export {};
