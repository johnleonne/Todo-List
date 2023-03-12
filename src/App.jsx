import React, { useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import TodoList from './pages/TodoList';
import GlobalStyle from './components/css/GlobalStyle';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () => createTheme({
      palette: {
        mode: prefersDarkMode ? 'dark' : 'light',
        background: {
          default: prefersDarkMode ? '#424242' : '#e8e8e8',
        },
      },
    }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle theme={ theme } />
      <TodoList />
    </ThemeProvider>
  );
}

export default App;
