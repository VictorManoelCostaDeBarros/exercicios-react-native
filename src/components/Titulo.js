import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default (props) => {
    return (
        <>
            <Text style={Estilo.text}>{props.principal}</Text>
            <Text>{props.segundario}</Text>
        </>

    )
}