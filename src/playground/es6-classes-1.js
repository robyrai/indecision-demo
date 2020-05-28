class Person {
    constructor(name = "John Doe", age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${ this.name }!`
    }

    getDescription() {
        return `${ this.name } is ${ this.age } years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getGreeting();

        if (this.hasMajor()) {
            description += ` My major is ${this.major}.`
        }
        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.hasLocation()) {
            greeting += ` I'm from ${this.homeLocation}.`
        }
        return greeting;
    }
}

const me = new Traveller("Roby Rai", 34, "Boston");

console.log(me.getGreeting());

const other = new Traveller();

console.log(other.getGreeting());