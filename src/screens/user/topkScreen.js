import React, { useEffect, useState } from 'react'
import {
  View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Dimensions, FlatList, Image, TextInput,
} from 'react-native'
import * as Animatable from 'react-native-animatable'

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

const { width } = Dimensions.get('window')
const rate = width / 375

const TopKScreen = () => {
  const history = useSelector((state) => state.history, (history) => history)
  console.log('dia chi', history)
  return (
    <View style={styles.container}>
      <View style={{
        height: 70 * rate, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 2, width, borderColor: Colors.neutralLight, paddingHorizontal: 5 * rate,
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
          Lịch sử mua hàng
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
            data={history}
            keyExtractor={(item, index) => `listcaata-${index}`}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <View style={{
                  borderWidth: 1,
                  marginTop: 15 * rate,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 15 * rate,
                  borderRadius: 8 * rate,
                  borderColor: Colors.neutralLight,
                }}
                >

                  <View>
                    <Text style={{
                      ...Fonts.bold,
                      fontSize: 13 * rate,
                      color: Colors.neutralDark,
                    }}
                    >
                      {item.diachi}
                    </Text>
                    <Text>
                      {item.ngaylap}
                    </Text>
                  </View>

                  <View>
                    <Text style={{
                      ...Fonts.bold,
                      color: Colors.primaryPulple,
                      fontSize: 14 * rate,
                    }}
                    >
                      {item.tongtien}
                      .VND
                    </Text>
                  </View>

                </View>
              )
            }}
          />
        </Animatable.View>
      </View>

    </View>

  )
}

export default TopKScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.backgroundWhite,
  },

})
