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
  userActions, categoryActions, productActions, cartActions,
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
  const dispatch = useDispatch()

  const themVaoGioHang = () => {
    dispatch(cartActions.addCarts({
      id: item.id,
      tensanpham: item.tensanpham,
      giaban: item.giaban,
      imageurl: item.image,
      soluong: 1,
    }, (response) => {
      if (response?.success) {
        dispatch(cartActions.getCarts({

        }, (responseCA) => {
          if (responseCA?.success) {
            Helpers.showMess('Cập nhât thành công', 'success')
            NavigationHelpers.navigateToScreen(SCREEN_NAME.gioHang)
          }
        }))
      }
    }))
    // NavigationHelpers.navigateToScreen(SCREEN_NAME.gioHang)
  }

  const handleViewProductDetail = () => {
    NavigationHelpers.navigateToScreen(SCREEN_NAME.ChiTietSP, item)
  }
  // const formatedCurrency = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' })
  return (

    <View style={{
      alignItems: 'center',
      width: 165 * rate,
      height: 230 * rate,
      marginRight: 19 * rate,
      marginTop: 15 * rate,

      backgroundColor: Colors.WHITE,
      borderRadius: 17 * rate,
      justifyContent: 'center',
      // eslint-disable-next-line no-dupe-keys
      // backgroundColor: Colors.backgroundWhite,
      borderWidth: 2,
      borderColor: Colors.neutralLight,

    }}
    >

      <TouchableOpacity onPress={handleViewProductDetail}>
        <View
          style={{
            alignItems: 'center',

          }}
        >
          <Image
            source={{ uri: item.image }}
            style={{
              width: 100 * rate,
              height: 100 * rate,
              borderRadius: 15 * rate,
              marginTop: 12 * rate,
            }}
            resizeMode="contain"
          />

        </View>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 8 * rate,
          width: 140 * rate,
          height: 50 * rate,

        }}
        >
          <Text style={{

            fontSize: 15 * rate,
            ...Fonts.bold,
            color: Colors.neutralDark,
          }}
          >
            {item.tensanpham}
          </Text>
        </View>
      </TouchableOpacity>

      <View style={{
        width: 140 * rate,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

      }}
      >
        {/* <Text style={{
          marginTop: 10 * rate,
          marginBottom: 10 * rate,
          fontSize: 12 * rate,
          ...Fonts.bold,
          color: Colors.primaryBlue,
        }}
        >
          {a}
          VND
        </Text> */}

        <CurrencyInput
          value={item.giaban}
          precisions={false}
          style={{
            marginTop: 8 * rate,
            marginBottom: 10 * rate,
            fontSize: 14 * rate,
            ...Fonts.bold,
            color: Colors.primaryBlue,
          }}
        />

        <TouchableOpacity onPress={() => themVaoGioHang(item)}>
          <Image
            source={images.them}
            style={{
              width: 35 * rate,
              height: 35 * rate,
            }}
          />
        </TouchableOpacity>

      </View>

    </View>

  )
}

export default RenderItemSP
