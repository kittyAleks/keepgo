import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import ScreenWrapper from '../ScreenWrapper/ScreenWrapper';
import DetailProfile from './DetailProfile';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {receiveUsers} from '../store/actions';
import detailProfile from './DetailProfile';

const userData = [
  {id: '1', name: 'John'},
  {id: '2', name: 'Alice'},
  {id: '3', name: 'Bob'},
  {id: '4', name: 'Charlie'},
  {id: '5', name: 'David'},
];

const MainScreen = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  console.log('uEEsers', users);

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users')
      .then(response => {
        console.log('WWresponse', response);
        const users = response.data.data;
        // Send data to Redux store
        dispatch(receiveUsers(users));
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <ScreenWrapper>
      <FlatList
        data={users}
        renderItem={item => <DetailProfile item={item.item} />}
        keyExtractor={item => item.id.toString()}
      />
    </ScreenWrapper>
  );
};

export default MainScreen;
