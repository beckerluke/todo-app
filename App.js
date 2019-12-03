import React, {Component} from 'react';
import { Platform, StyleSheet, Text, FlatList, View } from 'react-native';
import Header from './components/Header';
import InputBar from './components/InputBar';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      todoInput: '',
      todos: [ 
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

  addNewTodo() {
    let todos = this.state.todos;

    todos.unshift({
      id: todos.length + 1,
      task: this.state.todoInput,
      done: false,
    });
    
    this.setState({
      todos,
      // reset todoInput once button is clicked
      todoInput: '',
    }, () => {console.log(this.state)} );
  }

  render() {
    // if platform is ios, use statusbar styles
    const statusbar = (Platform.OS == 'ios') ?
      <View style={styles.statusbar}></View> : <View></View>;
     

    
    return (
      <View style={styles.container}>
        {statusbar}
        <Header title='Todo List'/>
        <InputBar 
          textChange={(todoInput) => this.setState({todoInput})}
          addNewTodo={() => this.addNewTodo()}
        />
        
        {/*passing todos array */}
        <FlatList 
          data={this.state.todos}
          keyExtractor={(item, index) => {index.toString()}}
          renderItem={(item, index) => {
            return (
              <TodoItem />
            )
          }}
          >
        </FlatList>
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
