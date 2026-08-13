import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import BotaoVerde from '../components/BotaoVerde.js'
import BotaoBranco from '../components/BotaoBranco.js'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../../assets/casual_dog.png')} style={ styles.imagemCasualDog }/>
      </View>
      <Text style = {styles.bomDia}>ÓTIMO DIA!</Text>
      <Text>Como deseja aceitar?</Text>
      <BotaoVerde texto="Como deseja acessar?" imagem={require("../../assets/Google.png")} func={() => {
        navigation.navigate('Login')
      }}/>
      <BotaoBranco texto='Outras Opções'/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffffff',
    },

    bomDia: {
      fontWeight: 'bold',
      fontSize: 30,
      padding: 10,
    },

    imagemCasualDog: {
      width: 290,
      height: 240,
    }
})