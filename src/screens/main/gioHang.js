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
  TextInput,
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
  const [giaban, setgiaban] = useState(__DEV__)
  const cart = useSelector((value) => value.cart)
  const user = useSelector((value) => value.user)

  console.log(user[0].id)
  const dispatch = useDispatch()

  const tongTienfnc = () => {
    let a = 0
    for (let i = 0; i < cart.length; i++) {
      a += cart[i].giaban * cart[i].soluong
    }
    return a
  }
  const handlePressPlus = (item) => {
    dispatch(cartActions.paymentPlus({
      id: item.idsanpham,
    }, (response) => {
      dispatch(cartActions.getCarts({

      }, ((responseC) => {
        Helpers.showMess('Thêm thành công', 'success')
        NavigationHelpers.navigateToScreen(SCREEN_NAME.MainTab)
      })))
    }))
  }
  const handlePressMinus = (item) => {
    dispatch(cartActions.paymentMinus({
      id: item.idsanpham,
    }, (response) => {
      dispatch(cartActions.getCarts({

      }, ((responseC) => {
        Helpers.showMess('Xóa thành công', 'success')
        NavigationHelpers.navigateToScreen(SCREEN_NAME.MainTab)
      })))
    }))
  }

  const handlePressDelete = (item) => {
    dispatch(cartActions.deleteCarts({
      id: item.idsanpham,
    }, (response) => {
      if (response?.success) {
        dispatch(cartActions.getCarts({
        }, (response) => {
          Helpers.showMess('Xóa thành công', 'success')
          NavigationHelpers.navigateToScreen(SCREEN_NAME.MainTab)
        }))
      }
    }))
  }
  const handlePressPayMent = () => {
    dispatch(cartActions.paymentCarts({
      id: user[0].id,
      diachi: user[0].diachi,
      tongtien: tongTienfnc(),
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

                  <View style={{ justifyContent: 'center', flex: 1 }}>
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

                  <View style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    borderWidth: 1,
                    marginVertical: 24 * rate,
                    borderColor: Colors.neutralLight,
                    borderRadius: 5,
                    marginHorizontal: 10,
                  }}
                  >
                    <TouchableOpacity onPress={() => { handlePressMinus(item) }}>
                      <Image
                        source={images.giam}
                        style={{ height: 20 * rate, width: 20 * rate }}
                      />
                    </TouchableOpacity>

                    <View style={{
                      backgroundColor: Colors.neutralLight, width: 27 * rate, alignItems: 'center',
                    }}
                    >
                      <Text style={{ fontSize: 17 }}>{item.soluong}</Text>
                    </View>
                    <TouchableOpacity onPress={() => { handlePressPlus(item) }}>
                      <Image
                        source={images.tang}
                        style={{ height: 20 * rate, width: 20 * rate }}
                      />
                    </TouchableOpacity>

                  </View>

                </View>

                <View style={{
                  flex: 0.1 * rate,
                  height: 50,
                  alignItems: 'center',
                  // justifyContent: 'center',
                  marginTop: -45 * rate,
                  borderwidth: 2,
                }}
                >
                  <TouchableOpacity
                    onPress={() => handlePressDelete(item)}
                    style={{ alignItems: 'center', marginLeft: 7 * rate }}
                  >
                    <Image source={images.xoa} />
                  </TouchableOpacity>
                </View>

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
            <TextInput
              onChangeText={(text) => setgiaban(text)}
              style={{ fontSize: 17 * rate }}
            >

              {tongTienfnc()}
              {' '}
              VND
            </TextInput>
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
