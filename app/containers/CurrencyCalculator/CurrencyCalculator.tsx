import React, { useState, useEffect } from 'react';
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

export interface ICurrencyCalculatorViewProps {}

const CurrencyCalculatorView: React.FC<ICurrencyCalculatorViewProps> = (
  props: ICurrencyCalculatorViewProps,
) => {
  // state attributes
  const [defaultCurrencyValue, setdefaultCurrencyValue] = useState(0);
  const [reportName, setreportName] = useState('default');
  const [currentStateReport, setcurrentStateReport] = useState({});

  const { currencies } = useSelector(stateSelector);
  const dispatch = useDispatch();
  useInjectReducer({
    key: 'currencies',
    reducer: currencyCalculatorSlice.reducer,
  });
  useInjectSaga({ key: 'currencies', saga: saga });

  const selectedCurrency =
    currencies.traking_reports.default.currentSelectedCurrency;
  const report = currencies.traking_reports.default;

  useEffect(() => {
    setcurrentStateReport(
      report.currenciesMultipliers,
    );
    setdefaultCurrencyValue(
      report.currenciesMultipliers[
        selectedCurrency
      ],
    );
  }, [currencies]);

  const inputsList = () => {
    const inputs = new Array<React.ReactElement>();
    Object.keys(currentStateReport).forEach((currency, index) => {
      const readonly = currency !== selectedCurrency;
      inputs.push(
        // tslint:disable-next-line: jsx-wrap-multiline
        <Styles.CurrencyInput>
          <TextField
            key={index}
            id="outlined-read-only-input"
            label={currency}
            value={
              !readonly ? defaultCurrencyValue : currentStateReport[currency]
            }
            InputProps={{
              readOnly: readonly,
            }}
            variant="outlined"
            type="number"
            onChange={ev => {
              if (!readonly) {
                setdefaultCurrencyValue(parseInt(ev.target.value, 10));
              }
            }}
          />
        </Styles.CurrencyInput>,
      );
    });
    return <Styles.CurrenciesRow>{inputs}</Styles.CurrenciesRow>;
  };

  const handleCurrencySelect = currency => {
    dispatch(
      currencyCalculatorSlice.actions.addCurrencieToReport({
        currentSelectedCurrency: report.currentSelectedCurrency ,
        multiplier: defaultCurrencyValue,
        addedCurrency: currency,
      }),
    );
  };

  const onCalculateCurrencyClick = () => {
    dispatch(
      currencyCalculatorSlice.actions.setMultiPlier({
        currentSelectedCurrency: report.currentSelectedCurrency,
        multiplier: defaultCurrencyValue,
      }),
    );
  };

  const onReportSave = () => {
    setreportName('');
  };

  return (
    <Styles.CurrencyContainer>
      <Styles.CurrencyInputsContainer>
        {inputsList()}
        <AddInputDialog
          currenciesList={Object.keys(currencies.currencies)}
          onSelectCurrency={handleCurrencySelect}
        />
      </Styles.CurrencyInputsContainer>
      <Styles.SuperCoolButton onClick={onCalculateCurrencyClick}>
        Calcualte Currency exchange
      </Styles.SuperCoolButton>
      <Grid container spacing={1} alignItems="flex-end" justify="center">
        <Grid item>
          <Save />
        </Grid>
        <Grid item>
          <TextField
            onChange={ev => setreportName(ev.target.value)}
            id="input-with-icon-grid"
            label="Save Report As"
          />
        </Grid>
      </Grid>
      <Styles.SaveReport onClick={onReportSave}>Save</Styles.SaveReport>
    </Styles.CurrencyContainer>
  );
};

export default CurrencyCalculatorView;
