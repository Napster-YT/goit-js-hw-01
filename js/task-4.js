'use strict'

let credits = 23580;
const pricePerDroid = 3000;
let theNumberOfDroidPiecesThatTheUserWantsToBuy = prompt('Введіть число ремонтних дроїдів, які Ви хочете купити!');

let totalPrice;
let remainder;


if (!theNumberOfDroidPiecesThatTheUserWantsToBuy) {
    console.log('Скасовано користувачем!');
} else {
    if (theNumberOfDroidPiecesThatTheUserWantsToBuy * 1) {
        totalPrice = theNumberOfDroidPiecesThatTheUserWantsToBuy * pricePerDroid;

        if (totalPrice > credits) {
    console.log('Недостатньо коштів на рахунку!');
    } else {
        remainder = credits - totalPrice;
        console.log(`Ви купили ${theNumberOfDroidPiecesThatTheUserWantsToBuy} дроїд(ів), на рахунку залишилося ${remainder} кредитів.`);
        alert(`Ви купили ${theNumberOfDroidPiecesThatTheUserWantsToBuy} дроїд(ів), на рахунку залишилося ${remainder} кредитів.`);
    };
    } else {
        console.log('Не коректні дані!!!');
    }
};
//cnsl.log(totalPrice);    