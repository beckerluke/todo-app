import React, {Component} from 'react';
import { StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

export default class TodoItem extends Component {
    constructor (props) {
        super(props);
    }


    render() {
        const todoItem = this.props.todoItem;
        return(
            <TouchableOpacity 
                style={styles.todoItem}
                onPress={() => this.props.toggleDone()}
            >
                <Text style={(todoItem.done) ? {color: '#7d8a81'} : {color: '#070708'} }>
                    {todoItem.task}
                </Text>
                <Button 
                    title="Delete"
                    color={(todoItem.done) ? '#d60d0d' : '#070708'}
                />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    todoItem: {
        width: '100%',
        height: 50,
        borderBottomColor: '#DDD',
        borderBottomWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})