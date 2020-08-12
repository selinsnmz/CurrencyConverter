import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component{
    render(){
        const { header, headerText } = styles; // easier use for style
        return(
            <View style={header}>
              <Text style={headerText}>Currency Converter</Text>
            </View>
        )
    }
}
export default Header;

const styles = StyleSheet.create({
    header:{
        // flex: 1,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C0C0C0'
      },
      headerText:{
        fontSize: 25,
        color: '#75589B',
        textAlign: 'center'
      }
});