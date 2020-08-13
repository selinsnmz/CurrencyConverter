import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import axios from 'axios';

class Converter extends Component{
    constructor(props){
        super(props);
        this.state={
            input: '',
            tl: '',
            usd: '',
            cad: '',
            jpy: '',
            eur: '',
            rates: []
        }
        this.getRates = this.getRates.bind(this);
    }
    getRates(){
        axios.get('http://data.fixer.io/api/latest?access_key=d70401cab0af8d800c78ab595a9c514e&symbols=EUR,TRY,USD,CAD,JPY&format=1')
        .then(response => {
            console.log(response);
            const rates = response.data.rates;
            this.setState ({
                rates: rates
            })
        })
    }

    componentDidMount(){
        this.getRates(); 
    }

    render(){
        const {converterWrapper, inputStyle, textStyle} = styles;
        const {input, tl, usd, cad, jpy, eur, rates} = this.state;
        return(
            <View style={converterWrapper}>
                <TextInput placeholder='Enter EUR Value'
                           style={inputStyle}
                           keyboardType='numeric'
                           onChangeText={(text) => {
                               const i = parseFloat(text) || 0;
                               this.setState({
                                   input: text,
                                   tl: (i * rates['TRY']).toFixed(4),
                                   usd: (i * rates['USD']).toFixed(4),
                                   cad: (i * rates['CAD']).toFixed(4),
                                   jpy: (i * rates['JPY']).toFixed(4),
                                   eur: (i * rates['EUR']).toFixed(4)
                               });
                           }}
                           value={`${input}`}
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