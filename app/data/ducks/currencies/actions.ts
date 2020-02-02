import {createAction} from '@reduxjs/toolkit';

const increment = createAction('moneyxchange/currencies/INCREMENT');
const calculate = createAction('moneyxchange/currencies/CALCULATE');

export {
    increment,
    calculate,
};
