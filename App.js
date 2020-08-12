import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component{
  render(){
    return(
      <View style={styles.contanier}>
        <Text style={styles.Text}>Hello React</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contanier:{
    
  },
  Text:{
    color: 'red'
  }
})
