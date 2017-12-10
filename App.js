import React from 'react';
import { Text,View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//creating a component

const App = (props) => {

  const{ textStyle,viewStyle }=styles;

   return (
     <View>
       <View style={viewStyle}>
       <Header headerText={'Albums'} />
       </View>
       <View>
       <AlbumList pageText={'AlbumList'}/>
       </View>
       <Text style={textStyle}>{props.headerText}</Text>
     </View>

  );
};

const styles={
  viewStyle:{
    backgroundColor:'#a0a0a0',
    justifyContent:'center',
    alignItems:'center',
    height:60,
    paddingTop:15,
    shadowColor:'#000',
    shadowOffset:{ width:0,height:2},
    shadowOpacity:0.2,
    elevation:1
  },
  textStyle: {
  textColor:'#100',
  fontSize:20
  }
};

// rendering it into the device

export default App;
