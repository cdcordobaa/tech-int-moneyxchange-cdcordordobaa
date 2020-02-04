import styled from 'styles/styled-components';
import Avatar from '@material-ui/core/Avatar';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: scroll;
`;

const UserGretings = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid gray;
    padding: 2rem 0 2rem 0;
    flex: 1;
    justify-content: center;
    padding: 0% 15%;
`;

const UserButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 1.5rem 20%;
`;

const UserLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center
`;

const CurrencyCalculator = styled.div`
    flex:1;
    /* background: aquamarine; */
`;

const Footer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    background: #ececec;
`;

const StyledAvatar = styled(Avatar)`
    width: 8rem !important;
    height: 8rem !important;
`;

export const Styles = {
    HomeContainer,
    UserGretings,
    UserButtons,
    UserLogo,
    CurrencyCalculator,
    Footer,
    StyledAvatar,
};
