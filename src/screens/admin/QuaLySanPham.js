import React, { useEffect, useState } from 'react'
import {
  Modal,
  View,
  Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Dimensions, FlatList, Image, TextInput,
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import CurrencyInput from 'react-native-currency-input'

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
import { TitleDSSanpham, Itemad, Item } from '../../components'

const { width } = Dimensions.get('window')
const rate = width / 375

const QuanLySanPham = (item) => {
  const dispatch = useDispatch()
  const [tensach, settensach] = useState(__DEV__)
  const [giaban, setgiaban] = useState(__DEV__)
  const [tacgia, settacgia] = useState(__DEV__)
  const [theloai, settheloai] = useState(__DEV__)
  const [mota, setmota] = useState(__DEV__)
  const [image, setimage] = useState(__DEV__)

  const handladdteITem = () => {
    dispatch(productActions.addProducts({

      tensanpham: tensach,
      giaban,
      idtacgia: tacgia,
      idtheloai: theloai,
      mota,
      image,
    }, (response) => {
      if (response?.success) {
        dispatch(productActions.getProducts({

        }, (responseP) => {
          if (responseP?.success) {
            Helpers.showMess('Cập nhật phẩm thành công', 'success')
            NavigationHelpers.navigateToScreen(SCREEN_NAME.QuanLySanPhamScreen)
            setIsShowModalUpdateLogout(false)
          }
        }))
      }
    }))
  }

  const [isShowModalUpdateLogout, setIsShowModalUpdateLogout] = useState(false)
  const handleHideModalUpdateLogout = () => {
    setIsShowModalUpdateLogout(false)
  }

  const handleShowModalUpdateLogout = () => {
    setIsShowModalUpdateLogout(true)
  }

  const products = useSelector((value) => value.products)
  // const products = useSelector((state) => state.products, (products) => products)
  const handlerChitietsanpham = () => {
    NavigationHelpers.navigateToScreen(SCREEN_NAME.ChiTietSanPhamAdScreen, { item })
    console.tron.log({ aaaaaaaa: item })
  }

  return (
    <View style={styles.container}>

      <View style={{
        height: 70 * rate,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        width,
        borderColor: Colors.neutralLight,
        paddingHorizontal: 5 * rate,
      }}
      >
        <TouchableOpacity onPress={NavigationHelpers.navigateBack}>
          <FastImage
            source={images.back}
            style={{
              width: 37 * rate,
              height: 37 * rate,
              flex: 1,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={{
          ...Fonts.bold, fontSize: 20 * rate, color: Colors.neutralDark, flex: 4,
        }}
        >
          Quản Lý Sản Phẩm
        </Text>
        <TouchableOpacity onPress={handleShowModalUpdateLogout}>
          <Image
            style={{
              height: 30, width: 30, tintColor: Colors.primaryGreen, flex: 1,

            }}
            source={images.new}
            resizeMode="contain"
          />
        </TouchableOpacity>
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
            data={products}
            keyExtractor={(item, index) => `listcaata-${index}`}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              console.tron.log({ item })
              return (
                <Itemad
                  item={item}
                />
              )
            }}
          />
        </Animatable.View>
      </View>

      <Modal
        transparent
        visible={isShowModalUpdateLogout}
      >
        <View style={{
          backgroundColor: 'rgba(0,0,0,0.7)',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
        >
          <View style={{
            width: 320 * rate,
            height: 500 * rate,
            backgroundColor: Colors.backgroundWhite,
            borderRadius: 10 / 375 * width,
            alignItems: 'center',
            padding: 15 * rate,
            justifyContent: 'center',

          }}
          >

            <Text style={{
              ...Fonts.bold, fontSize: 20 * rate, color: Colors.primaryRed,
            }}
            >
              Thêm sản phẩm
            </Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 * rate }}>
              <Text style={{
                flex: 1,
                ...Fonts.regular,
                color: Colors.neutralDark,
                fontSize: 15 * rate,
              }}
              >
                Tên sách
              </Text>
              <TextInput
                onChangeText={(text) => settensach(text)}
                value={tensach}
                style={{
                  paddingHorizontal: 15 * rate,
                  ...Fonts.regular,
                  color: Colors.primaryPulple,
                  fontSize: 15 * rate,
                  alignItems: 'center',
                  flex: 2,
                  borderWidth: 1,
                  borderRadius: 15 * rate,
                  borderColor: Colors.neutralGrey,
                }}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 * rate }}>
              <Text style={{
                flex: 1,
                ...Fonts.regular,
                color: Colors.neutralDark,
                fontSize: 15 * rate,
              }}
              >
                Giá bán
              </Text>
              <TextInput
                onChangeText={(text) => setgiaban(text)}
                value={giaban}
                style={{
                  paddingHorizontal: 15 * rate,
                  ...Fonts.regular,
                  color: Colors.primaryPulple,
                  fontSize: 15 * rate,
                  alignItems: 'center',
                  flex: 2,
                  borderWidth: 1,
                  borderRadius: 15 * rate,
                  borderColor: Colors.neutralGrey,
                }}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 * rate }}>
              <Text style={{
                flex: 1,
                ...Fonts.regular,
                color: Colors.neutralDark,
                fontSize: 15 * rate,
              }}
              >
                Tác giả
              </Text>
              <TextInput
                onChangeText={(text) => settacgia(text)}
                value={tacgia}
                style={{
                  paddingHorizontal: 15 * rate,

                  ...Fonts.regular,
                  color: Colors.primaryPulple,
                  fontSize: 15 * rate,
                  alignItems: 'center',
                  flex: 2,
                  borderWidth: 1,
                  borderRadius: 15 * rate,
                  borderColor: Colors.neutralGrey,
                }}
              />

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 * rate }}>
              <Text style={{
                flex: 1,
                ...Fonts.regular,
                color: Colors.neutralDark,
                fontSize: 15 * rate,
              }}
              >
                Thể loại
              </Text>
              <TextInput
                onChangeText={(text) => settheloai(text)}
                value={theloai}
                style={{
                  paddingHorizontal: 15 * rate,

                  ...Fonts.regular,
                  color: Colors.primaryPulple,
                  fontSize: 15 * rate,
                  alignItems: 'center',
                  flex: 2,
                  borderWidth: 1,
                  borderRadius: 15 * rate,
                  borderColor: Colors.neutralGrey,
                }}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 * rate }}>
              <Text style={{
                flex: 1,
                ...Fonts.regular,
                color: Colors.neutralDark,
                fontSize: 15 * rate,
              }}
              >
                Mô tả
              </Text>
              <TextInput
                onChangeText={(text) => setmota(text)}
                value={mota}
                style={{
                  paddingHorizontal: 15 * rate,

                  ...Fonts.regular,
                  color: Colors.primaryPulple,
                  fontSize: 15 * rate,
                  alignItems: 'center',
                  flex: 2,
                  borderWidth: 1,
                  borderRadius: 15 * rate,
                  borderColor: Colors.neutralGrey,
                }}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 * rate }}>
              <Text style={{
                flex: 1,
                ...Fonts.regular,
                color: Colors.neutralDark,
                fontSize: 15 * rate,
              }}
              >
                Ảnh bìa
              </Text>
              <TextInput
                onChangeText={(text) => setimage(text)}
                value={image}
                style={{
                  paddingHorizontal: 15 * rate,

                  ...Fonts.regular,
                  color: Colors.primaryPulple,
                  fontSize: 15 * rate,
                  alignItems: 'center',
                  flex: 2,
                  borderWidth: 1,
                  borderRadius: 15 * rate,
                  borderColor: Colors.neutralGrey,
                }}
              />
            </View>

            <View style={{
              flexDirection: 'row',
              marginTop: 30 * rate,
            }}
            >
              <TouchableOpacity onPress={handleHideModalUpdateLogout}>
                <View style={{
                  width: 100 / 375 * width,
                  height: 40 / 375 * width,
                  backgroundColor: Colors.primaryRed,
                  borderRadius: 5 / 375 * width,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 10,
                  marginBottom: 10,
                }}
                >
                  <Text style={{
                    ...Fonts.bold,
                    fontSize: 15 * rate,
                    color: Colors.backgroundWhite,
                  }}
                  >
                    Hủy
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={handladdteITem}>
                <View style={{
                  width: 100 / 375 * width,
                  height: 40 / 375 * width,
                  backgroundColor: Colors.primaryGreen,
                  borderRadius: 5 / 375 * width,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 10,
                  marginBottom: 10,
                }}
                >
                  <Text style={{
                    ...Fonts.bold,
                    fontSize: 15 * rate,
                    color: Colors.backgroundWhite,
                  }}
                  >
                    Đồng ý
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default QuanLySanPham

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.backgroundWhite,
  },

})
