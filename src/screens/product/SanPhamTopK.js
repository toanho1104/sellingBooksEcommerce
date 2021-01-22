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
import CurrencyInput from 'react-native-currency-input'
import { images } from '../../../assets/images'
import { Colors, Fonts } from '../../../assets/styles'
import { DataItem, SCREEN_NAME } from '../../configs'
import { TitleDSSanpham, Item } from '../../components'

import { Helpers, NavigationHelpers } from '../../utils'

const { width } = Dimensions.get('window')
const rate = width / 375
const numColumns = 3
const calSize = width / numColumns 

const SanPhamTopK = (props) => {
  const products = useSelector((state) => state.products, (products) => products)
  const topk = useSelector(createSelector((state) => state.topk, (topk) => topk))

  const handleViewCategoriesTopK = (item) => {
    NavigationHelpers.navigateToScreen(SCREEN_NAME.DanhSachSPTopK, { id: item.id, utility: item.utility })
  }
  return (
    <View style={style.Container}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        width,
        borderColor: Colors.neutralLight,
        paddingHorizontal: 5 * rate,
        height: 70 * rate,
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
          Danh mục TopK
          
        </Text>
      </View>

      <View>
        <FlatList
          style={{ marginBottom: 24, marginTop: 12 }}
          showsHorizontalScrollIndicator={false}
          data={topk}
          extraData={topk}
          keyExtractor={(item, index) => `list-categories-${index}`}
          numColumns={numColumns}
          columnWrapperStyle={{ marginBottom: 16 }}
          renderItem={({ item, index }) => {
            console.tron.log({ item })
            
            return (
              <TouchableOpacity onPress={() => handleViewCategoriesTopK(item)}>
                <Animatable.View
                  animation="tada"
                  delay={350}
                  duration={1100}
                  style={{ alignItems: 'center', width: calSize }}
                >
                  <View style={{
                    width: 100 * rate,
                    height: 100 * rate,
                    borderWidth: StyleSheet.hairlineWidth,
                    borderColor: Colors.neutralLight,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderwidth: 2,
                    
                  }}
                  >
                    <FastImage
                      source={images.top}
                      style={{ width: 60 * rate, height: 60 * rate }}
                      resizeMode="contain"
                    />
                  </View>

                  <CurrencyInput
                    value={item.utility}
                    precisions={false}
                    editable={false}
                    style={{
                      color: Colors.neutralGrey,
                      marginTop: 8,
                      width: 75 * rate,
                      textAlign: 'center',
                      width: calSize,
                    }}
                  />
                  {/* <Text style={{
                    // ...TextStyles.captionNormalTextRegular,
                    color: Colors.neutralGrey,
                    marginTop: 8,
                    width: 75 * rate,
                    textAlign: 'center',

                    height: 30,
                  }}
                  >
                    {item.utility}

                  </Text> */}

                </Animatable.View>
              </TouchableOpacity>
            )
          }}
        />
      </View>

    </View>
  )
}
export default SanPhamTopK

const style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
  },
  Borderbottom: {
    width: 400 * rate,
    borderBottomWidth: 2,
    borderBottomColor: '#E2E2E2',
    // backgroundColor: 'red',
  },
})
