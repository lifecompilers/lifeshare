import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen'
import IndexComponent from './src/index';
import theme from './src/theme';

const App = () => {
  SplashScreen.hide();
  return (
    <ThemeProvider theme={theme}>
      <IndexComponent></IndexComponent>
    </ThemeProvider>
  );
};
export default App;
