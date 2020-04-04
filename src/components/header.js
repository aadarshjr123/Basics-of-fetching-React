import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const Header = (props) => (
        <View style={styles.viewStyle}>
        <Text style={styles.text}>{props.headerText}</Text>
        </View>
    );

const styles = StyleSheet.create({
    viewStyle: {
        justifyContent: 'center',
            alignItems: 'center',
            height: 60,
            paddingTop: 15,
            shadowOffset: { width: 0.5, height: 0.5 }, 
            shadowRadius: 3,
            shadowColor: '#a9d4a1',       
       
    },

    text: {
    
         paddingTop: 25,
         paddingBottom: 25,
         paddingHorizontal: 185,
         top: 5,
         fontSize: 26,
         fontWeight: 'bold',
         textShadowColor: '#a9d4a1', 
         textShadowOffset: { width: 0.5, height: 0.5 }, 
         textShadowRadius: 3,
         letterSpacing: 1
     }
});


export default Header;
