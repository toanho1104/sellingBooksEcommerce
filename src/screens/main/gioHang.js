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
import { Helpers, NavigationHelpers } from '../../utils'
import { images } from '../../../assets/images'
import { Colors, Fonts } from '../../../assets/styles'
import { DataItem } from '../../configs'

const { width } = Dimensions.get('window')
const rate = width / 375

const CartScreen = () => {
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
          data={DataItem}
          keyExtractor={(item, index) => `list-user-${index}`}
          renderItem={Item}
          showsHorizontalScrollIndicator={false}
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
            <Text style={{ ...Fonts.bold, fontSize: 17 * rate }}>Tổng tiền:</Text>
          </View>
          <View>
            <Text style={{ fontSize: 17 * rate }}>350.000 VND</Text>
          </View>

        </View>

        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
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

const Item = ({ item, index }) => {
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
          source={item.image}
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
            {item.title}
          </Text>
          <Text style={{ color: '#7C7C7C', fontSize: 15 }}>
            {item.price}
            {' '}
            VND
          </Text>
        </View>

      </View>
      <View style={{ flex: 0.1 * rate }}>
        <Image source={images.xoa} />
      </View>

    </View>
  )
}
