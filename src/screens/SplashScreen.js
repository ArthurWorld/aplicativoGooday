import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Image } from 'react-native'

const SplashScreen = ({ navigation }) => {
    useEffect(() =>{
        const timer = setTimeout(()=>{
            navigation.replace('Home')
        },1000)
        return () => clearTimeout(timer)
    },[navigation])

    return (
        <View style = {styles.container}>
            <Image source={require('../../assets/logotipo.png')} style ={styles.Image}/>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00dd63',
    },
    Image: {
        width: 200,
        height: 60,
    }
})