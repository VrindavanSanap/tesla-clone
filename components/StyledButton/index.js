import React from 'react'
import { Pressable } from 'react-native'

export default function StyledButton() {
  return (
    <View>
          <Pressable
          style={styles.button}
              onPress={() => {
                console.warn('Hey there')
          }}/>
          <Text>Custom Order</Text>
    </View>
  )
}
