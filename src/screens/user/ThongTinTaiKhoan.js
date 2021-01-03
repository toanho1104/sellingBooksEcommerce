import React, { useEffect, useState } from 'react'
import {
  View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Dimensions, FlatList, Image,
} from 'react-native'

import FastImage from 'react-native-fast-image'

import PropTypes from 'prop-types'
import { images } from '../../../assets/images'
import { Colors, Fonts } from '../../../assets/styles'
import { Helpers, NavigationHelpers } from '../../utils'

const { width } = Dimensions.get('window')
const rate = width / 375

const ThongTinTaiKhoan = () => {
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
          Thông tin tài khoản
        </Text>
      </View>
      <ItemThongTin
        muc="Họ và tên"
        thongtin="Toàn Hồ"
      />
      <ItemThongTin
        muc="Email"
        thongtin="Toanho1104@gmail.com"
      />
      <ItemThongTin
        muc="Số điện thoại"
        thongtin="+84336222456"
      />
      <ItemThongTin
        muc="Họ và tên"
        thongtin="Toàn Hồ"
      />

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
        <Text style={{ ...Fonts.regular, fontSize: 15 * rate, color: Colors.backgroundWhite }}>Cập nhật</Text>
      </View>
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
  const { muc, thongtin } = props
  return (
    <View style={{ flexDirection: 'row', paddingHorizontal: 15 * rate, paddingVertical: 10 * rate }}>
      <Text style={{
        width: 150 * rate, ...Fonts.regular, color: Colors.neutralDark, fontSize: 15 * rate, flex: 1.2,
      }}
      >
        {muc}

      </Text>
      <Text style={{
        width: 150 * rate, ...Fonts.regular, color: Colors.primaryPulple, fontSize: 15 * rate, alignItems: 'center', flex: 2,
      }}
      >

        {thongtin}
      </Text>

    </View>
  )
}

export default ThongTinTaiKhoan
