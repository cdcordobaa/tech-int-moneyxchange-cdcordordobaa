import { string } from 'prop-types';
import { type } from 'os';

interface ICurrencieValues {
    USD: number;
    EUR: number;
    COP: number;
    CNY: number;
}

interface ICurrentMultipliers extends Partial<ICurrencieValues> {
    base?: number;
}

interface ICurrenciesState {
    current_report: string;
    currencies: ICurrencieValues;
    traking_reports: {
        [key: string]: ItrakingReports,
    };
}

interface ItrakingReports {
    name: string;
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
    current_report: 'default',
    currencies: {
        USD: 0,
        EUR: 0,
        COP: 0,
        CNY: 0,
    },
    traking_reports: {
        default: {
            name: 'default',
            currenciesMultipliers: {
                USD: 0,
                EUR: 0,
            },
            currentSelectedCurrency: 'USD',
        },
    },
};


export {
    ICurrencieValues,
    ICurrentMultipliers,
    ICurrenciesState,
    currenciesInitialState,
    IsetMultiplierAction,
};
