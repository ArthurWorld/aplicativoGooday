import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BotaoVoltar from '../components/BotaoVoltar'
import TextoInput from '../components/TextoInput'
import TextoInputSecreto from '../components/TextoInputSecreto'
import BotaoVerde from '../components/BotaoVerde'
import BotaoBranco from '../components/BotaoBranco'
import BotaoLogin from '../components/BotaoLogin'
import BotaoCadastrar from '../components/BotaoCadastrar'
import { Image } from 'react-native'

const TelaDeCadastro = ({navigation}) => {

  const [email,setEmail] = useState()
  const [senha,setSenha] = useState()
  const [senha2,setSenha2] = useState()

  return (
    <View style = {styles.container}>
      <BotaoVoltar navigation={navigation}/>
      <View style={{paddingBottom: 20, paddingLeft: 5}}>
        <Text style = {{fontSize:40, fontWeight: 'bold'}}>Cadastre-se</Text>
        <Text>informe seu E-mail e crie uma senha</Text>
      </View>
      <View style={{paddingBottom: 10, paddingLeft: 5}}>
        <Text>E-mail</Text>
        <TextoInput text={email} setText={setEmail} placeholderTxt={"Digite seu E-mail"}/>
      </View>
      <View style={{paddingBottom: 10, paddingLeft: 5}}>
        <Text>Senha</Text>
        <TextoInputSecreto text={senha} setText={setSenha} placeholderTxt={"Digite sua Senha"}/>
      </View>
            <View style={{paddingBottom: 10, paddingLeft: 5}}>
        <Text>Confirmar Senha</Text>
        <TextoInputSecreto text={senha2} setText={setSenha2} placeholderTxt={"Digite sua Senha"}/>
      </View>

      <View style={{paddingLeft: 5, flexDirection:'row', width: '100%', justifyContent:'center',paddingBottom: 50}}>
        <BotaoVerde texto={'Cadastrar'} />
      </View>

      <View style={{paddingLeft: 5, paddingBottom: 40}}>
        <Text>__________ Ou continue com __________ </Text>
      </View>

      <View style={{paddingHorizontal: 65, flexDirection:'row', width: '100%', justifyContent:'space-between'}}>
        <Image source={require('../../assets/Google.png')} style={{width:50, height: 50}}/>
        <Image source={require('../../assets/Facebook.png')} style={{width:50, height: 50}}/>
      </View>
    </View>
  )
}

export default TelaDeCadastro

const styles = StyleSheet.create({})