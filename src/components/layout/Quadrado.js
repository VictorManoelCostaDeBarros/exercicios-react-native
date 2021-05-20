import React from 'react'
import { View, Text } from 'react-native'

export default (props) => {
    const size = props.lado || 50
    return(
        <View style={{
            width: size,
            height: size,
            backgroundColor: props.color || '#000'
        }}>

        </View>
    )
}
