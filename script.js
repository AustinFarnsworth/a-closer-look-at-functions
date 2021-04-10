'use strict';

const bookings = [];

const createBooking = function(flightNumber, 
    numberPassengers = 2,
    price = 179 * numberPassengers) {

        // ES5
        // numPassengers = numPassengers || 1;
        // price = price || 199; 
        
        const booking = {
            flightNumber,
            numberPassengers,
            price
        }
        console.log(booking);
        bookings.push(booking);
    };

    createBooking('LH123');
    // createBooking('LH123', 4, 800);
    createBooking('LH123', undefined, 100);


    const flight = 'LH123';
    const jay = {
        name: 'Jay Farnsworth',
        passport: 234797532
    }

    const checkIn = function(flightNumber, passenger) {
        flightNumber = 'LH876';
        passenger.name =  'Mr. ' + passenger.name;  
    
    if (passenger.passport === 234797532) {
        console.log('Checked in')
    } else {
        console.log('Wrong passport!');
    }
}


    checkIn(flight, jay);
    console.log(flight);
    console.log(jay);