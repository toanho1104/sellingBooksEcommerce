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
import { Fonts, Colors, TextStyles } from '../../assets/styles'
import { images } from '../../assets/images'
import { Danhsachsp, SCREEN_NAME } from '../configs'
import { Helpers, NavigationHelpers } from '../utils'

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
    console.tron.log({ item })
    NavigationHelpers.navigateToScreen(SCREEN_NAME.ChiTietSP, item)
  }
  console.tron.log({ item })
  const a = item.giaban
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

        <TouchableOpacity onPress={{}}>
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
