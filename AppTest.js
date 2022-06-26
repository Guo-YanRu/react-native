import React from 'react';
import {View, Text} from 'react-native';

const AppTest = () => {
  const lastName = '987654321';
  debugger;
  return (
    <View>
      <Text style={{backgroundcolor: 'red'}}> Hello,{lastName}</Text>
      <AppTest name={'YanRu'} route="/abc" color="green" />
    </View>
  );
};

export default AppTest;
