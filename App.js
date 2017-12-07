import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient, BlurView, GLView } from 'expo';

let colors = ['#9c44f2', '#726ef8', '#4fcef9'];



export default class App extends React.Component {
  _onPressButton() {
    alert("Tapped Button")
  }

  _animate() {
    let pos = 0;
    let id = setInterval(frame, 5)
    function frame() {
      if (pos === 400) {
        clearInterval(this)
      } else {
        pos++;
        styles.button.top = `${pos}px`
      }
    }
  }


  render() {
    return (
      <LinearGradient
      colors={colors}
      style={styles.container}
      >
        <Button className="button" style={styles.button} title={"YO"} onPress={this._animate.bind(this)}></Button>
      </LinearGradient>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  button: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
    position: 'absolute'
  }
});
