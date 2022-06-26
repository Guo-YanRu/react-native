import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import memberImg from './images/member.png';
import controlImg from './images/control.png';

const Header = () => (
  <View style={styles.content}>
    <Image source={memberImg} style={styles.icon} />
    <Picker mode="dropdown" style={styles.arrow}>
      <Picker.Item label="C108156124@nkust.edu.tw" value="Email" />
      <Picker.Item label="新增帳戶 +" value="addEmail" />
    </Picker>
    <Text style={styles.text}>控制台 </Text>
    <Image source={controlImg} style={styles.icon} />
  </View>
);

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 25,
  },
  icon: {
    width: 30,
    height: 30,
  },
  text: {
    color: '#0066CC',
    fontSize: 35,
    fontWeight: '600',
    paddingLeft: 10,
  },
  arrow: {
    marginLeft: 5,
    marginTop: 1,
    width: 30,
    height: 30,
    borderStyle: 'solid',
    borderWidth: 20,
    borderTopColor: '#0066CC', //下箭头颜色
    borderLeftColor: '#fff', //右箭头颜色
    borderBottomColor: '#fff', //上箭头颜色
    borderRightColor: '#fff', //左箭头颜色
  },
});

export default Header;
