import React from 'react';
import {View, Text} from 'react-native';

class practice2 extends React.Component {
  render() {
    return (
      /*
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'red'}} />
        <View style={{flex: 2, backgroundColor: 'yellow'}} />
        <View style={{flex: 3, backgroundColor: 'blue'}} />
      </View>
       
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'yellow'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'blue'}} />
      </View>
      */
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{width: 300, height: 70, backgroundColor: 'red'}} />
        <View style={{width: 300, height: 70, backgroundColor: 'white'}} />
        <View style={{width: 300, height: 70, backgroundColor: 'blue'}} />
      </View>
    );
  }
}
export default practice2;
