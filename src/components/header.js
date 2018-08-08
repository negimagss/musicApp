//import libraries for making componets
import React from 'react';
import { Text, View } from 'react-native';


// make a components
const Header = (props) => {
  // use destructring to yse the styles
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

//  make components avalble for the app
// styling with react

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
// shadow propert will give a clor
   shadowColor: '#000',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 10,
   elevation: 2,
   position: 'relative'

  },
  textStyle: {
    fontSize: 20 // use camel case in place of dash
  }

// to centre we have to use view tab
};

export default Header;
