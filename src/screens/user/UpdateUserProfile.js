import React, { useEffect, useState } from 'react'
import {
  View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Dimensions, FlatList, Image, TextInput,
} from 'react-native'

import FastImage from 'react-native-fast-image'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { images } from '../../../assets/images'
import { Colors, Fonts, TextStyles } from '../../../assets/styles'
import { Helpers, NavigationHelpers } from '../../utils'
import { SCREEN_NAME } from '../../configs'
import { userActions, categoryActions, productActions } from '../../redux/actions'

const { width } = Dimensions.get('window')
const rate = width / 375

const UpdateUserProfile = (props) => {
  const user = useSelector((state) => state.user, (user) => user)
  // const [textInputValue, setTextInputValue] = React.useState('')

  const dispatch = useDispatch()
  const [hovaten, sethovaten] = useState(__DEV__ ? user[0].hovaten : '')
  const [diachi, setdiachi] = useState(__DEV__ ? user[0].diachi : '')
  const [email, setemail] = useState(__DEV__ ? user[0].email : '')
  const [sodienthoai, setsodienthoai] = useState(__DEV__ ? user[0].sodienthoai : '')
  // const [tendangnhap, settendangnhap] = useState(__DEV__)
  const [matkhau, setmatkhau] = useState(__DEV__)

  const handlePressUpdateProfile = () => {
    dispatch(userActions.updateProfileUser({
      tendangnhap: user[0].tendangnhap,
      hovaten,
      email,
      sodienthoai,
      diachi,
      matkhau,
    }, (response) => {
      console.log('call', response)
      if (response?.data?.success) {
        dispatch(userActions.loadingProfileUser({
          tendangnhap: user[0].tendangnhap,
        }, (responseL) => {
          if (responseL?.success) {
            Helpers.showMess('Cập nhật thông tin thành công', 'success')
            NavigationHelpers.navigateToScreen(SCREEN_NAME.ThongTinTaiKhoan)
          }
        }))
      } else {
        Helpers.showMess(response?.message,)
        NavigationHelpers.navigateToScreenAndReplace(SCREEN_NAME.UpdateUserProfile)
      }
    }))
  }

  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: Colors.neutralLight,
        height: 60 * rate,
      }}
      >

        <TouchableOpacity
          onPress={NavigationHelpers.navigateBack}
        >
          <FastImage
            source={images.back}
            style={{
              width: 37 * rate,
              height: 37 * rate,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={{
          marginLeft: 7 * rate,
          ...Fonts.bold,
          fontSize: 16 * rate,
          color: Colors.neutralDark,
          alignItems: 'center',
          marginTop: 5 * rate,
        }}
        >
          Cập nhật thông tin tài khoản
        </Text>
      </View>

      <View style={{
        flexDirection: 'row',
        paddingHorizontal: 15 * rate,
        paddingVertical: 10 * rate,
        alignItems: 'center',
      }}
      >
        <Text style={{
          width: 150 * rate, ...Fonts.regular, color: Colors.neutralDark, fontSize: 15 * rate, flex: 1.2,
        }}
        >
          Họ và tên
        </Text>
        <TextInput
          onChangeText={(text) => sethovaten(text)}
          value={hovaten}
          style={{
            paddingHorizontal: 15 * rate,
            width: 150 * rate,
            ...Fonts.regular,
            color: Colors.primaryPulple,
            fontSize: 15 * rate,
            alignItems: 'center',
            flex: 2,
            borderWidth: 1,
            borderRadius: 15 * rate,
            borderColor: Colors.neutralGrey,

          }}

          placeholderTextColor={Colors.neutralGrey}
        />
      </View>

      <View style={{
        flexDirection: 'row',
        paddingHorizontal: 15 * rate,
        paddingVertical: 10 * rate,
        alignItems: 'center',
      }}
      >
        <Text style={{
          width: 150 * rate, ...Fonts.regular, color: Colors.neutralDark, fontSize: 15 * rate, flex: 1.2,
        }}
        >
          Email
        </Text>
        <TextInput
          onChangeText={(text) => setemail(text)}
          value={email}
          style={{
            paddingHorizontal: 15 * rate,
            width: 150 * rate,
            ...Fonts.regular,
            color: Colors.primaryPulple,
            fontSize: 15 * rate,
            alignItems: 'center',
            flex: 2,
            borderWidth: 1,
            borderRadius: 15 * rate,
            borderColor: Colors.neutralGrey,
          }}

          placeholderTextColor={Colors.neutralGrey}
        />
      </View>

      <View style={{
        flexDirection: 'row',
        paddingHorizontal: 15 * rate,
        paddingVertical: 10 * rate,
        alignItems: 'center',
      }}
      >
        <Text style={{
          width: 150 * rate, ...Fonts.regular, color: Colors.neutralDark, fontSize: 15 * rate, flex: 1.2,
        }}
        >
          Số điện thoại
        </Text>
        <TextInput
          onChangeText={(text) => setsodienthoai(text)}
          value={sodienthoai}
          style={{
            paddingHorizontal: 15 * rate,
            width: 150 * rate,
            ...Fonts.regular,
            color: Colors.primaryPulple,
            fontSize: 15 * rate,
            alignItems: 'center',
            flex: 2,
            borderWidth: 1,
            borderRadius: 15 * rate,
            borderColor: Colors.neutralGrey,
          }}

          placeholderTextColor={Colors.neutralGrey}
        />
      </View>

      <View style={{
        flexDirection: 'row',
        paddingHorizontal: 15 * rate,
        paddingVertical: 10 * rate,
        alignItems: 'center',
      }}
      >
        <Text style={{
          width: 150 * rate, ...Fonts.regular, color: Colors.neutralDark, fontSize: 15 * rate, flex: 1.2,
        }}
        >
          Địa chỉ
        </Text>
        <TextInput
          onChangeText={(text) => setdiachi(text)}
          value={diachi}
          style={{
            paddingHorizontal: 15 * rate,
            width: 150 * rate,
            ...Fonts.regular,
            color: Colors.primaryPulple,
            fontSize: 15 * rate,
            alignItems: 'center',
            flex: 2,
            borderWidth: 1,
            borderRadius: 15 * rate,
            borderColor: Colors.neutralGrey,
          }}

          placeholderTextColor={Colors.neutralGrey}
        />
      </View>

      <View style={{
        flexDirection: 'row',
        paddingHorizontal: 15 * rate,
        paddingVertical: 10 * rate,
        alignItems: 'center',
      }}
      >
        <Text style={{
          width: 150 * rate, ...Fonts.regular, color: Colors.neutralDark, fontSize: 15 * rate, flex: 1.2,
        }}
        >
          Mật khẩu
        </Text>
        <TextInput
          secureTextEntry
          onChangeText={(text) => setmatkhau(text)}
          style={{
            paddingHorizontal: 15 * rate,
            width: 150 * rate,
            ...Fonts.regular,
            color: Colors.primaryPulple,
            fontSize: 15 * rate,
            alignItems: 'center',
            flex: 2,
            borderWidth: 1,
            borderRadius: 15 * rate,
            borderColor: Colors.neutralGrey,

          }}
          placeholder="Your Password"
          placeholderTextColor={Colors.neutralGrey}
        />
      </View>

      <TouchableOpacity
        onPress={handlePressUpdateProfile}
      >
        <View style={{
          backgroundColor: Colors.primaryGreen,
          width: 100 * rate,
          borderRadius: 17 * rate,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 15 * rate,
          marginTop: 15 * rate,
        }}
        >
          <Text style={{ ...Fonts.regular, fontSize: 15 * rate, color: Colors.backgroundWhite }}>Xác nhận</Text>
        </View>
      </TouchableOpacity>

    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Colors.backgroundWhite,
  },
})
const ItemThongTin = (props) => {
  const { muc, thongtin, tests } = props
  return (
    <View style={{
      flexDirection: 'row',
      paddingHorizontal: 15 * rate,
      paddingVertical: 10 * rate,
      alignItems: 'center',
    }}
    >
      <Text style={{
        width: 150 * rate, ...Fonts.regular, color: Colors.neutralDark, fontSize: 15 * rate, flex: 1.2,
      }}
      >
        {muc}

      </Text>
      <TextInput
        onChangeText={tests}
        style={{
          width: 150 * rate,
          ...Fonts.regular,
          color: Colors.primaryPulple,
          fontSize: 15 * rate,
          alignItems: 'center',
          flex: 2,
          borderWidth: 1,
          borderRadius: 15 * rate,
          borderColor: Colors.neutralGrey,

        }}
        placeholderTextColor={Colors.neutralGrey}
      >

        {thongtin}
      </TextInput>

    </View>
  )
}

export default UpdateUserProfile
