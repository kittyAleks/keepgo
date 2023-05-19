import React from 'react';
import {View, Text, Image} from 'react-native';

const DetailProfile = ({item}) => {
  return (
    <View style={{flexDirection: 'row', padding: 10}}>
      {/*<Image*/}
      {/*  source={item.avatar}*/}
      {/*  style={{width: 50, height: 50, borderRadius: 25}}*/}
      {/*/>*/}
      <View style={{paddingLeft: 10}}>
        <Text>{item.name}</Text>
      </View>
    </View>
  );
};

export default DetailProfile;
