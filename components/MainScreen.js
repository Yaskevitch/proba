import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';

import { lengthUnits, timeUnits } from '../src/units';

const MainScreen = ({ navigation }) => (
  <View style={styles.container}>
      <TouchableOpacity
      style={styles.buttons}
        onPress={() => {
          navigation.navigate('Convert', {
            name: 'Конвертер довжини',
            units: lengthUnits,
          });
        }}>
        <Image source={{uri: 'http://icons.iconarchive.com/icons/icons8/ios7/48/Science-Length-icon.png'}} style={{width: 40, height: 40}} />
        <Text style={styles.paragraph}>Довжина</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.buttons}
        onPress={() => {
          navigation.navigate('Convert', {
            name: 'Конвертер часу',
            units: timeUnits,
          });
        }}>
        <Image source={{uri: 'http://icons.iconarchive.com/icons/designbolts/seo/48/Time-Management-icon.png'}} style={{width: 40, height: 40}} />
        <Text style={styles.paragraph}>Час</Text>
      </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  logo: {
    alignItems: 'center',
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttons: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
});

export default MainScreen;
