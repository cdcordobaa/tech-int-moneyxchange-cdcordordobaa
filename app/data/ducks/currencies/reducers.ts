import { createReducer, createSlice } from '@reduxjs/toolkit';
import {
  ICurrenciesState,
  currenciesInitialState,
  IsetMultiplierAction,
} from './types';


// const counter = createReducer(currenciesInitialState, {
//   [calculate.type]: (state: ICurrencieState, action) => {
//     state.USD = state.USD + 1;
//   },
// });

const currencyCalculatorSlice = createSlice({
  name: 'moneyxchange/currencies',
  initialState: currenciesInitialState as ICurrenciesState,
  reducers: {
    setMultiPlier: (state: ICurrenciesState , action: IsetMultiplierAction) => {
      state.currenciesMultipliers[action.payload.currentSelectedCurrency] = action.payload.multiplier;
    },
  },
});

export default currencyCalculatorSlice;
