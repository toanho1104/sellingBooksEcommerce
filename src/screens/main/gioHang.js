import React, { useEffect, useState } from 'react'
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
import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
import { Helpers, NavigationHelpers } from '../../utils'
import { images } from '../../../assets/images'
import { Colors, Fonts } from '../../../assets/styles'
import { DataItem, Danhsachsp, SCREEN_NAME } from '../../configs'
import {
  userActions, categoryActions, productActions, cartActions,
} from '../../redux/actions'

const { width } = Dimensions.get('window')
const rate = width / 375

const CartScreen = (props) => {
  const cart = useSelector((value) => value.cart)
  console.tron.log({ cart })
  const dispatch = useDispatch()

  const tongTienfnc = () => {
    let a = 0
    for (let i = 0; i < cart.length; i++) {
      a += cart[i].giaban * cart[i].soluong
    }
    return a
  }

  const handlePressDelete = (item) => {
    dispatch(cartActions.deleteCarts({
      id: item.id,
    }, (response) => {
      if (response?.success) {
        dispatch(cartActions.getCarts({
        }, (response) => {
          Helpers.showMess('Xoa thanh cong', 'success')
          NavigationHelpers.navigateToScreen(SCREEN_NAME.MainTab)
        }))
      }
    }))
  }
  const handlePressPayMent = () => {
    dispatch(cartActions.paymentCarts({
    }, (response) => {
      if (response?.success) {
        dispatch(cartActions.getCarts({
        }, (response) => {
          Helpers.showMess('Thanh toán thành công', 'success')
          NavigationHelpers.navigateToScreen(SCREEN_NAME.MainTab)
        }))
      }
    }))
  }

  return (
    <View style={style.Container}>
      <View style={{
        flex: 1,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderWidth: 2,
        borderColor: Colors.neutralLight,
        flexDirection: 'row',
        paddingHorizontal: 15 * rate,
        justifyContent: 'space-between',
      }}
      >

        <View style={{
          flex: 1,
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
        </View>

        <View style={{ flex: 5, alignItems: 'center' }}>
          <Text style={{ ...Fonts.bold, fontSize: 20 * rate, color: Colors.neutralDark }}>Giỏ hàng</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text />
        </View>

      </View>

      <View style={{ flex: 6 }}>
        <FlatList
          style={{}}
          data={cart}
          keyExtractor={(item, index) => `list-user-${index}`}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <View style={{
                width: 350 * rate,
                height: 120 * rate,
                marginTop: 10 * rate,
                borderRadius: 15 * rate,
                backgroundColor: '#ffff',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                flex: 1,
                paddingHorizontal: 15 * rate,
                borderWidth: 1,
                borderColor: Colors.neutralLight,
              }}
              >

                <View style={{ flexDirection: 'row', flex: 1 * rate }}>

                  <Image
                    source={{ uri: item.imageurl }}
                    style={{
                      width: 70 * rate, height: 70 * rate,
                    }}
                    resizeMode="contain"
                  />
                  <View style={{ justifyContent: 'center' }}>
                    <Text style={{
                      ...Fonts.bold, fontSize: 15 * rate, height: 40 * rate,
                    }}
                    >
                      {item.tensanpham}
                    </Text>
                    <Text style={{ color: '#7C7C7C', fontSize: 15 }}>
                      {item.giaban}
                      {' '}
                      VND
                    </Text>
                  </View>

                </View>
                <TouchableOpacity
                  onPress={() => handlePressDelete(item)}
                >
                  <View style={{ flex: 0.1 * rate, borderWidth: 2 }}>
                    <Image source={images.xoa} />
                  </View>
                </TouchableOpacity>
              </View>
            )
          }}
        />
      </View>

      <View style={{ flex: 1.8, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
          flex: 1,
          width,
          paddingHorizontal: 15 * rate,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          borderTopWidth: 1,
          borderColor: Colors.neutralLight,
        }}
        >

          <View>
            <Text style={{ ...Fonts.bold, fontSize: 17 * rate }}>

              Tổng tiền:
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 17 * rate }}>

              {tongTienfnc()}
              {' '}
              VND
            </Text>
          </View>

        </View>

        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={handlePressPayMent}>
            <Animatable.View
              animation="fadeInRight"
              delay={350}
              duration={1100}
              style={{
                width: 300 * rate,
                height: 60 * rate,
                backgroundColor: '#11942D',
                borderRadius: 10 * rate,
                marginTop: 25 * rate,
                justifyContent: 'center',
                // alignItems: 'center',
              }}
            >
              <View style={{ alignItems: 'center' }}>
                <Text style={{ ...Fonts.bold, color: '#ffff', fontSize: 17 * rate }}>Thanh toán</Text>
              </View>
            </Animatable.View>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}
export default CartScreen
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
