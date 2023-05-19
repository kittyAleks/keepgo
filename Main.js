import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';

const Main = () => {
  return (
    <>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </>
  );
};

export default Main;
