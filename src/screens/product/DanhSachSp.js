import React, { useState, useEffect } from 'react'
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
import * as Animatable from 'react-native-animatable'
import FastImage from 'react-native-fast-image'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { images } from '../../../assets/images'
import { Colors, Fonts } from '../../../assets/styles'
import { DataItem, SCREEN_NAME } from '../../configs'
import { TitleDSSanpham, Item } from '../../components'

import { Helpers, NavigationHelpers } from '../../utils'

const { width } = Dimensions.get('window')
const rate = width / 375

const DanhSachSP = (props) => {
  console.tron.log({ props })
  const { route } = props
  const { params } = route
  const [idTheLoai, setidTheLoai] = useState(params?.id)
  console.log(idTheLoai)
  const [tentheloai, settenTheLoai] = useState(params?.tentheloai)
  // console.log(tentheloai)
  const products = useSelector((state) => state.products, (products) => products)

  useEffect(() => {
    if (params?.id) {
      setidTheLoai(params?.id)
      LocSp()
    }
  }, [])
  const [sanPham, setSanPham] = useState()

  const LocSp = () => {
    const a = products.filter((item) => {
      return item.idtheloai === idTheLoai
    })
    setSanPham(a)
  }
  return (
    <View style={style.Container}>
      <View style={{
        flex: 0.7, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 2, width, borderColor: Colors.neutralLight, paddingHorizontal: 5 * rate,
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
          Danh Muc Sách
          {' '}

          {tentheloai}
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
            data={sanPham}
            keyExtractor={(item, index) => `listcaata-${index}`}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            renderItem={({ item, index }) => {
              return (
                <Item
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
export default DanhSachSP

const style = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.backgroundWhite,
  },
  Borderbottom: {
    width: 400 * rate,
    borderBottomWidth: 2,
    borderBottomColor: '#E2E2E2',
    // backgroundColor: 'red',
  },
})
