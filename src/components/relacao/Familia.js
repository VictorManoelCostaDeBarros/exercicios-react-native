import React from 'react'
import { View, Text } from 'react-native'

export default (props) => {
    return(
        <>
            <Text>Membros da familia :</Text>
            {props.children}
        </>
    )
}