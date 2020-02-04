import { createReducer, createSlice } from '@reduxjs/toolkit';
import {
  ICurrenciesState,
  currenciesInitialState,
  IsetMultiplierAction,
} from './types';


const currencyCalculatorSlice = createSlice({
  name: 'moneyxchange/currencies',
  initialState: currenciesInitialState as ICurrenciesState,
  reducers: {
    setMultiPlier: (state: ICurrenciesState , action: IsetMultiplierAction) => {
      state.traking_reports.default
      .currenciesMultipliers[action.payload.currentSelectedCurrency] = action.payload.multiplier;
    },
  },
});

export default currencyCalculatorSlice;
