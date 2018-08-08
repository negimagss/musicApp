import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

/**const AlbumList = () => {

  return (
     <View>
        <Text>Album List!!! </Text>
     </View>

  );
};


state: a plain JS object used to record and respond to user triggered events.

  */

// using class for making for the class
// class based compoonents have a life saving methods, it is self explanatory abbout itself
  class AlbumList extends Component {
   state = { albums: [] };// simmilar to a constructor
componentWillMount() {
//  debugger;
   // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
   // .then(response => console.log(response));


  axios.get('https://rallycoding.herokuapp.com/api/music_albums')
  .then(response => this.setState({ albums: response.data }));
  // console.log('Works man ');
}

  rernderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetails key={album.title} album={album} />
    ); // will use map
  }
    render() { // react will call render method
     console.log(this.state); // will display the data from the api to the screen
     //with the data from the JSON response
      return (
        <ScrollView>
          {this.rernderAlbums()}
        </ScrollView>

          );
      }
  }


export default AlbumList;
