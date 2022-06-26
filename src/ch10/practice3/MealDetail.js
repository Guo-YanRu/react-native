import React from 'react';
import {StyleSheet, Dimensions, Image, View, Text} from 'react-native';

const MealDetail = props => {
  const {meal} = props;

  return (
    <View>
      <Image style={styles.image} source={{uri: meal.url}} />
      <View style={styles.mealContent}>
        <Text style={styles.mealName}>{meal.name}</Text>
        <Text style={styles.mealPrice}>${meal.price}</Text>
        <Text style={styles.mealDesc}>{meal.desc}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mealList: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 2,
  },
  mealContent: {
    marginLeft: 10,
  },
  mealName: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 3,
  },
  mealPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F00',
    paddingBottom: 10,
  },
  mealDesc: {
    fontSize: 14,
    color: 'gray',
  },
});

export default MealDetail;
