import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';

const Box = props => {
  return (
    <View style={styles.boxContainer}>
      <Text style={styles.boxTitleText}>I am Box {props.type}</Text>
      <View style={styles.hr}>
        {props.items.map(item => (
          <TouchableOpacity
            style={styles.touchItem}
            key={item.id}
            onPress={() => props.onPress(item.id, item.type)}>
            <Text style={styles.boxTitleText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  boxContainer: {
    borderWidth: 2,
    borderColor: '#3366FF',
    padding: 10, //內距
    margin: 10, //外距
  },
  boxTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  hr: {
    borderBottomColor: '#C0C0C0',
    borderBottomWidth: 1,
    padding: 10,
  },
  touchItem: {
    padding: 10,
  },
  touchItemText: {
    fontSize: 16,
  },
});
export default Box;
