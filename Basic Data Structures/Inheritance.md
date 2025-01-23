### We achieve Inheritance in Javascript with the chain of prototypes.

Every function in Javascript has a prototype property except the fat arrow functions.
We can create a prototype chain with the Object.create. Object.create takes two arguments the first one is the prototype object you need for this object and the second one is the optional properties descriptor object.
You can get the property descriptor object on any object’s property with this Object.getOwnPropertyDescriptor.
Every function has a prototype object on it and you can define properties on this object. You can call these properties when you create an object with the keyword new.
From ES2015 we have a class keyword in Javascript and this is just syntactic sugar and creates a function as in the Constructor function
The super keyword in the Employer class constructor method is a generic way to call the parent class constructor. You can even set the current instance with the keyword this.

more theory no code wait buddy

```js
#example1 #withclasses
class Person {
personId = 0;
constructor(id) { console.log("Creating the person:::" + id); this.personId = id; }
printFullName() { return this.firstName + " " + this.lastName; }
getDesignation() { return this.designation; }
isEmployee() { return this.staus === 'employee' }
isEmployer() { return this.status === 'employer' }}

class Employer extends Person {
constructor(id) { super(id); }
firstName = "emplfname"; lastName = "emplname"; employerId = "24234234234234"; status = "employer"; designation = "employer";
toUpper(name) { return name.toUpperCase(); }}
class Employee extends Employer {
constructor(id) { super(id); }
firstName = "employeefname"; lastName = "employeelname"; employerId = "44544444444"; status = "employee"; designation = "president";
}

// creating an employee
const employee = new Employee(100);
// creating an employer
const employer = new Employer(200);
// creating a person
const person = new Person(200);
```
