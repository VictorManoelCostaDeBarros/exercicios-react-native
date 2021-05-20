import React from 'react'
import { View, Text, Button } from 'react-native'

export default (props) => {

    function gerarNumero(min, max) {
        const delta = max - min + 1
        return parseInt(Math.random() * delta) + min
    }

    return(
        <>
            <Button 
                title="executar!" 
                onPress={() => {
                    const n = gerarNumero(props.min, props.max)
                    props.funcao(n)
                }}
            />
        </>
    )
}