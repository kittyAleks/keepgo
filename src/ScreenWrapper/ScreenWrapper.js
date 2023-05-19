import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';

function ScreenWrapper({children}) {
  return (
    <SafeAreaView style={styles.wrapperContainer}>
      <View style={styles.wrapper}>{children}</View>
    </SafeAreaView>
  );
}

export default ScreenWrapper;
const styles = StyleSheet.create({
  wrapperContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: 10,
  },
});
