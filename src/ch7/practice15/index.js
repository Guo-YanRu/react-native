import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import MealItem from './MealItem';

class maelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [
        {
          id: 1,
          name: "'嫩煎魚排佐鮮蔬",
          price: 350,
          url: 'https://i.imgur.com/o8cd4Rw.jpg',
          timeRemain: 10,
        },
        {
          id: 2,
          name: '鮮蝦河粉',
          price: 280,
          url: 'https://i.imgur.com/WY8DRvv.jpg',
          timeRemain: 15,
        },
        {
          id: 3,
          name: '清炒番茄義大利麵',
          price: 180,
          url: 'https://i.imgur.com/KRboztK.jpg',
          timeRemain: 3,
        },
        {
          id: 4,
          name: '九層塔沙拉',
          price: 120,
          url: 'https://i.imgur.com/Yg1t5sW.jpg',
          timeRemain: 5,
        },
        {
          id: 5,
          name: '澳洲牛排佐松露醬',
          price: 450,
          url: 'https://i.imgur.com/uzJbxW5.jpg',
          timeRemain: 19,
        },
      ],
    };
  }
  componentDidMount() {
    //針對餐點清單設定每秒倒計時
    const timeId = setInterval(() => {
      this.setState(state => {
        const newMeals = state.meals.map(meal => {
          const timeRemain = meal.timeRemain <= 0 ? 0 : meal.timeRemain - 1;
          return {...meal, timeRemain: timeRemain};
        });
        return {meals: newMeals};
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  handleIncreasePrice = id => {
    this.setState(preState => {
      return {
        meals: preState.meals.map(meal => {
          return id === meal.id ? {...meal, price: meal.price + 10} : meal;
        }),
      };
    });
  };
  render() {
    return (
      <ScrollView>
        {this.state.meals.map(meal => {
          return (
            <MealItem
              key={meal.id}
              meal={meal}
              onPress={() => {
                this.handleIncreasePrice(meal.id);
              }}></MealItem>
          );
        })}
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

export default maelList;
