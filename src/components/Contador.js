import React, { useState } from 'react'
import { Button, Text } from 'react-native'

export default props => {
    let [count, setCount] = useState(0)

    return (
        <>
            <Button title="Mais 1" onPress={() => setCount(count+1)} />
            <Button title="Menos 1" onPress={() => setCount(count-1)} />
            <Text>{count}</Text>
        </>
    )
}