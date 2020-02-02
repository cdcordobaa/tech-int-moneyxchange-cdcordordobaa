import * as React from 'react';
import { Styles } from './styles';
import { useInjectReducer } from 'utils/injectReducer';
import currencyCalculatorSlice from 'data/ducks/currencies/reducers';
export interface ICurrencyCalculatorViewProps {
}

const CurrencyCalculatorView: React.FC<ICurrencyCalculatorViewProps> = (props: ICurrencyCalculatorViewProps) => {

    const currencies = {
        usd: 1,
        eu: 1,
        cop: 1,
    };

    useInjectReducer({ key: 'currencies', reducer: currencyCalculatorSlice.reducer });


    const inputsList = () => {

        const inputs = new Array< React.ReactElement>();

        Object.keys(currencies).forEach(currency => {
                inputs.push(<Styles.CurrencyInput type="number" name="currency" value="currency" />);
        });

        return(
            <Styles.CurrenciesRow>
                {inputs}
            </Styles.CurrenciesRow>
        );
    };

    return (
    <Styles.CurrencyContainer>
      {inputsList}
      <Styles.BigCalculateButton>
            {inputsList()}
      </Styles.BigCalculateButton>
    </Styles.CurrencyContainer>
  );
};

export default CurrencyCalculatorView;
