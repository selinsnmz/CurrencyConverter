import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

class Converter extends Component{
    constructor(props){
        super(props);
        this.state={
            input: '',
            tl: '',
            usd: '',
            cad: '',
            jpy: '',
            eur: ''
        }
    }

    render(){
        const {converterWrapper, inputStyle, textStyle} = styles;
        const {input, tl, usd, cad, jpy, eur} = this.state;
        return(
            <View style={converterWrapper}>
                <TextInput placeholder='Enter EUR Value'
                           style={inputStyle}
                           onChangeText={(text) => {
                               this.setState({
                                   input: text
                               })
                           }}
                           value={input}
                />
                <Text style={textStyle}>TRY: {tl}</Text>
                <Text style={textStyle}>USD: {usd}</Text>
                <Text style={textStyle}>CAD: {cad}</Text>
                <Text style={textStyle}>JPY: {jpy}</Text>
                <Text style={textStyle}>EUR: {eur}</Text>
            </View>
        )
    }
}
export default Converter;

const styles = StyleSheet.create({
    converterWrapper:{
        paddingTop: 30,
        // paddingLeft: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputStyle:{
        // paddingLeft: 60,
        width: 200,
        height: 40
    },
    textStyle:{
        width: 170,
        height: 50,
        // paddingTop: 5,

    }
});