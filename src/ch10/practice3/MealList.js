import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
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
          desc: '簡單調味的魚排煎的香酥後佐以酸酸辣辣的蕃茄莎莎最是適合，再搭配先煮再煎過的新鮮時蔬！簡單輕鬆的備好美味又均衡的魚排套餐。',
        },
        {
          id: 2,
          name: '鮮蝦河粉',
          price: 280,
          url: 'https://i.imgur.com/WY8DRvv.jpg',
          desc: '選用上等鮮蝦與新鮮魚漿，再搭配時令蔬菜作成美味的內餡，每個都仔細包入香滑柔軟，吃起來滑順沽溜的外皮裡，每口咬',
        },
        {
          id: 3,
          name: '清炒番茄義大利麵',
          price: 180,
          url: 'https://i.imgur.com/KRboztK.jpg',
          desc: '只有電鍋的人也能輕鬆煮的義大利麵料理！ 義大利麵是由小麥粉做成，比起其他麵粉做的麵條來的健康低澱粉，減脂的人吃膩了糙米地瓜也可以來試試看這道簡單的非正統清炒義大利麵',
        },
        {
          id: 4,
          name: '九層塔沙拉',
          price: 120,
          url: 'https://i.imgur.com/Yg1t5sW.jpg',
          desc: '秋天才有的柚子，加入九層塔與葡萄做成爽口沙拉，享受當季食材帶來清香酸甜的滋味~',
        },
        {
          id: 5,
          name: '澳洲牛排佐松露醬',
          price: 450,
          url: 'https://i.imgur.com/uzJbxW5.jpg',
          desc: '一隻牛只有約有四公斤的牛菲力，口感鮮嫩可口，是最高級、昂貴的牛排；油脂含量低、也沒有難嚼的筋肉，搭配清爽的烤蔬菜與松露鵝肝醬，濃郁又迷人的高雅滋味，口齒留香、愛不釋口',
        },
      ],
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      rightTitle: '新增',
      onRight: () => {
        Actions.MealForm({handleAddMeal: this.handleAddMeal, hideTabBar: true});
      },
    });
  }

  handleRedirectMealDetail = id => {
    const {meals} = this.state;
    const meal = meals.find(meal => meal.id === id);

    // 跳轉至餐點詳細頁面時將底部的 Tab 隱藏
    Actions.push('MealDetail', {meal: meal, hideTabBar: true});
  };

  handleAddMeal = meal => {
    this.setState({
      meals: [
        ...this.state.meals,
        {
          id: this.state.meals.length + 1,
          ...meal,
        },
      ],
    });
  };

  render() {
    return (
      <ScrollView style={styles.mealList}>
        {this.state.meals.map(meal => {
          return (
            <MealItem
              key={meal.id}
              meal={meal}
              onPress={this.handleRedirectMealDetail}
            />
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

export default MealList;
