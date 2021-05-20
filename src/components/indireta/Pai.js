import React, { useState } from 'react'
import { View, Text } from 'react-native'

import Filho from './Filho'

export default (porps) => {
    const [num, setNum] = useState(0)

    function exibirValor(numero) {
        setNum(numero)
    }

    return(
        <>
            <Text>{num}</Text>
            <Filho min={1} max={60} funcao={exibirValor} />
        </>
    )
}