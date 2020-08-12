import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Header from './header';
import Converter from './converter';

export default class App extends Component{
  render(){
    return(
      <View style={styles.contanier}>
        <Header/>
        <Converter/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contanier:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F3F3F3'
  },
  Text:{
    color: 'red'
  }
});
