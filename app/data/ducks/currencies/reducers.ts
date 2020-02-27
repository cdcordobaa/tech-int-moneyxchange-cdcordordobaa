import { createReducer, createSlice } from '@reduxjs/toolkit';
import {
  ICurrenciesState,
  currenciesInitialState,
  IsetMultiplierAction,
  IaddCurrencieToReport,
} from './types';

const currencyCalculatorSlice = createSlice({
  name: 'moneyxchange/currencies',
  initialState: currenciesInitialState as ICurrenciesState,
  reducers: {
    setMultiPlier: (state: ICurrenciesState, action: IsetMultiplierAction) => {
      // state.traking_reports.default.currenciesMultipliers[
      //   action.payload.currentSelectedCurrency
      // ] = action.payload.multiplier;
      const currencies = state.traking_reports.default.currenciesMultipliers;
      for (const currency in currencies) {
        if (currencies[currency]) {
          currencies[currency] =
            action.payload.multiplier * state.currencies[currency];
        }
      }
      // state.traking_reports.default.currenciesMultipliers = currencies;
      console.log('in reducer', currencies);
    },
    addCurrencieToReport: (state: ICurrenciesState, action: IaddCurrencieToReport) => {
      const currencies = {...state.traking_reports.default.currenciesMultipliers, [action.payload.addedCurrency]: 1};
      for (const currency in currencies) {
        if (currencies[currency]) {
          currencies[currency] =
            action.payload.multiplier * state.currencies[currency];
        }
      }
      state.traking_reports.default.currenciesMultipliers = currencies;
      console.log('in reducer', currencies);
    },
  },
});

export default currencyCalculatorSlice;
