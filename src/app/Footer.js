import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Footer = props => (
  <View style={styles.content}>
    <Text style={styles.copyright}>Copyright © 2021 • {props.studentName}</Text>
  </View>
);

Footer.defaultProps = {
  studentName: '王小明',
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    marginTop: 5,
  },
  copyright: {
    fontSize: 14,
    paddingVertical: 3,
  },
});

export default Footer;
