import React from 'react';
import { Styles } from './Styles';
import CurrencyCalculator from '../CurrencyCalculator/view';
import Button from '@material-ui/core/Button';

export interface IHomePageProps {
  firstName: string;
  lastName: string;
}

const HomePage: React.FC<IHomePageProps> = IHomePageProps => {
  return (
    <Styles.HomeContainer>
      <Styles.UserGretings>
        <Styles.UserLogo>
          <img
            src="https://www.shutterstock.com/es/search/insta+icon?page=3"
            width="120px"
            height="120px"
          />
        </Styles.UserLogo>
        <Styles.UserButtons>
          <button>hi</button>
          <button>ho</button>
          <button>hu</button>
          <button>ha</button>
        </Styles.UserButtons>
      </Styles.UserGretings>
      <Styles.CurrencyCalculator>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <h1>!</h1>
        <CurrencyCalculator>
            
        </CurrencyCalculator>
      </Styles.CurrencyCalculator>
      <Styles.Footer>
        <h1>!</h1>
      </Styles.Footer>
    </Styles.HomeContainer>
  );
};

export default HomePage;
