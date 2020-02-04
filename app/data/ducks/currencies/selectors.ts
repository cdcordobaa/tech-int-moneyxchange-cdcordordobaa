import { createSelector } from 'reselect';
import { ApplicationRootState } from '../../../types';
import { currenciesInitialState, ICurrenciesState } from './types';

const selectCurrencies = (state: ApplicationRootState) => {
  return state.currencies || currenciesInitialState;
};

const makeSelectCurrencies = () =>
  createSelector(selectCurrencies, (substate: ICurrenciesState)  => {
    return substate;
});

export {makeSelectCurrencies};
