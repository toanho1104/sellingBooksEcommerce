/* eslint-disable no-undef */
import React, { useState } from 'react'
import {
  View, Text, Image, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, Alert, Dimensions, ScrollView,
} from 'react-native'
import { useDispatch } from 'react-redux'
import * as Animatable from 'react-native-animatable'
import { userActions, categoryActions, productActions } from '../../redux/actions'
// import { Text } from '../../components'
import { images } from '../../../assets/images'
import { Colors, TextStyles } from '../../../assets/styles'
import { SCREEN_NAME } from '../../configs'
import { Helpers, NavigationHelpers } from '../../utils'

const { width } = Dimensions.get('window')
const rate = width / 375

const RegisterScreen = (props) => {
  const dispatch = useDispatch()
  const [hovaten, sethovaten] = useState(__DEV__)
  const [diachi, setdiachi] = useState(__DEV__)
  const [email, setemail] = useState(__DEV__)
  const [sodienthoai, setsodienthoai] = useState(__DEV__)
  const [tendangnhap, settendangnhap] = useState(__DEV__)
  const [matkhau, setmatkhau] = useState(__DEV__)
  const handlePressRegister = () => {
    dispatch(userActions.registerUser({
      hovaten,
      email,
      sodienthoai,
      tendangnhap,
      matkhau,
      diachi,
    }, (response) => {
      console.log(response)
      if (response?.success) {
        Helpers.showMess('Thành công, đăng nhập lại để xác nhận!!!', 'success')
        NavigationHelpers.navigateToScreen(SCREEN_NAME.LoginScreen)
      } else {
        Helpers.showMess(response?.message,)
      }
    }))
    // NavigationHelpers.navigateToScreen(SCREEN_NAME.MainTab)
  }
  const handlePressLogin = () => {
    NavigationHelpers.navigateToScreen(SCREEN_NAME.LoginScreen)
  }
  return (
    <ScrollView>
      <View style={{
        flex: 1, backgroundColor: Colors.backgroundWhite, paddingHorizontal: 15 * rate,
      }}
      >

        <View style={{
          alignItems: 'center',
          // borderWidth: 2,
        }}
        >
          <Animatable.Image
            animation="bounceInDown"
            source={images.logo}
            style={{
              width: 300, height: 130, marginTop: 1 * rate,
            }}
            resizeMode="contain"
          />
        </View>
        <View style={{ alignItems: 'center', marginTop: 1 * rate }}>

          <Text style={{
            fontSize: 20,
            color: Colors.neutralGrey,
            marginBottom: 10,
          }}
          >
            Đăng ký tài khoản mới
          </Text>
        </View>
        {/* nhap mail */}
        <View style={{}}>
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
              source={images.taiKhoan}
              style={{ width: 24, height: 24, marginRight: 10 }}
            />
            <TextInput
              value={hovaten}
              onChangeText={(text) => sethovaten(text)}
              style={{ color: Colors.neutralGrey, ...TextStyles.bodyNormalTextBold, flex: 1 }}
              placeholder="Họ và tên"
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
              // secureTextEntry
              value={tendangnhap}
              onChangeText={(text) => settendangnhap(text)}
              style={{ color: Colors.neutralGrey, ...TextStyles.bodyNormalTextBold, flex: 1 }}
              placeholder="Tên Tài khoản"
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
              value={matkhau}
              onChangeText={(text) => setmatkhau(text)}
              style={{ color: Colors.neutralGrey, ...TextStyles.bodyNormalTextBold, flex: 1 }}
              placeholder="Mật khẩu"
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
              // value={passwordUser}
              // onChangeText={(text) => setPasswordUser(text)}
              style={{ color: Colors.neutralGrey, ...TextStyles.bodyNormalTextBold, flex: 1 }}
              placeholder="Nhập lại mật khẩu"
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
              source={images.email}
              style={{ width: 24, height: 24, marginRight: 10 }}
            />

            <TextInput
              value={email}
              onChangeText={(text) => setemail(text)}
              style={{ color: Colors.neutralGrey, ...TextStyles.bodyNormalTextBold, flex: 1 }}
              placeholder="Email"
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
              // aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              source={images.matkhau}
              style={{ width: 24, height: 24, marginRight: 10 }}
            />
            <TextInput
              // secureTextEntry
              value={sodienthoai}
              onChangeText={(text) => setsodienthoai(text)}
              style={{ color: Colors.neutralGrey, ...TextStyles.bodyNormalTextBold, flex: 1 }}
              placeholder="Số điện thoại"
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
              // value={passwordUser}
              onChangeText={(text) => setdiachi(text)}
              style={{ color: Colors.neutralGrey, ...TextStyles.bodyNormalTextBold, flex: 1 }}
              placeholder="Địa chỉ"
              placeholderTextColor={Colors.neutralGrey}
            />
          </Animatable.View>

          <Animatable.View
            animation="bounceInUp"
            delay={350}
            duration={400}
          >
            <TouchableOpacity
              onPress={handlePressRegister}
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
                <Text style={{ ...TextStyles.bodyMediumTextBold, color: Colors.backgroundWhite }}>Đăng ký</Text>
              </View>
            </TouchableOpacity>
          </Animatable.View>

          <Animatable.View>
            <View style={{
              padding: 16,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            >
              <Text style={{ color: Colors.neutralGrey, ...TextStyles.bodyNormalTextBold }}>Bạn có tài khoản?</Text>
              <TouchableOpacity onPress={handlePressLogin}>
                <Text style={{ color: Colors.primaryGreen, ...TextStyles.bodyNormalTextBold, marginLeft: 5 }}>Đăng nhập</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>

      </View>
    </ScrollView>
  )
}
export default RegisterScreen 
