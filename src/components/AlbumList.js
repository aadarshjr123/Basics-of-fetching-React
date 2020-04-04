import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetail';
 
class AlbumList extends Component {
    // eslint-disable-next-line no-undef
    state = { albums: [] };

    componentWillMount() {
        //console.log('component will mount');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
          <AlbumDetails key={album.title} data={album} />
         );
    }

    render() {
        //console.log(this.state);
        return (
            <ScrollView>
                <Text style={styles.text}>Album List</Text>
                {this.renderAlbums()}
            </ScrollView>
        ); 
     }
}
    

const styles = StyleSheet.create({

    text: {
            
            fontSize: 20,
            paddingHorizontal: 130,
            letterSpacing: 10,
            top: 10,
            left: 10
        },
    
});

export default AlbumList;
