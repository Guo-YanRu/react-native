import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const meals = [
  {
    id: 1,
    name: '嫩煎魚排佐鮮蔬',
    price: 350,
    url: 'https://i.imgur.com/o8cd4Rw.jpg',
  },
  {id: 2, name: '鮮蝦河粉', price: 280, url: 'https://i.imgur.com/WY8DRvv.jpg'},
  {
    id: 3,
    name: '清炒番茄義大利麵',
    price: 180,
    url: 'https://i.imgur.com/KRboztK.jpg',
  },
  {
    id: 4,
    name: '九層塔沙拉',
    price: 120,
    url: 'https://i.imgur.com/Yg1t5sW.jpg',
  },
];

function MealItem(props) {
  return (
    <View style={styles.mealItem}>
      <Image style={styles.image} source={{uri: props.meal.url}} />
      <View style={styles.mealContent}>
        <Text style={styles.mealName}>{props.meal.name}</Text>
        <Text style={styles.mealPrice}>${props.meal.price}</Text>
      </View>
    </View>
  );
}

function MealList(props) {
  const meals = props.meals.map(meal => {
    return <MealItem key={meal.id} meal={meal} />;
  });
  return <View style={styles.mealList}>{meals}</View>;
}

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
    textAlign: 'center',
    paddingVertical: 3, // 文字上下留白
  },
  mealPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F00',
  },
});

export default () => <MealList meals={meals} />;
