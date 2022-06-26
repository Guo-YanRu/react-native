import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

/**
 * 請勿異動此檔案的程式碼
 */
const Footer = props => (
  <View style={styles.content}>
    <Text style={styles.copyright}>
      Copyright © 2021 • {props.studentId} - {props.studentName}
    </Text>
  </View>
);

Footer.defaultProps = {
  studentId: '10XXXXXXXX',
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
