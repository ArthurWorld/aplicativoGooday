import { createStackNavigator } from "@react-navigation/stack"
import SplashScreen from "../screens/SplashScreen.js"
import HomeScreen from "../screens/HomeScreen.js";
import TelaDeLogin from "../screens/TelaDeLogin.js";
import TelaDeCadastro from "../screens/TelaDeCadastro.js";

const Stack = createStackNavigator();

const Routes = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>

            <Stack.Screen
                name="Splash"
                component={SplashScreen}
            />

            <Stack.Screen 
                name="Home"
                component={HomeScreen}
            />

            <Stack.Screen
                name="Login"
                component={TelaDeLogin}
            />

            <Stack.Screen
                name="Cadastro"
                component={TelaDeCadastro}
            />
        </Stack.Navigator>
    )

}


export default Routes