import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Main from './stacks/Main';
import UserContextProvider from './contexts/userContext'
const App = () =>{
  return (
    <UserContextProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </UserContextProvider>
  );
}
export default App;