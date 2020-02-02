import styled from 'styled-components';


const CurrencyContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const CurrenciesRow = styled.div`
    display: flex;

`;
const CurrencyInput = styled.input`
    min-width: 250px;
`;

const BigCalculateButton = styled.button`
    min-width: 250px;
    min-height: 80px;
`;

export const Styles = {
    CurrencyContainer,
    CurrenciesRow,
    CurrencyInput,
    BigCalculateButton,
};
