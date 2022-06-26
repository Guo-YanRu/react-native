import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import MealItem from './MealItem';

class MealList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [
        {
          id: 1,
          name: '嫩煎魚排佐鮮蔬',
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
    //針對餐點清單設定每秒倒數計時
    this.timeId = setInterval(() => {
      this.setState(state => {
        /*取出每個餐點的剩餘秒數，當尚未倒數至0時，秒數-1
              最後回傳一個新的餐點清單陣列資料*/
        const newMeals = state.meals.map(meal => {
          const timeRemain = meal.timeRemain <= 0 ? 0 : meal.timeRemain - 1;
          return {...meal, timeRemain: timeRemain};
        });
        //將新的餐點清單陣列資料進行 setstate 重新觸發資料渲染
        return {meals: newMeals};
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  render() {
    return (
      <ScrollView>
        {this.state.meals.map(meal => {
          return <MealItem key={meal.id} meal={meal}></MealItem>;
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  MealList: {
    flex: 1,
  },
  mealItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
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
    paddingVertical: 10,
  },
  mealPrace: {
    color: '#F00',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default MealList;
