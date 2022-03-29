// classes are objects
// blueprints for objects
// can contain methods and properties

// declaring a class
class Person{
    //to add props
    constructor(){

        this.name="varma"

    }

    //methods -- no need for const for methods
    main = () =>{
    console.log('main function inside a class');
    }


}

//initiating a class
const personNew = new Person();

console.log(personNew.name)
console.log(personNew.main())
console.log(personNew.main)

//create a child class
class Human extends Person{
    constructor(){
        //super constructor
        super();
        this.age = 18;
    }
}

const humanNew = new Human();

console.log(humanNew.name)