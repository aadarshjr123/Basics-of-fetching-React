import React from 'react';
import { View, Image, Text, StyleSheet, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({ data }) => {
    // eslint-disable-next-line camelcase
    const { title, artist, thumbnail_image, image, url } = data;
    //console.log(props.data);
      
  
    return (
       
        <Card>
            <CardSection >
            <View style={styles.view1}>
               
            <Image style={styles.thumbnailimage} source={{ uri: thumbnail_image }} />   
            </View>    
            <View style={styles.view2}>
            <Text style={styles.style}>{title} </Text>
            <Text style={styles.style1}>{artist}</Text>
            </View>
            </CardSection>
            <CardSection>
                <Image style={styles.imageAlbum} source={{ uri: image }} />
            </CardSection>
            <CardSection>
                        <Button onPress={() => Linking.openURL(url)} text="Click & Buy " />
            </CardSection>
         
        </Card>
    );
};


const styles = StyleSheet.create({
    style: {
       
        fontSize: 30,
                
    },
    style1: {
       
         fontSize: 20,
                
    },
    view1: {
        
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    thumbnailimage: {
        height: 80,
        width: 80,
        borderRadius: 19
    },
    view2: {
        paddingLeft: 30,
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    imageAlbum: {
        height: 300,
        flex: 1,
        width: null
        
    },
    

});

export default AlbumDetails;
