import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen'
import IndexComponent from './src/index';

const App = () => {
  SplashScreen.hide();
  return (
    <ThemeProvider>
      <IndexComponent></IndexComponent>
    </ThemeProvider>
  );
};
export default App;
