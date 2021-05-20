import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilo'

export default (porps) => {
    console.warn(porps)
    return (
        <Text style={Estilo.text}>
            O valor {porps.max} é maior que o valor {porps.min}
        </Text>
    )
}