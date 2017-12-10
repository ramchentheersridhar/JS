import React from 'react';
import { Text,View } from 'react-native';

//creating a component

const Header = (props) => {

  const{ textStyle,viewStyle }=styles;

   return (
    <View>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>

  );
};

const styles={
  // viewStyle:{
  //   backgroundColor:'#f8F8Fa',
  //   justifyContent:'center',
  //   alignItems:'center',
  //   height:60,
  //   paddingTop:15,
  //   shadowColor:'#000',
  //   shadowOffset:{ width:0,height:2},
  //   shadowOpacity:0.2,
  //   elevation:1,
  //   position:'relative'
  // },
  textStyle: {
  fontColor:'#100',
  fontSize:20
  }
};

export default Header;
