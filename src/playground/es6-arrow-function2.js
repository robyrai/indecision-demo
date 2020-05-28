// Argument object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments); // not available in arrow function
    return a + b;
};

console.log(add(55, 1));

console.log("this is part 2...");

// this keyword - no longer bound

const user = {
    name: 'Roby',
    cities: ['Kansas City', 'New York', 'Boston'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
        // console.log(this.name);
        // console.log(this.cities);

        // const that = this; // in es5

        // this.cities.forEach((city) => {
        //     console.log(this.name + " has lived in " + city + ".");
        // });
    }
};
// user.printPlacesLived();
console.log(user.printPlacesLived());


const multiplier = {
    myNumbers: [12, 43, 22, 54],
    multiplyBy: 10,
    multiply() {
        return this.myNumbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());