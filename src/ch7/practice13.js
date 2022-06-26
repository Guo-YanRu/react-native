import React from 'react';
import {View, Button} from 'react-native';

class Practice13 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [
        {
          id: 1,
          name: 'A meal',
          btnColor: 'red',
        },
        {id: 2, name: 'B meal', btnColor: 'green'},
        {id: 3, name: 'C meal', btnColor: 'blue'},
      ],
    };
  }
  //使用者點選餐點後的 callback事件，此方法接收一個 meal 的 id
  handlePress = mealId => {
    alert(mealId);
  };
  render() {
    return (
      <View>
        {this.state.meals.map(meal => (
          <View key={meal.id}>
            <Button
              title={meal.name}
              onPress={() => {
                this.handlePress(meal.id);
              }}></Button>
          </View>
        ))}
      </View>
    );
  }
}
export default Practice13;
