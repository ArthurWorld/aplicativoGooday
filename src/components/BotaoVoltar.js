import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const BotaoVoltar = ({navigation}) => {
  return (
    <Pressable onPress={() => {
        navigation.goBack()
    }}>
        <Image  source={require('../../assets/iconVoltar.png')}  width={48} height={48}/>
    </Pressable>
  )
}

export default BotaoVoltar