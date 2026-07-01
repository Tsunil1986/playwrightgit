class Car {
//A class may only have one constructor
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
  
    display() {
        console.log(`Car Name: ${this.name}`); //Variable injection
        // console.log("Car Name:" + this.name);
        console.log(`Car Color: ${this.color}`);
    }
    //When we have 2 methods with same name inside class, javascript stores latest method in memory

}

const car1 = new Car("BMW", "Black");
car1.display();

class Product{
    constructor(name,price,category) {
        this.name = name
        this.price = price
        this.category = category
    }
    display(){
        console.log("Product Name:",this.name)
        console.log("Product price:",this.price)
        console.log("Product category:",this.category)

    }
}

const prod1 = new Product("shirt",500,"dress")
const prod2 = new Product("pant",900,"dress")

prod1.display()
prod2.display()