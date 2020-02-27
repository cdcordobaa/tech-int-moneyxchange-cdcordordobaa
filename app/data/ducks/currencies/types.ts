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
        reportName?: string,
        addedCurrency?: string,
    };
}

interface IaddCurrencieToReport extends IsetMultiplierAction {
    payload: {
        currentSelectedCurrency: string,
        multiplier: number,
        reportName?: string,
        addedCurrency: string,
    };
}

const currenciesInitialState: ICurrenciesState = {
    current_report: 'default',
    currencies: {
        USD: 1,
        EUR: 0.5,
        COP: 2,
        CNY: 3,
    },
    traking_reports: {
        default: {
            name: 'default',
            currenciesMultipliers: {
                USD: 1,
                EUR: 5,
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
    IaddCurrencieToReport,
};
