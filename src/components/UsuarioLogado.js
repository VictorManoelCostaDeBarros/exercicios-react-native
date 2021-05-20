import React from 'react'
import { View, Text } from 'react-native'
import estilo from './estilo'
import If from './If'

export default (props) => {
    const usuario = props.usuario || {}
    return(
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={estilo.text}>
                    Usuario logado: 
                </Text>
                <Text style={estilo.text}>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
        
    )
}