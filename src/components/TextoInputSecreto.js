import { StyleSheet, Text, View, Pressable} from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Image } from 'react-native'

const TextoInputSecreto = ({text , setText, placeholderTxt}) => {
  const [visible,setVisible] = useState(true)
  return (
    <View style={styles.container}>
      <TextInput
          value={text}
          onChangeText={setText}
          placeholder={placeholderTxt}
          placeholderTextColor="gray"
          style = {styles.TextoInputStyle}
          secureTextEntry = {visible}
      />

          <Pressable onPress={() => {
            if (visible){
              setVisible(false)
            }else{
              setVisible(true)
            }
          }}>

            <Image  source={require('../../assets/olhoSenha.png')} style={{width: 30, height:30}}/>
          </Pressable>
    </View>
  )
}

export default TextoInputSecreto

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(219, 222, 238)',
        alignItems: 'center',
        borderRadius: 4,
        paddingLeft: 10,
        flexDirection: 'row'
    },

    TextoInputStyle: {
        height: 45,
        fontSize: 16,
    }
})