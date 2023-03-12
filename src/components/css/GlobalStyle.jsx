import { createGlobalStyle, withTheme } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.palette.background.default};
    margin: 0;
    padding: 0;
  }
`;

export default withTheme(GlobalStyle);
