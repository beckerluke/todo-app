import React, {Component} from 'react';
import { StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

export default class TodoItem extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        const todoItem = this.props.todoItem;
        return(
            <TouchableOpacity style={StyleSheet.todoItem}>
                <Text style={(todoItem.done) ? {color: '#7d8a81'} : {color: '#070708'} }>
                    {todoItem.task}
                </Text>
            </TouchableOpacity>
        )
    }
}