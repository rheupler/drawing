import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient, BlurView, GLView } from 'expo';

export default class App extends React.Component {
  _onPressButton() {
    alert("Tapped Button")
  }

  render() {
    return (
      <LinearGradient
      colors={['#9c44f9', '#726ef8', '#4fcef9']}
      style={styles.container}
      >

      

      </LinearGradient>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
