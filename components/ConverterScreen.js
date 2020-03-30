import React from 'react';
import { Text, View, TextInput, StyleSheet, Picker } from 'react-native';

import NumberInput from './NumberInput';

export default class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.units = this.props.route.params.units;

    this.unitsTitle = this.units.map(units => units.title);

    this.state = {
      value1: 0,
      value2: 0,
      unitFrom: this.units[0],
      unitTo: this.units[1],
      titleFrom: this.unitsTitle[0],
      titleTo: this.unitsTitle[1]
    };
  }

  convertValue1ToValue2 = number => {
    let k = this.state.unitTo.id;
    this.setState({ value1: number, value2: number * this.state.unitFrom[k] });
  };

  convertValue2ToValue1 = number => {
    let k = this.state.unitFrom.id;
    this.setState({ value2: number, value1: number * this.state.unitTo[k] });
  };

  onValue1Change = (itemTitle, itemIndex) => {
    this.state.unitFrom = this.units[itemIndex];
    let k = this.state.unitTo.id;
    this.setState({
      titleFrom: itemTitle, 
      unitFrom: this.units[itemIndex],
      value2: this.state.value1 * this.state.unitFrom[k],
    });
  };

  onValue2Change = (itemTitle, itemIndex) => {
    this.state.unitTo = this.units[itemIndex];
    let k = this.state.unitTo.id;
    this.setState({
      titleTo: itemTitle, 
      unitTo: this.units[itemIndex],
      value2: this.state.value1 * this.state.unitFrom[k],
    });
  };

  render() {
    return (
      <View style={[styles.container, styles.text]}>
        <View style={styles.select}>
          <Picker
            style={{ height: 70, flex: 1.5 }}
            selectedValue={this.state.titleFrom}
            onValueChange={this.onValue1Change}>
            {this.unitsTitle.map(title => (
              <Picker.Item label={title} value={title} />
            ))}
          </Picker>
          <NumberInput
            onChangeText={this.convertValue1ToValue2}
            value={this.state.value1.toString().length>8?this.state.value1.toString().slice(0,8):this.state.value1.toString()}
            title={this.state.unitFrom.title}
          />
        </View>
        <View style={styles.select}>
          <Picker
            selectedValue={this.state.titleTo}
            style={{ height: 70, flex: 1.5 }}
            onValueChange={this.onValue2Change}>
            {this.unitsTitle.map(title => (
              <Picker.Item label={title} value={title} />
            ))}
          </Picker>
          <NumberInput
            value={this.state.value2.toString().length>8?this.state.value2.toString().slice(0,8):this.state.value2.toString()}
            onChangeText={this.convertValue2ToValue1}
            title={this.state.unitTo.title}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    //alignContent: 'flex-end',
    backgroundColor: '#ecf0f1',
    //padding: 25,
  },
  text: {
    textAlign: 'right',
    fontSize: 24,
  },
  select: {
    flexDirection: 'row',
  },
});