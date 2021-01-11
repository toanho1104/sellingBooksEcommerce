import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import SplashScreenLib from 'react-native-splash-screen'
import { SCREEN_NAME } from '../configs'
import { NavigationHelpers } from '../utils'
import {
  taiKhoan, gioHang, khamPha, trangChu, ThongTinTaiKhoan, LoginScreen,
} from '.'

const SplashScreen = (props) => {
  const { navigation } = props
  useEffect(() => {
    SplashScreenLib.hide()
    navigation.replace('LoginScreen')
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Text>Splash Screen</Text>
    </View>
  )
}
export default SplashScreen
