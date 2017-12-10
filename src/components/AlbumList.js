import React, { Component } from 'react';
import {Text,View} from  'react-native';
import axios from 'axios';

class AlbumList extends Component{

componentWillMount(){
  // console.log('componentWillMount in AlbumList');
  axios.get('https://rallycoding.herokuapp.com/api/music_albums')
  .then( response => console.log(response));
}

 render(){
  return (
   <View>
     <Text>AlbumList!!</Text>
   </View>
  );
 }
};

export default AlbumList;
//axios installing by using npm -npm install --save axios
