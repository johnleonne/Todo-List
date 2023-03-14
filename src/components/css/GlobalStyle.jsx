import { createGlobalStyle, withTheme } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.palette.background.default};
    margin: 0;
    padding: 0;
  }

  @media only screen and (max-width: 600px) {

    .todo-list-container {
      max-width: 85%;
      zoom: 0.7;

    }
  }

  @media only screen and (min-width: 1200px) {
    .icon-list-item-container {
      max-width: 90px;
    }
  }
`;

export default withTheme(GlobalStyle);
