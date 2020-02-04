import * as React from 'react';
import { Styles } from './styles';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import currencyCalculatorSlice from 'data/ducks/currencies/reducers';
import saga from 'data/ducks/currencies/sagas';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AddInputDialog from 'components/AddInputDialog/AddInputDialog';

import { makeSelectCurrencies } from 'data/ducks/currencies/selectors';
import { ICurrenciesState } from 'data/ducks/currencies/types';

const stateSelector = createStructuredSelector({
  currencies: makeSelectCurrencies(),
});

const currenciesPicker = {
  USD: 1,
  EUR: 2,
};

const currentList = ['USD', 'EUR'];

export interface ICurrencyCalculatorViewProps {}

const CurrencyCalculatorView: React.FC<ICurrencyCalculatorViewProps> = (
  props: ICurrencyCalculatorViewProps,
) => {
  const { currencies } = useSelector(stateSelector);
  const dispatch = useDispatch();
  console.log('uy', currencies);

  useInjectReducer({
    key: 'currencies',
    reducer: currencyCalculatorSlice.reducer,
  });
  useInjectSaga({ key: 'currencies', saga: saga });

  const allCurrencies: any[] = Object.keys(currencies.currencies);
  const selectedCurrency =
    currencies.traking_reports.default.currentSelectedCurrency;
  let currentReport = currencies.traking_reports.default.currenciesMultipliers;

  const inputsList = () => {
    const inputs = new Array<React.ReactElement>();
    Object.keys(currentReport).forEach((currency, index) => {
      const readonly = currency !== selectedCurrency;
      inputs.push(
        (
        <Styles.CurrencyInput>
          <TextField
            id="outlined-read-only-input"
            label={currency}
            defaultValue={currentReport[currency]}
            InputProps={{
              readOnly: readonly,
            }}
            variant="outlined"
            type="number"
          />
        </Styles.CurrencyInput>
        )
        ,
      );
    });
    return <Styles.CurrenciesRow>{inputs}</Styles.CurrenciesRow>;
  };

  const handleCurrencySelect = currency => {
    console.log('maahn', currency);
    currentReport = { ...currentReport, [currency]: 1 };
  };

  return (
    <Styles.CurrencyContainer>
      <Styles.CurrencyInputsContainer>
        {inputsList()}
        <AddInputDialog
          currenciesList={allCurrencies}
          onSelectCurrency={handleCurrencySelect}
        />
      </Styles.CurrencyInputsContainer>
      <Styles.SuperCoolButton>
          Calcualte Currency exchange
      </Styles.SuperCoolButton>
    </Styles.CurrencyContainer>
  );
};

export default CurrencyCalculatorView;
