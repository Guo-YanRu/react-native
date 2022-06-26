import React from 'react';
import {StyleSheet, TouchableOpacity, Image, View, Text} from 'react-native';

const MealItem = props => {
  const {meal, onPress} = props;

  return (
    <TouchableOpacity onPress={() => onPress(meal.id)} style={styles.mealItem}>
      <Image style={styles.image} source={{uri: meal.url}} />
      <View style={styles.mealContent}>
        <Text style={styles.mealName}>{meal.name}</Text>
        <Text style={styles.mealPrice}>${meal.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mealList: {
    flex: 1,
  },
  mealItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  mealContent: {
    marginLeft: 10,
  },
  mealName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingVertical: 3,
  },
  mealPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F00',
    paddingBottom: 10,
  },
});

export default MealItem;
