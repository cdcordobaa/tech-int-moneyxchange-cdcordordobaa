interface ICurrencieValues {
    USD: number;
    EUR: number;
    COP: number;
    CNY: number;
}

interface ICurrentMultipliers extends ICurrencieValues {
    base: number;
}

interface ICurrenciesState {
    currencies: ICurrencieValues;
    currentSelectedCurrency: string;
    currenciesMultipliers: ICurrentMultipliers;

}

interface IsetMultiplierAction {
    type: string;
    payload: {
        currentSelectedCurrency: string,
        multiplier: number,
    };
}

const currenciesInitialState: ICurrenciesState = {
    currencies: {
        USD: 0,
        EUR: 0,
        COP: 0,
        CNY: 0,
    },
    currenciesMultipliers: {
        USD: 0,
        EUR: 0,
        COP: 0,
        CNY: 0,
        base: 1,
    },
    currentSelectedCurrency: 'USD',
};


export {
    ICurrencieValues,
    ICurrentMultipliers,
    ICurrenciesState,
    currenciesInitialState,
    IsetMultiplierAction,
};
