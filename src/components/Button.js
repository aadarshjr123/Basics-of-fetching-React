import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, text }) => (
        <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );

const styles = StyleSheet.create({
    text: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10 
    },
    button: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#007aff',
        marginRight: 5,
        marginLeft: 5,
        borderRadius: 10

    },
});

export default Button;
