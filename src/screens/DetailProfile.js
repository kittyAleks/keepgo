import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ScreenWrapper from '../ScreenWrapper/ScreenWrapper';

const DetailProfile = ({route}) => {
  const {item} = route.params;
  console.log('EWSitem', item);
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Image
          source={{uri: item.avatar}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <View>
          <Text style={{fontWeight: 600, fontSize: 16}}>
            {item.first_name} {item.last_name}
          </Text>
        </View>

        <Text>{item.email}</Text>
      </View>
    </ScreenWrapper>
  );
};

export default DetailProfile;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingVertical: 20,
  },
});
