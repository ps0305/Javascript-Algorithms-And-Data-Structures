### Topics
1. Design Patterns that you know?
  * Creational (several patterns)
  * Structural (several patterns)
  * Behavioral (several patterns)
  * MV*
  * Flux/Redux
2. Describe the architecture and patterns of your current project, describe challenges.
3. JS module systems (ES6+ modules, CommonJS)

### Recommended materials
* [Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
* [javascript-patterns repository](https://github.com/shichuan/javascript-patterns)
* [design-patterns-JS](https://github.com/fbeline/Design-Patterns-JS)
* [JavaScript Design Patterns](https://www.dofactory.com/javascript/design-patterns)
* [Micro frontends](https://martinfowler.com/articles/micro-frontends.html)
* [Understanding SOLID Principles in JavaScript](https://hackernoon.com/understanding-solid-principles-in-javascript-w1cx3yrv)
* [Dependency Injection Vs Dependency Inversion Vs Inversion of Control](https://medium.com/ssense-tech/dependency-injection-vs-dependency-inversion-vs-inversion-of-control-lets-set-the-record-straight-5dc818dc32d1)
* [CommonJS and ESmodules Explained](https://www.freecodecamp.org/news/modules-in-javascript/)
* [Javascript module system](https://www.freecodecamp.org/news/anatomy-of-js-module-systems-and-building-libraries-fadcd8dbd0e/)
* [Design Patterns Refactoring Guru](https://refactoring.guru/design-patterns)
* [JavaScript patterns](https://github.com/shichuan/javascript-patterns)
* [Design Patterns in JS](https://github.com/fbeline/Design-Patterns-JS)
* [JavaScript Design Patterns](https://www.dofactory.com/javascript/design-patterns)
* [Good Parts of JavaScript — Currying, Memoization, and Inheritance](https://medium.com/swlh/good-parts-of-javascript-currying-memoization-and-inheritance-7bfe28e8e0bd)

Let's walk through the **SOLID** principles with real-life analogies that help make each concept easier to understand.

---

### **1. Single Responsibility Principle (SRP)**

**Definition:** A class should have only one reason to change. It should do only one job.

**Real-life analogy:**
📦 **A Coffee Machine and the Cashier**
Imagine a coffee shop. The **cashier** takes orders and handles payments, while the **coffee machine** makes coffee.
If the coffee machine also starts taking payments, it would become complicated and error-prone.
👉 Each has a **single responsibility** – the cashier for money, the machine for coffee.

```js
        // Bad example
        class User {
          constructor(name, email) {
            this.name = name;
            this.email = email;
          }
        
          saveToDatabase() {
            // Save user data to database
          }
        
          sendEmail() {
            // Send email to user
          }
        }
        
        // Good example
        class User {
          constructor(name, email) {
            this.name = name;
            this.email = email;
          }
        }
        
        class UserDatabase {
          save(user) {
            // Save user data to database
          }
        }
        
        class UserEmail {
          sendVerification(user) {
            // Send email to user
          }
        }
```

---

### **2. Open/Closed Principle (OCP)**

**Definition:** Software entities should be open for extension but closed for modification.

**Real-life analogy:**
🔌 **Power Strip (Extension Board)**
A power strip allows you to plug in new devices **without modifying the wall socket**.
If you get a new gadget, you just **extend** it by plugging it into the strip – you don't need to rewire your house.
👉 The socket is **closed for modification** but **open for extension**.

```js
        // Bad example
        class Shape {
          constructor(type, ...args) {
            this.type = type;
            this.args = args
          }
        
          area() {
            if (this.type === 'circle') {
              return Math.PI * this.args[0] * this.args[0];
            } else if (this.type === 'square') {
              return this.args[0] * this.args[0];
            }
          }
        }
        
        // Good example
        class Shape {
          area() {
            throw new Error("Area method must be implemented.");
          }
        }
        
        class Circle extends Shape {
          constructor(radius) {
            super();
            this.radius = radius;
          }
        
          area() {
            return Math.PI * this.radius * this.radius;
          }
        }
        
        class Square extends Shape {
          constructor(side) {
            super();
            this.side = side;
          }
        
          area() {
            return this.side * this.side;
          }
        }
```

---

### **3. Liskov Substitution Principle (LSP)**

**Definition:** Subtypes must be substitutable for their base types without altering the correctness of the program.

**Real-life analogy:**
🚗 **Rental Car Example**
You rent a car (could be Toyota, Honda, or Ford). You expect the car to:

* Start with a key
* Have a steering wheel
* Accelerate and brake in the same way
  No matter the brand, it **should work like a car**. If a brand suddenly needs a joystick instead of a wheel, it violates expectations.
  👉 Any subclass (car model) must behave like the parent class (car).

```js
        // Bad example
        class Rectangle {
            constructor(width, height) {
                this.width = width;
                this.height = height;
            }
        
            setWidth(width) {
                this.width = width;
            }
        
            setHeight(height) {
                this.height = height;
            }
        
            area() {
                return this.width * this.height;
            }
        }
        
        class Square extends Rectangle {
            setWidth(width) {
                this.width = width;
                this.height = width;
            }
        
            setHeight(height) {
                this.width = height;
                this.height = height;
            }
        }
        
        function increaseRectangleWidth(rectangle) {
            rectangle.setWidth(rectangle.width + 10);
        
            return rectangle.area();
        }
        
        const rectangle = new Rectangle(10, 20);
        increaseRectangleWidth(rectangle); // Returns 300
        
        const square = new Square(10, 10);
        increaseRectangleWidth(square); // Returns 200, not 200
        
        // Good example
        class Shape {
            area() {
                throw new Error("Area method must be implemented.");
            }
        }
        
        class Rectangle extends Shape {
            constructor(width, height) {
                super();
                this.width = width;
                this.height = height;
            }
        
            area() {
                return this.width * this.height;
            }
        }
        
        class Square extends Shape {
            constructor(side) {
                super();
                this.side = side;
            }
        
            area() {
                return this.side * this.side;
            }
        }
        
        function increaseShapeWidth(shape) {
             if (shape instanceof Rectangle) {
                shape.width += 10;
                return shape.area();
             }
             return shape.area();
        }
        
        const rectangle2 = new Rectangle(10, 20);
        increaseShapeWidth(rectangle2); // Returns 300
        
        const square2 = new Square(10);
        increaseShapeWidth(square2); // Returns 100
```

---

### **4. Interface Segregation Principle (ISP)**

**Definition:** No client should be forced to depend on methods it does not use.

**Real-life analogy:**
📞 **Restaurant Staff Roles**
You don’t ask the **chef** to answer customer calls or clean tables – they have a focused role.
Each staff member has a job description with only the **methods** they need.
👉 A person (class) should **only implement interfaces relevant** to their job.

```js
        // Bad example
        interface Worker {
          work();
          eat();
        }
        
        class Human implements Worker {
          work() {
            // working
          }
          eat() {
            // eating
          }
        }
        
        class Robot implements Worker {
          work() {
            // working
          }
          eat() {
            // Robots don't eat, but this method is required by the interface
          }
        }
        
        // Good example
        interface Workable {
          work();
        }
        
        interface Eatable {
          eat();
        }
        
        class Human implements Workable, Eatable {
          work() {
            // working
          }
          eat() {
            // eating
          }
        }
        
        class Robot implements Workable {
          work() {
            // working
          }
        }
```
---

### **5. Dependency Inversion Principle (DIP)**

**Definition:** High-level modules should not depend on low-level modules. Both should depend on abstractions.

**Real-life analogy (your example + expanded):**
🔋 **TV Remote & Battery**
Your remote control doesn't care if you use **Duracell** or **Energizer** batteries.
It just needs something that provides **power** (the abstraction).
👉 You can swap brands (low-level modules) as long as they follow the expected **interface** (providing power).

```js
        // Bad example
        class LightBulb {
          turnOn() {
            // turn on light bulb
          }
        
          turnOff() {
            // turn off light bulb
          }
        }
        
        class Switch {
          constructor() {
            this.lightBulb = new LightBulb();
          }
        
          on() {
            this.lightBulb.turnOn();
          }
        
          off() {
            this.lightBulb.turnOff();
          }
        }
        
        // Good example
        interface Switchable {
          turnOn();
          turnOff();
        }
        
        class LightBulb implements Switchable {
          turnOn() {
            // turn on light bulb
          }
        
          turnOff() {
            // turn off light bulb
          }
        }
        
        class Switch {
          constructor(device) {
            this.device = device;
          }
        
          on() {
            this.device.turnOn();
          }
        
          off() {
            this.device.turnOff();
          }
        }
        
        const lightBulb = new LightBulb();
        const mySwitch = new Switch(lightBulb);
        
        mySwitch.on();
```

---

**difference between Dependency Injection, Dependency Inversion, and Inversion of Control**:

---

## ✅ **1. Dependency Inversion Principle (DIP)**

**What it is:**
A **design principle** that says:

* High-level modules (policy logic) should not depend on low-level modules (details).
* Both should depend on **abstractions** (interfaces).

---

### 💡 Real-life analogy:

🔋 **TV Remote & Battery**

* The TV remote (high-level module) **depends on a power source**, but not on a specific brand like Duracell or Energizer.
* Instead, it depends on the **abstract idea of “a battery that fits and supplies power.”**

👉 **Dependency is inverted**: instead of remote choosing a specific battery, both remote and battery adhere to a **standard (abstraction)**.

---

## ✅ **2. Dependency Injection (DI)**

**What it is:**
A **design pattern** used to implement Dependency Inversion. It means **injecting the dependencies from the outside** instead of a class creating them itself.

---

### 💡 Real-life analogy:

🚗 **Car and Engine Installation**

* Instead of the car building its own engine (tight coupling), a mechanic **installs (injects)** the engine into the car.
* The car can accept any engine that fits a standard (abstraction).

👉 The **engine is injected** into the car — that’s **Dependency Injection** in action.
(Think constructor injection or setter injection in code.)

---

## ✅ **3. Inversion of Control (IoC)**

**What it is:**
A **broader design principle** where the **control flow of the application is inverted**. Instead of the object controlling its dependencies, an external system (like a framework or container) does.

---

### 💡 Real-life analogy:

🎬 **Movie Director and Actors**

* Traditionally, an actor might pick their script, role, costume — they control things.
* In a movie set, the **director (IoC container)** chooses and **assigns roles, scripts, costumes**.
* The actor just shows up and performs.

👉 The **control is inverted**: instead of objects managing their behavior and dependencies, something else (like a Spring container or Angular framework) **manages them**.

---

## 🔁 Summary Table

| Concept                  | What It Is              | Real-Life Analogy | Key Idea                                                     |
| ------------------------ | ----------------------- | ----------------- | ------------------------------------------------------------ |
| **Dependency Inversion** | Design principle        | Remote & Battery  | Code depends on **abstractions**, not concretes              |
| **Dependency Injection** | Implementation pattern  | Car & Mechanic    | **Inject** dependencies into object instead of creating them |
| **Inversion of Control** | Architectural principle | Director & Actors | **External system controls** the flow and object lifecycles  |

---

