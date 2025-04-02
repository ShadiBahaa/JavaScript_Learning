// Base class representing an Animal
class Animal {
    constructor(name) {
        this.name = name; // Assign the name of the animal
        this.energy = 100; // Default energy level for all animals
    }

    eat(food) {
        // Method to simulate eating
        console.log(`${this.name} eats ${food}`); // Log what the animal eats
        this.energy += 10; // Increase energy by 10 after eating
    }
}

// Subclass representing a Dog, which extends Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent class constructor to initialize 'name' and 'energy'
        this.breed = breed; // Add a breed property specific to Dog
    }

    bark() {
        // Method to simulate barking
        console.log(`${this.name} barks!`); // Log the barking action
        this.energy -= 5; // Decrease energy by 5 after barking
    }
}

// Subclass representing a PoliceDog, which extends Dog
class PoliceDog extends Dog {
    constructor(name, breed, badgeNumber) {
        super(name, breed); // Call the Dog constructor to initialize 'name' and 'breed'
        this.badgeNumber = badgeNumber; // Add a badge number specific to PoliceDog
        this.trained = true; // Police dogs are trained by default
    }

    trackSuspect(suspectName) {
        // Method to simulate tracking a suspect
        if (this.energy < 30) {
            // Check if the dog has enough energy to track
            console.log(`${this.name} is too tired to track!`); // Log if the dog is too tired
            return; // Exit the method if energy is insufficient
        }
        console.log(`${this.name} is tracking ${suspectName}...`); // Log the tracking action
        this.energy -= 25; // Decrease energy by 25 after tracking
    }
}

// Create an instance of PoliceDog
const max = new PoliceDog('Max', 'German Shepherd', 'K9-123');

// Demonstrate the methods available to PoliceDog
max.eat('special K9 food'); // Call the eat method from Animal
max.bark(); // Call the bark method from Dog
max.trackSuspect('suspect'); // Call the trackSuspect method from PoliceDog

console.log(max); // Log the final state of the PoliceDog object

/* Output:
PoliceDog {
    name: "Max",
    energy: 85,
    breed: "German Shepherd",
    badgeNumber: "K9-123",
    trained: true
}
*/

// Base class representing a Vehicle
class Vehicle {
    constructor(speed) {
        this.speed = speed; // Assign the speed of the vehicle
    }

    move() {
        // Method to simulate movement
        console.log(`Moving at ${this.speed} mph`); // Log the speed of movement
    }
}

// Define behaviors as reusable objects
const canMove = {
    move() {
        // Behavior for moving
        console.log(`Moving at ${this.speed} mph`); // Log the speed of movement
    }
};

const canFly = {
    fly() {
        // Behavior for flying
        console.log(`Flying at ${this.speed} mph and ${this.altitude} feet`); // Log the speed and altitude of flight
    }
};

const canFloat = {
    float() {
        // Behavior for floating
        console.log(`Floating in water`); // Log the floating action
    }
};

// Class representing a Car
class Car {
    constructor(speed) {
        this.speed = speed; // Assign the speed of the car
        Object.assign(this, canMove); // Add moving capability to the car
    }
}

// Class representing a Boat
class Boat {
    constructor(speed) {
        this.speed = speed; // Assign the speed of the boat
        Object.assign(this, canMove, canFloat); // Add moving and floating capabilities to the boat
    }
}

// Class representing an Airplane
class Airplane {
    constructor(speed, altitude) {
        this.speed = speed; // Assign the speed of the airplane
        this.altitude = altitude; // Assign the altitude of the airplane
        Object.assign(this, canMove, canFly); // Add moving and flying capabilities to the airplane
    }
}

// Create instances of Car, Boat, and Airplane
const car = new Car(60); // Create a car with a speed of 60 mph
const boat = new Boat(40); // Create a boat with a speed of 40 mph
const plane = new Airplane(500, 30000); // Create an airplane with a speed of 500 mph and an altitude of 30,000 feet

// Demonstrate the capabilities of each vehicle
car.move(); // Call the move method from canMove
boat.move(); // Call the move method from canMove
boat.float(); // Call the float method from canFloat
plane.fly(); // Call the fly method from canFly
