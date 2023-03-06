import React from 'react'
import { View, Text } from 'react-native'

/*import LoginSVG from '../assets/images/login.png';*/

const LoginScreen = () => {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <LoginSVG height={300} width={300} />
            <Text>Login Screen</Text>
        </View>
    )
}