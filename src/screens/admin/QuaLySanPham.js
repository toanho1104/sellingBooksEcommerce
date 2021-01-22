import React, { useEffect, useState } from 'react'
import {
  View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Dimensions, FlatList, Image, TextInput,
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import CurrencyInput from 'react-native-currency-input'

import FastImage from 'react-native-fast-image'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { color } from 'react-native-reanimated'
import { images } from '../../../assets/images'
import { Colors, Fonts } from '../../../assets/styles'
import { Helpers, NavigationHelpers } from '../../utils'
import { SCREEN_NAME } from '../../configs'
import {
  userActions, categoryActions, productActions, cartActions, topkActions,
} from '../../redux/actions'
import { TitleDSSanpham, Itemad, Item } from '../../components'

const { width } = Dimensions.get('window')
const rate = width / 375

const QuanLySanPham = (item) => {
  const products = useSelector((value) => value.products)
  // const products = useSelector((state) => state.products, (products) => products)
  const handlerChitietsanpham = () => {
    NavigationHelpers.navigateToScreen(SCREEN_NAME.ChiTietSanPhamAdScreen, { item })
    console.tron.log({ aaaaaaaa: item })
  }

  return (
    <View style={styles.container}>
      <View style={{
        height: 70 * rate,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        width,
        borderColor: Colors.neutralLight,
        paddingHorizontal: 5 * rate,
      }}
      >
        <TouchableOpacity onPress={NavigationHelpers.navigateBack}>
          <FastImage
            source={images.back}
            style={{
              width: 37 * rate,
              height: 37 * rate,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={{ ...Fonts.bold, fontSize: 20 * rate, color: Colors.neutralDark }}>
          Quản Lý Sản Phẩm
        </Text>
      </View>

      <View style={{ flex: 6, marginTop: 15 * rate, borderwidth: 2 }}>

        <Animatable.View
          animation="bounceInUp"
          delay={350}
          duration={1100}
          style={{
            width: 350 * rate,
          }}
        >
          <FlatList
            style={{}}
            data={products}
            keyExtractor={(item, index) => `listcaata-${index}`}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              console.tron.log({ item })
              return (
                <Itemad
                  item={item}
                />
              )
            }}
          />
        </Animatable.View>
      </View>

    </View>

  )
}

export default QuanLySanPham

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.backgroundWhite,
  },

})
