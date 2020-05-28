var nameVar = 'Roby';
var nameVar = 'Rai;'
console.log('nameVar', nameVar);

let nameLet = 'Chamling';
nameLet = 'Maidungchha';
console.log('nameLet', nameLet);

const nameConst = 'Belbari';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Kale';
    return petName;
}

console.log(getPetName());

var fullName = 'Robinhood Rai';

if(fullName) {
    var firstName = fullName.split(" ")[0]
    console.log(firstName);
}

console.log("FirstName = ", firstName);