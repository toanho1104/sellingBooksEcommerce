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
import * as Animatable from 'react-native-animatable'
import FastImage from 'react-native-fast-image'
import { images } from '../../../assets/images'
import { Colors, Fonts } from '../../../assets/styles'
import { DataItem, SCREEN_NAME } from '../../configs'
import { TitleDSSanpham, Item } from '../../components'

import { Helpers, NavigationHelpers } from '../../utils'

const { width } = Dimensions.get('window')
const rate = width / 375

const ChiTietSP = () => {
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
        <Text style={{ ...Fonts.bold, fontSize: 20 * rate, color: Colors.neutralDark }}>Danh sách sản phẩm</Text>
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
            data={DataItem}
            keyExtractor={(item, index) => `list-user-${index}`}
            renderItem={Item}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
          />
        </Animatable.View>

      </View>

    </View>
  )
}
export default ChiTietSP
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
