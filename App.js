import React from 'react'
import {
  View, Text, Image, Dimensions,

} from 'react-native'
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Fonts, Colors } from './assets/styles'
import {
  taiKhoan, gioHang, khamPha, trangChu, ThongTinTaiKhoan,
} from './src/screens'
import { images } from './assets/images'
import { SCREEN_NAME } from './src/configs'
import { navigationRef } from './src/utils/NavigationHelpers'

const { width } = Dimensions.get('window')
const rate = width / 375

const Stack = createStackNavigator()
const Tab = AnimatedTabBarNavigator()

const MainTab = () => {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName
          if (route.name === 'trangChu') {
            iconName = images.trangChu
          } else if (route.name === 'khamPha') {
            iconName = images.khamPha
          } else if (route.name === 'gioHang') {
            iconName = images.gioHang
          } else if (route.name === 'taiKhoan') {
            iconName = images.taiKhoan
          }
          return <Image source={iconName} style={{ height: 23 * rate, width: 23 * rate }} tintColor={color} resizeMode="contain" />
        },
      })}
      // initialRouteName="MainTab"
      activeColor={Colors.primaryGreen}
      barStyle={{ backgroundColor: Colors.backgroundWhite, borderTopColor: Colors.neutralLight, borderTopWidth: 2 }}
      tabBarOptions={{
        activeTintColor: Colors.backgroundWhite,
        inactiveTintColor: '#222222',
        activeBackgroundColor: Colors.primaryGreen,
      }}
    >
      <Tab.Screen
        name={SCREEN_NAME.trangChu}
        component={trangChu}
        options={{
          tabBarLabel: 'Khám phá',
        }}
      />
      <Tab.Screen
        name={SCREEN_NAME.khamPha}
        component={khamPha}
        options={{
          tabBarLabel: 'Mua sắm',
        }}
      />
      <Tab.Screen
        name={SCREEN_NAME.gioHang}
        component={gioHang}
        options={{
          tabBarLabel: 'Giỏ hàng',
        }}
      />
      <Tab.Screen
        name={SCREEN_NAME.taiKhoan}
        component={taiKhoan}
        options={{
          tabBarLabel: 'Tài khoản',
        }}
      />
    </Tab.Navigator>

  )
}
const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name={SCREEN_NAME.MainTab} component={MainTab} />
        <Stack.Screen name={SCREEN_NAME.khamPha} component={khamPha} />
        <Stack.Screen name={SCREEN_NAME.trangChu} component={trangChu} />
        <Stack.Screen name={SCREEN_NAME.ThongTinTaiKhoan} component={ThongTinTaiKhoan} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App
