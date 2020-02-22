import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const SuperCoolButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: '#fff !important',
  height: 48,
  minWidth: 120,
  padding: '0 80px',
});

const CurrencyContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
    background: #AAC;
    background: linear-gradient(180deg, #686d73, #6c7a80, #686d73);
    color: white;
`;

const CurrenciesRow = styled.div`
    display: flex;
`;

const CurrencyInput = styled.div`
    min-width: 150px;
    max-width: 200px;
    margin: 0 1.3rem;
`;

const CurrencyInputsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-basis: 3rem;
    flex-wrap: wrap;
`;

const BigCalculateButton = styled.button`
    min-width: 250px;
    min-height: 80px;
`;

const SaveReport = styled(Button)`
    color: white !important;
    background: palevioletred !important;
    padding: .8rem 1.1rem;

`;

export const Styles = {
    CurrencyContainer,
    CurrenciesRow,
    CurrencyInput,
    CurrencyInputsContainer,
    SuperCoolButton,
    SaveReport,
};
