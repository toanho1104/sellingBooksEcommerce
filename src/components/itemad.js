import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import CurrencyInput from 'react-native-currency-input'
import { useSelector, useDispatch } from 'react-redux'
import { Fonts, Colors, TextStyles } from '../../assets/styles'
import { images } from '../../assets/images'
import { Danhsachsp, SCREEN_NAME } from '../configs'
import { Helpers, NavigationHelpers } from '../utils'

import {
  userActions, categoryActions, productActions, cartActions, sanphamtopkActions,
} from '../redux/actions'

const { width } = Dimensions.get('window')
const rate = width / 375

// const vaoChiTietSP = () => {
//   NavigationHelpers.navigateToScreen(SCREEN_NAME.ChiTietSP)
// }
// const vaoGioHang = () => {
//   NavigationHelpers.navigateToScreen(SCREEN_NAME.gioHang)
// }

const RenderItemSP = ({ item }) => {
  const handleViewProductDetail = () => {
    NavigationHelpers.navigateToScreen(SCREEN_NAME.ChiTietSanPhamAdScreen, item)
  }
  // const formatedCurrency = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' })
  return (

    <TouchableOpacity onPress={handleViewProductDetail}>

      <View style={{
        borderWidth: 1,
        marginTop: 15 * rate,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10 * rate,
        borderRadius: 8 * rate,
        borderColor: Colors.neutralLight,
        paddingVertical: 10 * rate,
      }}
      >

        <View style={{ flex: 1 }}>
          <Image
            source={{ uri: item.image }}
            style={{
              width: 70 * rate,
              height: 70 * rate,
              borderRadius: 15 * rate,

            }}
            resizeMode="contain"
          />
        </View>

        <View style={{ flex: 3 }}>
          <Text style={{ ...Fonts.bold, color: Colors.neutralDark, fontSize: 15 * rate }}>
            {item.tensanpham}
          </Text>
        </View>

      </View>

    </TouchableOpacity>

  )
}

export default RenderItemSP
