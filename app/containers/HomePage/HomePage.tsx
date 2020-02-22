import React from 'react';
import { Styles } from './styles';
import CurrencyCalculator from '../CurrencyCalculator/CurrencyCalculator';
import FooterElement from 'components/FooterElement/FooterElement';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Call from '@material-ui/icons/Call';
import Grid from '@material-ui/core/Grid';

export interface IHomePageProps {
  firstName: string;
  lastName: string;
}

const buttonList = [
  {
    title: 'Look',
    color: 'primary',
    icon: <Call />,
    action: () => {
      console.log('look at that cool guy');
    },
  },
  {
    title: 'You',
    color: 'primary',
    icon: <GitHub />,
    action: () => {
      console.log('Oh man thats brigth');
    },
  },
  {
    title: 'Cool',
    color: 'primary',
    icon: <LinkedIn />,
    action: () => {
      console.log('Dont think about it');
    },
  },
  {
    title: 'Dev',
    color: 'primary',
    icon: <SaveIcon />,
    action: () => {
      console.log('Just get on board!');
    },
  },
];

const contentArray = [
  {
    author: 'Dave',
    title: 'Nunc orci arcu ',
    content: `
          Phasellus efficitur tortor molestie, egestas nulla non, ornare libero. Fusce bibendu.
      `,
    type: 'paragraph',
  },
  {
    author: 'Cris',
    title: 'Eleifend eu ',
    content: `
          gravida lorem. Donec quis urna non orci posuere fringilla. Sed auctor varius viverra.
      `,
    type: 'paragraph',
  },
  {
    author: 'Dan',
    title: 'Auctor magna aliquet ',
    content: `
          Phasellus efficitur tortor molestie, egestas nulla non, ornare libero. Fusce bibendum
      `,
    type: 'paragraph',
  },
  {
    author: 'Eric',
    title: 'Nullam facilisis nulla quis',
    type: 'boxes',
  },
];

const HomePage: React.FC<IHomePageProps> = IHomePageProps => {
  const headerSection = () => {
    const buttonRenderList = Array<any>();
    buttonList.forEach(button => {
      buttonRenderList.push(
        (
        <Button
          variant="contained"
          color="primary"
          endIcon={button.icon}
          onClick={button.action}
        >
          {button.title}
        </Button>
        ),
      );
    });
    return (
      <Styles.UserGretings>
        <Styles.UserLogo>
          <Styles.StyledAvatar
            alt="Remy Sharp"
            src="https://image.freepik.com/free-vector/classic-astronaut-character-with-flat-design_23-2147911112.jpg"
          />
        </Styles.UserLogo>
        <Styles.UserButtons>{buttonRenderList}</Styles.UserButtons>
      </Styles.UserGretings>
    );
  };

  const footerSection = () => {
    return (
      <Styles.Footer>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          {
            contentArray.map((content, key) => (
              <FooterElement
                key={key}
                author={content.author}
                title={content.title}
                content={content.content}
                type={content.type}
              />
            ))
          }
        </Grid>
      </Styles.Footer>
    );
  };

  return (
    <Styles.HomeContainer>
      {headerSection()}
      <Styles.CurrencyCalculator>
        <CurrencyCalculator />
      </Styles.CurrencyCalculator>
      {footerSection()}
    </Styles.HomeContainer>
  );
};

export default HomePage;
