/* eslint-disable no-undef */
import React, { useState } from 'react'
import {
  View, Text, Image, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, Alert, Dimensions,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import * as Animatable from 'react-native-animatable'
// import { Text } from '../../components'
import { images } from '../../../assets/images'
import { Colors, TextStyles } from '../../../assets/styles'
import { SCREEN_NAME } from '../../configs'
import { Helpers, NavigationHelpers } from '../../utils'
import {
  userActions, categoryActions, productActions, cartActions, topkitemActions, authorActions,
} from '../../redux/actions'

const { width } = Dimensions.get('window')
const rate = width / 375

const LoginScreen = (props) => {
  // const user = useSelector((state) => state.user, (user) => user.id)

  const dispatch = useDispatch()
  const [emailUser, setEmailUser] = useState(__DEV__ ? 'toanho' : '')
  const [passwordUser, setPasswordUser] = useState(__DEV__ ? '123456' : '')

  const handlePressSignIn = () => {
    dispatch(userActions.loginUser({
      tendangnhap: emailUser,
      matkhau: passwordUser,
    }, (response) => {
      if (response?.success) {
        dispatch(productActions.getProducts({
        }, (responseP) => {
          if (responseP?.success) {
            dispatch(categoryActions.getCategorys({
            }, (responseC) => {
              if (responseC?.success) {
                dispatch(userActions.loadingProfileUser({
                  tendangnhap: emailUser,
                }, (responseL) => {
                  console.tron.log({ aaa: responseL.data[0].loaitaikhoan })

                  if (responseL.data[0].loaitaikhoan === 2) {
                    dispatch(cartActions.getCarts({
                    }, (responseCA) => {
                      if (responseCA?.success) {
                        dispatch(topkitemActions.getitemtopk({
                        }, (response) => {
                        }))
                        Helpers.showMess('Đăng nhập thành công', 'success')
                        NavigationHelpers.navigateToScreen(SCREEN_NAME.MainTab)
                      }
                    }))
                  } else {
                    dispatch(authorActions.getAuthor({

                    }, (response) => { }))
                    Helpers.showMess('Xác nhận quản lý thành công', 'success')
                    NavigationHelpers.navigateToScreen(SCREEN_NAME.AdminScreen)
                  }
                }))
              }
            }))
          }
        }))
      } else {
        console.log(response)
        Helpers.showMess(response?.message,)
      }
    }))
  }

  // const handlePressSignIn = () => {
  //   NavigationHelpers.navigateToScreen(SCREEN_NAME.MainTab)
  // }
  const handlePressRegister = () => {
    NavigationHelpers.navigateToScreen(SCREEN_NAME.RegisterScreen)
  }
  return (
    <View style={{ flex: 1, backgroundColor: Colors.backgroundWhite, paddingHorizontal: 15 * rate }}>
      <SafeAreaView />
      <View style={{
        alignItems: 'center',
      }}
      >

        <Animatable.Image
          animation="bounceInDown"
          source={images.logo}
          style={{
            width: 300, height: 200, marginTop: 50,
          }}
          resizeMode="contain"
        />

      </View>
      <View style={{ alignItems: 'center', marginTop: 5 * rate }}>

        <Text style={{
          fontSize: 20,
          color: Colors.neutralGrey,
          marginBottom: 28,
        }}
        >
          Đăng nhập để tiếp tục
        </Text>
      </View>
      <View>
        <Animatable.View
          animation="slideInLeft"
          delay={350}
          duration={400}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderRadius: 5,
            borderWidth: 2 * StyleSheet.hairlineWidth,
            borderColor: Colors.neutralLight,
          }}
        >
          <Image
            source={images.email}
            style={{ width: 24, height: 24, marginRight: 10 }}
          />

          <TextInput
            value={emailUser}
            onChangeText={(text) => setEmailUser(text)}
            style={{ color: Colors.neutralGrey, ...TextStyles.bodyNormalTextBold, flex: 1 }}
            placeholder="Your Email"
            placeholderTextColor={Colors.neutralGrey}
          />
        </Animatable.View>

        <Animatable.View
          animation="slideInRight"
          duration={400}
          delay={350}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderRadius: 5,
            borderWidth: 2 * StyleSheet.hairlineWidth,
            borderColor: Colors.neutralLight,
            marginTop: 8,
          }}
        >
          <Image
            source={images.matkhau}
            style={{ width: 24, height: 24, marginRight: 10 }}
          />

          <TextInput
            secureTextEntry
            value={passwordUser}
            onChangeText={(text) => setPasswordUser(text)}
            style={{ color: Colors.neutralGrey, ...TextStyles.bodyNormalTextBold, flex: 1 }}
            placeholder="Your Password"
            placeholderTextColor={Colors.neutralGrey}
          />
        </Animatable.View>

        <Animatable.View
          animation="bounceInUp"
          delay={350}
          duration={400}
        >
          <TouchableOpacity
            onPress={handlePressSignIn}
          >
            <View style={{
              padding: 16,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              backgroundColor: Colors.primaryGreen,
              marginTop: 16,
            }}
            >
              <Text style={{ ...TextStyles.bodyMediumTextBold, color: Colors.backgroundWhite }}>Đăng Nhập</Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>

      </View>

      {/* <View
        style={{
          flexDirection: 'row', alignItems: 'center', marginTop: 8,
        }}
      >
        <View style={{
          flex: 1,
          height: 2 * StyleSheet.hairlineWidth,
          backgroundColor: Colors.neutralLight,
        }}
        />
        <Text style={{ width: 72, textAlign: 'center', ...TextStyles.bodyMediumTextBold }}>OR</Text>
        <View style={{
          flex: 1,
          height: 2 * StyleSheet.hairlineWidth,
          backgroundColor: Colors.neutralLight,
        }}
        />
      </View> */}

      <Animatable.View
        animation="bounceInUp"
        delay={350}
        duration={400}
      >

        <View style={{
          padding: 16,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          <Text style={{ color: Colors.neutralGrey, ...TextStyles.bodyNormalTextBold }}>Bạn chưa có tài khoản?</Text>
          <TouchableOpacity onPress={handlePressRegister}>
            <Text style={{ color: Colors.primaryGreen, ...TextStyles.bodyNormalTextBold, marginLeft: 5 }}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>

    </View>
  )
}
export default LoginScreen
