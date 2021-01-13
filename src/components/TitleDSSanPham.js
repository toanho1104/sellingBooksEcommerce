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
import { Fonts, Colors, TextStyles } from '../../assets/styles'

import { Danhsachsp, SCREEN_NAME } from '../configs'
import { Helpers, NavigationHelpers } from '../utils'

const { width } = Dimensions.get('window')
const rate = width / 375

const TitleDSSanPham = (props) => {
  const vaoChiTietSP = () => {
    NavigationHelpers.navigateToScreen(SCREEN_NAME.DanhSachSP)
  }
  const { title } = props
  return (
    <View style={{
      width: 350 * rate,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 15 * rate,

    }}
    >
      <Text style={{ ...Fonts.regular, fontSize: 18, marginTop: 4 * rate }}>{title}</Text>
      <TouchableOpacity onPress={vaoChiTietSP}>
        {/* <Text style={{ color: Colors.neutralGrey, alignItems: 'center' }}>Xem tất cả >> </Text> */}
      </TouchableOpacity>

    </View>
  )
}
export default TitleDSSanPham
