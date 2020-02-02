import styled from 'styles/styled-components';


const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const UserGretings = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid gray;
    padding: 2rem 0 2rem 0;
    flex: 1;
    justify-content: center;
`;

const UserButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const UserLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center
`;

const CurrencyCalculator = styled.div`
    flex:1;
    background: aquamarine;
`;

const Footer = styled.div`
    flex:1;
    background: burlywood;
`;

export const Styles = {
    HomeContainer,
    UserGretings,
    UserButtons,
    UserLogo,
    CurrencyCalculator,
    Footer,
};
