import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_700Bold, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto'
import { Loading } from './src/components/Loading';
import theme from './src/theme';
import { TabRoutes } from './src/routes/tab.routes';

export default function App() {

  const [ fontsLoaded ] = useFonts({Roboto_700Bold, Roboto_500Medium, Roboto_400Regular})

  return (
    <ThemeProvider theme={theme}>
      { 
      fontsLoaded ? 
        <NavigationContainer>
          <TabRoutes/>
        </NavigationContainer>
        : <Loading background={''} loadColor={''}/>  
      }

    </ThemeProvider>
  );
}


