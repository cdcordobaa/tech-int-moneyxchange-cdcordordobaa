import { createSelector } from 'reselect';
import { ApplicationRootState } from '../../../types';
import { currenciesInitialState } from './types';

const selectCurrencies = (state: ApplicationRootState) => {
  return state.currencies || currenciesInitialState;
};

const makeSelectCurrencies = () =>
  createSelector(selectCurrencies, substate => {
    return substate;
});

export {makeSelectCurrencies};
