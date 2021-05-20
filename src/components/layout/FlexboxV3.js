import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Quadrado from './Quadrado'

export default (props) => {
    return(
        <View style={styles.FLexV3}>
            <Quadrado color="#ff801a" lado={10}/>
            <Quadrado color="#50d1f6" lado={20}/>
            <Quadrado color="#dd22c1" lado={30}/>
            <Quadrado color="#8312ed" lado={40}/>
            <Quadrado color="#36c9a7" lado={50}/>
        </View>
    )
}

const styles = StyleSheet.create({
    FLexV3: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 350,
        width: '100%',
        backgroundColor: '#000',
    }
})