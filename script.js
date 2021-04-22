'use strict';

// const bookings = [];

// const createBooking = function(flightNumber, 
//     numberPassengers = 2,
//     price = 179 * numberPassengers) {

//         // ES5
//         // numPassengers = numPassengers || 1;
//         // price = price || 199; 
        
//         const booking = {
//             flightNumber,
//             numberPassengers,
//             price
//         }
//         console.log(booking);
//         bookings.push(booking);
//     };

//     createBooking('LH123');
//     // createBooking('LH123', 4, 800);
//     createBooking('LH123', undefined, 100);


//     const flight = 'LH123';
//     const jay = {
//         name: 'Jay Farnsworth',
//         passport: 234797532
//     }

//     const checkIn = function(flightNumber, passenger) {
//         flightNumber = 'LH876';
//         passenger.name =  'Mr. ' + passenger.name;  
    
//     if (passenger.passport === 234797532) {
//         console.log('Checked in')
//     } else {
//         console.log('Wrong passport!');
//     }
// }


//     // checkIn(flight, jay);
//     // console.log(flight);
//     // console.log(jay);

//     const flightNumber = flight; 
//     const passenger = jonas; 

//     const newPassport = function(person) {
//         person.passport = Math.trunc(Math.random() +
//         1000000000); 

//     }

//     newPassport(jonas);
//     checkIn(flight, jonas);









//     const oneWord = function(string) {
//         return string.replace(/ /g, '').toLowerCase();
//     }

//     const upperFirstWord = function(string) {
//         const [first, ...others] = string.split(' ');
//         return [first.toUpperCase(), ...others].join(' ');
//     }

//     const transformer = function(string, fn) {
//         console.log(`Original string: ${string}`);
//         console.log(`Transformed string: ${fn(string)}`);

//         console.log((`Transformed by: ${fn.name}`));
//     }

//     transformer('JavaScript is the best!', upperFirstWord);

//     transformer('JavaScript is the best!', oneWord);

// const high5 = function() {
//     console.log('High Five!');
// };

// document.body.addEventListener('click', high5);

// ['Jay', 'Martha', 'Adam', 'Peter', 'Bob'].forEach(high5); 



// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greeterHey = greet('Hey');
// greeterHey('Jay');
// greeterHey('Steven');

// greet('Hello')('Jay');

// // Rewritten with an arrow function 
// const greetArrow = greeting => name => 
// console.log(`${greeting} ${name}`);

// greetArrow('Hi')('Jay');



const delta = {
    airline: 'Delta',
    airlineCode: 'DA',
    bookings: [],
    // book: function() ()
    book(flightNumber, name) {
        console.log(`${name} booked a seat on 
    ${this.airline} flight ${this.airlineCode} ${flightNumber}`
        );
        this.bookings.push({ flight: `${this.airlineCode}
        ${flightNumber}, name `});
    }

}

delta.book(123, 'Jay Farnsworth');
delta.book(456, 'Rebekah Farnsworth');


const southWest = {
    name: "Southwest",
    airlineCode: "SW",
    bookings: [],
};

const book = delta.book; 

// Does NOT work 
// book(43, "Andrew Jackson");

book.call(southWest, 45, "Andrew Jackson");
console.log(southWest);