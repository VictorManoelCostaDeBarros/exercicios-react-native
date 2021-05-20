import React from 'react'
import { View, Text } from 'react-native'

import Filho from './Filho'

export default (porps) => {
    let x = 10
    let y = 15
    return(
        <>
            <Filho a={x} b={y} />
        </>
    )
}