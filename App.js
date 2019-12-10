import React, {Component} from 'react';
import { Platform, StyleSheet, Text, FlatList, View } from 'react-native';
import Header from './components/Header';
import InputBar from './components/InputBar';
import TodoItem from './components/TodoItem';

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

  // toggles the color when todo item in list is clicked
  toggleDone(item) {
    console.log(`This is the ITEM: ${item}`);
    
    const todos = this.state.todos.map((todo) => {
      if (todo.id === item.id) {
        todo.done = !todo.done;
      }
      return todo;
    });

    this.setState({
      todos,
    })
  }
  // fires off when 'ADD' is clicked
  addNewTodo() {
    // let todos = this.state.todos;

    this.state.todos.unshift({
      id: this.state.todos.length + 1,
      task: this.state.todoInput,
      done: false,
    });
    
    this.setState({
      ...this.state.todos,
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
          textChange={todoInput => this.setState({todoInput})}
          addNewTodo={() => this.addNewTodo()}
          todoInput={this.state.todoInput}
        />
        
        {/*passing todos array */}
        <FlatList 
          data={this.state.todos}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <TodoItem 
                todoItem={item}
                toggleDone={() => this.toggleDone(item)}
              />
            )
          }}
        />
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
