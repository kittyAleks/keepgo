import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const DetailProfile = ({item, index}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
      }}>
      <Image
        source={{
          uri: item.avatar,
        }}
        style={{width: 50, height: 50, borderRadius: 25}}
      />
      <View style={{paddingLeft: 10}}>
        <Text>{item.first_name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DetailProfile;
