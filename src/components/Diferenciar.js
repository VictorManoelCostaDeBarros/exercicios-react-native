import React from 'react'
import { Platform, Text } from 'react-native'
import Estilo from './estilo'

export default (props) => {
    if(Platform.OS === 'android'){
        return <Text style={Estilo.text}>Android</Text>
    }else if(Plataform.OS === 'ios'){
        return <Text style={Estilo.text}>IPhone</Text>
    }else{
        return <Text style={Estilo.text}>WEB</Text>
    }
}