import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const UsersList = ({item}) => {
  const navigation = useNavigation();
  const {avatar, first_name} = item;
  const imageSourceUri =
    avatar ??
    'https://e7.pngegg.com/pngimages/472/36/png-clipart-puppy-pet-dog-lazy-dog.png';

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('DetailProfile', {item})}>
      <Image
        source={{uri: imageSourceUri}}
        style={{width: 50, height: 50, borderRadius: 25}}
      />
      <View style={{paddingLeft: 10}}>
        <Text>{first_name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UsersList;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
});
