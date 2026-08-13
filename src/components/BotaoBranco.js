import { Image } from 'react-native'
import { TouchableOpacity , StyleSheet, Text } from 'react-native'

function BotaoBranco({texto , imagem, func}) {
  return (
    <TouchableOpacity onPress={func} style = {styles.container}>
        
      { imagem && (<Image source = {imagem}
          style = { styles.imagemDoBotao }
      />)}
        <Text style = {{fontWeight:'bold' }}> {texto} </Text>
    </TouchableOpacity> 
  )
}


export default BotaoBranco

const styles = StyleSheet.create({

    container: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#00dd63',
        width: '80%',
        height: 50,
        borderRadius: 5,
        marginTop: 10,
    },
    imagemDoBotao: {
      position: 'relative',
      left: 1,
      width: 35,
      height: 35,
      backgroundColor: 'white',
      borderRadius: 5
    }

})