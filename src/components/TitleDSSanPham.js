import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native'
import { Fonts, Colors, TextStyles } from '../../assets/styles'

const { width } = Dimensions.get('window')
const rate = width / 375

const TitleDSSanPham = (props) => {
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
      <Text style={{ color: Colors.neutralGrey, alignItems: 'center' }}>Xem tất cả >> </Text>
    </View>
  )
}
export default TitleDSSanPham
