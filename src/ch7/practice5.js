import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';

const MealItem = props => {
  return (
    <View style={styles.mealItem}>
      <Image style={styles.image} source={{uri: props.meal.url}}></Image>
      <View style={styles.mealContent}>
        <Text style={styles.mealName}>{props.meal.name}</Text>
        <Text style={styles.mealPrice}>{props.meal.price}</Text>
      </View>
    </View>
  );
};

class practice5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [
        {
          id: 1,
          name: '嫩煎魚排佐鮮蔬',
          price: 350,
          url: 'https://i.imgur.com/o8cd4Rw.jpg',
        },
        {
          id: 2,
          name: '鮮蝦河粉',
          price: 280,
          url: 'https://i.imgur.com/WY8DRvv.jpg',
        },
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
        {
          id: 5,
          name: '澳洲牛排佐松露醬',
          price: 450,
          url: 'https://i.imgur.com/uzJbxW5.jpg',
        },
        {
          id: 6,
          name: '原塊牛排',
          price: 350,
          url: 'https://i.imgur.com/jo89Vhe.jpg',
        },
        {
          id: 7,
          name: '香煎鴨胸拼盤',
          price: 530,
          url: 'https://i.imgur.com/aQWNuYN.jpg',
        },
        {
          id: 8,
          name: '時蔬厚切燉牛排',
          price: 550,
          url: 'https://i.imgur.com/RTWrpei.jpg',
        },
        {
          id: 9,
          name: '義式丁骨豬排',
          price: 420,
          url: 'https://i.imgur.com/HsKpUrA.jpg',
        },
        {
          id: 10,
          name: '肩胛菲力牛排',
          price: 650,
          url: 'https://i.imgur.com/V9QOyLl.jpg',
        },
        {
          id: 11,
          name: '韓式海鮮酸辣麵',
          price: 240,
          url: 'https://i.imgur.com/VzoAvHU.jpg',
        },
      ],
    };
  }
  render() {
    return (
      <ScrollView style={styles.mealList}>
        {this.state.meals.map(
          (
            meal, //.map => ( (meal) => (要用括號) )
          ) => (
            <MealItem key={meal.id} meal={meal} />
          ),
        )}
      </ScrollView>
    );
  }
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
    paddingVertical: 3,
  },
  mealPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F00',
  },
});

export default practice5;
