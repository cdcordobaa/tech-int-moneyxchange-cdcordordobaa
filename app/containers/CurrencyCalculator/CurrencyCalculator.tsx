import * as React from 'react';
import { Styles } from './styles';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import currencyCalculatorSlice from 'data/ducks/currencies/reducers';
import saga from 'data/ducks/currencies/sagas';
import TextField from '@material-ui/core/TextField';
import Save from '@material-ui/icons/Save';
import AddInputDialog from 'components/AddInputDialog/AddInputDialog';
import { makeSelectCurrencies } from 'data/ducks/currencies/selectors';
import { Grid } from '@material-ui/core';

const stateSelector = createStructuredSelector({
  currencies: makeSelectCurrencies(),
});

export interface ICurrencyCalculatorViewProps {

}

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
        ),
      );
    });
    return <Styles.CurrenciesRow>{inputs}</Styles.CurrenciesRow>;
  };

  const handleCurrencySelect = currency => {
    console.log('maahn', currency);
    currentReport = { ...currentReport, [currency]: 1 };
    console.log('sss', currentReport);
    const currentSelectedCurrency = currencies.traking_reports.currentSelectedCurrency;
    const multiplier = 29;
    dispatch(currencyCalculatorSlice.actions.setMultiPlier({currentSelectedCurrency: 'USD', multiplier}));
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
      <Grid container spacing={1} alignItems="flex-end" justify="center">
        <Grid item>
          <Save />
        </Grid>
        <Grid item>
          <TextField id="input-with-icon-grid" label="Save Report As" />
        </Grid>
      </Grid>
      <Styles.SaveReport>Save</Styles.SaveReport>
    </Styles.CurrencyContainer>
  );
};

export default CurrencyCalculatorView;
