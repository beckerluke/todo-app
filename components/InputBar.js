import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

const InputBar = props => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input}></TextInput>
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset: {width: 0, height: 3},
        shadowColor: '#171717',
        shadowOpacity: .4
    },
    input: {
        backgroundColor: '#F3F3F3',
        flex: 1,
        fontSize: 20,
        height: 35
    },
    addButton: {
        width: 100,
        backgroundColor: '#80eb34',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addButtonText: {
        color: '#171717',
        fontSize: 20,
        fontWeight: '700'
    }
});

export default InputBar;