import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

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
    // if platform is ios, use statusbar styles
    const statusbar = (Platform.OS == 'ios') ?
      <View style={styles.statusbar}></View> : <View></View>;
     

    
    return (
      <View style={styles.container}>
        {statusbar}
        <Header />
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
