import React from 'react'
import {
  View, Text, Image, Dimensions,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Fonts } from './assets/styles'
import {
  taiKhoan, gioHang, khamPha, trangChu,
} from './src/screens'
import { images } from './assets/images'

const { width } = Dimensions.get('window')
const rate = width / 375

const Tab = createMaterialBottomTabNavigator()

const mainTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
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
        tabBarOptions={{
          // activeTintColor: '#11942D',
          inactiveTintColor: '#11942D',
          labelStyle: { fontSize: 110 * rate },
          tabStyle: {

          },
          style: { height: 100 * width / 375 },

        }}
        initialRouteName="trangChu"
        activeColor="#11942D"
        barStyle={{ backgroundColor: 'white' }}
      >
        <Tab.Screen
          name="trangChu"
          component={trangChu}
          options={{

            tabBarLabel: 'Khám phá',
            tabStyle: {
              ...Fonts.regular,
            },

          }}
        />
        <Tab.Screen
          name="khamPha"
          component={khamPha}
          options={{
            tabBarLabel: 'Mua sắm',
          }}
        />
        <Tab.Screen
          name="gioHang"
          component={gioHang}
          options={{
            tabBarLabel: 'Giỏ hàng',
          }}
        />
        <Tab.Screen
          name="taiKhoan"
          component={taiKhoan}
          options={{
            tabBarLabel: 'Tài khoản',
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}
const App = () => {
  return (
    <View>
      <Text>a</Text>
    </View>
  )
}
export default mainTab
