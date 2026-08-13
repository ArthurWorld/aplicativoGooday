import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'

const TextoInput = ({text , setText, placeholderTxt}) => {
  return (
    <TextInput
        value={text}
        onChangeText={setText}
        placeholder={placeholderTxt}
        placeholderTextColor="gray"
        style = {styles.TextoInputStyle}
    />
  )
}

export default TextoInput

const styles = StyleSheet.create({
    TextoInputStyle: {
        height: 45,
        fontSize: 16,
        backgroundColor: 'rgb(219, 222, 238)',
        borderRadius: 4,
        padding: 10,
    }
})