import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class NumberInput extends React.Component {
  state = { color: 'black' };
  render() {
    return (
      <View style={[styles.text]}>
        <TextInput
          style={[styles.text, { color: this.state.color }]}
          keyboardType="Numeric"
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          onFocus={() => this.setState({ color: 'orange' })}
          onBlur={() => this.setState({ color: 'black' })}
        />
        <Text style={{textAlign: 'right'}}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'right',
    fontSize: 32,
    flex: 2,
  },
});
