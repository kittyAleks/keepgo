import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import ScreenWrapper from '../ScreenWrapper/ScreenWrapper';
import DetailProfile from './DetailProfile';
import axios from 'axios';

const userData = [
  {id: '1', name: 'John'},
  {id: '2', name: 'Alice'},
  {id: '3', name: 'Bob'},
  {id: '4', name: 'Charlie'},
  {id: '5', name: 'David'},
];

const MainScreen = () => {
  useEffect(() => {
    axios
      .get('https://randomuser.me/api/')
      .then(response => {
        // handle the response data here
        console.log('WWWWWresponse', response.data);
      })
      .catch(error => {
        // handle any errors here
        console.error(error);
      });
  }, []);

  return (
    <ScreenWrapper>
      <Text>Main Screen</Text>
      <FlatList
        data={userData}
        renderItem={DetailProfile}
        keyExtractor={item => item.id}
      />
    </ScreenWrapper>
  );
};

export default MainScreen;
