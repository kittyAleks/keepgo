import React, {useEffect, useCallback, useMemo, useState} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import ScreenWrapper from '../ScreenWrapper/ScreenWrapper';
import {useDispatch, useSelector} from 'react-redux';
import {receiveUsers} from '../store/actions';
import UsersList from '../components/UsersList';
import {fetchUsers} from '../services/api';
import axios from 'axios';

const MainScreen = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector(state => state.users);
  const [refreshing, setRefreshing] = useState(false);
  const memoizedUsers = useMemo(() => allUsers, [allUsers]);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await axios.get('https://reqres.in/api/users');
      if (response && response.data) {
        const users = response.data.data;
        return users;
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true); // set isRefreshing state to true
    const users = await fetchUsers();
    dispatch(receiveUsers(users));
    setRefreshing(false); // set isRefreshing state back to false
  }, [dispatch]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <ScreenWrapper>
      <FlatList
        data={memoizedUsers}
        renderItem={({item}) => <UsersList item={item} />}
        keyExtractor={item => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </ScreenWrapper>
  );
};

export default MainScreen;
