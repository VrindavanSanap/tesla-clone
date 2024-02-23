import React from 'react'
import { Pressable ,View,Text} from 'react-native'
import styles from './styles'
export default function StyledButton() {
  return (
    <View style={styles.container}>

      <Pressable
        onPress={() => { console.warn('Hey there') }}
        style={styles.button} >
          <Text style={styles.text}>Custom Order</Text>
          </Pressable>
    </View>
  )
}
