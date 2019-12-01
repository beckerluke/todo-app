import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      todoInput: '',
      todo: [ 
        {
          id: 0,
          task: 'Fix TV',
          done: false,
        },
        {
          id: 1,
          task:'Cook some chili',
          done: false,
        }
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusbar}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusbar: {
    backgroundColor: '#80eb34',
    height: 40
  }
});
