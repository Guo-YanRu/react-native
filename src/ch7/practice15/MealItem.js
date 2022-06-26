import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';

const MealItem = props => {
  const remainText =
    props.meal.timeRemain <= 0
      ? '已超過訂購時間'
      : '剩餘' + props.meal.timeRemain + '秒、請搶購';

  return (
    <View style={styles.mealItem}>
      <Image source={{uri: props.meal.url}} style={styles.image} />
      <View style={styles.mealContent}>
        <Text style={styles.mealName}>{props.meal.name}</Text>
        <Text style={styles.mealPrice}>${props.meal.price}</Text>
        <Button
          title={remainText}
          disabled={props.meal.timeRemain <= 0 ? true : false}
          onPress={props.onPress}></Button>
      </View>
    </View>
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
