import React, { useState, useEffect } from 'react'
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import CurrencyInput from 'react-native-currency-input'

import * as Animatable from 'react-native-animatable'
import FastImage from 'react-native-fast-image'
import { useDispatch, useSelector } from 'react-redux'
import { images } from '../../../assets/images'
import { Colors, Fonts } from '../../../assets/styles'
import { DataItem, SCREEN_NAME } from '../../configs'
import { Helpers, NavigationHelpers } from '../../utils'
import {
  userActions, categoryActions, productActions, cartActions,
} from '../../redux/actions'
import { TitleDSSanpham, Item } from '../../components'

const { width } = Dimensions.get('window')
const rate = width / 375

const ChiTietSP = (props) => {
  const dispatch = useDispatch()
  const currentProduct = props?.route?.params
  const [idsanphamtopk, setidsanphamtopk] = useState(currentProduct?.id)
  console.tron.log({ sanPham })
  const [isShowModalLogout, setIsShowModalLogout] = useState(false)
  const handleHideModalLogout = () => {
    setIsShowModalLogout(false)
  }

  const handleShowModalLogout = () => {
    setIsShowModalLogout(true)
  }

  const handleDeleteitem = () => {
    dispatch(productActions.deleteProducts({
      id: currentProduct.id,
    }, (response) => {
      if (response?.success) {
        dispatch(productActions.getProducts({

        }, (responsP) => {
          if (responsP?.success) {
            Helpers.showMess('Xóa sản phẩm thành công', 'success')
            NavigationHelpers.navigateToScreen(SCREEN_NAME.QuanLySanPhamScreen)
            setIsShowModalLogout(false)
          }
        }))
      }
    }))
  }

  useEffect(() => {
    if (currentProduct?.id) {
      setidsanphamtopk(currentProduct?.id)
      LocSp()
    }
  }, [])

  const [sanPham, setSanPham] = useState()

  const LocSp = () => {
    const a = sanphamtopk.filter((item) => {
      return item.idsanpham !== idsanphamtopk
    })
    setSanPham(a)
  }

  const products = useSelector((state) => state.products, (products) => products)
  // const topkitem = useSelector((state) => state.topkitem, (topkitem) => topkitem)
  const sanphamtopk = useSelector((state) => state.sanphamtopk, (sanphamtopk) => sanphamtopk)
  console.log(sanphamtopk)

  return (
    <View style={style.Container}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        width,
        borderColor: Colors.neutralLight,
        paddingHorizontal: 5 * rate,
        height: 50 * rate,
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
        <Text style={{ ...Fonts.bold, fontSize: 20 * rate, color: Colors.neutralDark }}>Chi tiết sản phẩm</Text>
      </View>
      <ScrollView>

        <View style={{ marginTop: 15 * rate }}>

          <View style={{ alignItems: 'center' }}>
            <FastImage
              source={{ uri: currentProduct.image }}
              style={{ width: 200, height: 200 }}
              resizeMode="contain"
            />
          </View>

          <View style={{
            padding: 15 * rate,
            width,

          }}
          >
            <View style={{
              flexDirection: 'row',
            }}
            >

              <Text style={{
                ...Fonts.bold, color: Colors.neutralDark, fontSize: 18 * rate, flex: 1,
              }}
              >
                Tên sách:
              </Text>
              <Text style={{
                ...Fonts.bold, color: Colors.neutralDark, fontSize: 18 * rate, flex: 2, marginLeft: 6 * rate,
              }}
              >
                {currentProduct.tensanpham}

              </Text>
            </View>
            <View style={{
              flexDirection: 'row',
            }}
            >

              <Text style={{
                ...Fonts.bold, color: Colors.neutralDark, fontSize: 15 * rate, flex: 1,
              }}
              >
                Tác giả:
                {' '}
              </Text>
              <Text style={{
                ...Fonts.bold, color: Colors.primaryBlue, fontSize: 15 * rate, flex: 2, marginLeft: 6 * rate,
              }}
              >
                {currentProduct.tentacgia}
              </Text>
            </View>

            <View style={{
              flexDirection: 'row',

              alignItems: 'center',
            }}
            >

              <Text style={{
                ...Fonts.bold, color: Colors.neutralDark, fontSize: 15 * rate, flex: 1,
              }}
              >
                Giá bán:
                {' '}
              </Text>
              <View style={{ flexDirection: 'row', flex: 2, alignItems: 'center' }}>
                <CurrencyInput
                  value={currentProduct.giaban}
                  precisions={false}
                  editable={false}
                  style={{
                    alignItems: 'center',
                    fontSize: 17,
                    height: 40,
                    color: Colors.primaryGreen,
                    marginLeft: 0,
                  }}
                />
                <Text style={{ color: Colors.primaryGreen, marginBottom: 5 * rate, fontSize: 15 * rate }}>VND</Text>

              </View>
              {/* <Text style={{
                ...Fonts.regular, color: Colors.primaryYellow, fontSize: 15 * rate, flex: 2,
              }}
              >
                {currentProduct.giaban}
              </Text> */}

            </View>

            <View style={{
              flexDirection: 'row',
            }}
            >

              <Text style={{ ...Fonts.regular, fontSize: 15 * rate, flex: 1 }}>Mô tả: </Text>
              <Text style={{
                ...Fonts.regular, fontSize: 15 * rate, flex: 2, marginLeft: 6 * rate,
              }}
              >
                {currentProduct.mota}
              </Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity onPress={{}}>
            <View
              style={{
                width: 100 * rate,
                height: 60 * rate,
                backgroundColor: Colors.primaryGreen,
                borderRadius: 10 * rate,
                justifyContent: 'center',
                marginTop: 10 * rate,
                marginBottom: 30 * rate,
                marginRight: 40 * rate,
              }}
            >
              <View style={{ alignItems: 'center' }}>
                <Text style={{ ...Fonts.bold, color: '#ffff', fontSize: 17 * rate }}>Cập nhật</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleShowModalLogout}>
            <View
              style={{
                width: 100 * rate,
                height: 60 * rate,
                backgroundColor: Colors.primaryGreen,
                borderRadius: 10 * rate,
                justifyContent: 'center',
                marginTop: 10 * rate,
                marginBottom: 30 * rate,
              }}
            >
              <View style={{ alignItems: 'center' }}>
                <Text style={{ ...Fonts.bold, color: '#ffff', fontSize: 17 * rate }}>Xóa</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal
        transparent
        visible={isShowModalLogout}
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
            height: 200 * rate,
            backgroundColor: Colors.backgroundWhite,
            borderRadius: 10 / 375 * width,
            alignItems: 'center',
            padding: 30 * rate,
            justifyContent: 'center',

          }}
          >

            <Text style={{
              ...Fonts.bold, fontSize: 20 * rate, color: Colors.primaryRed,
            }}
            >
              Xác nhận xóa!
            </Text>

            <View style={{
              flexDirection: 'row',
              marginTop: 30 * rate,
            }}
            >

              <TouchableOpacity onPress={handleHideModalLogout}>
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

              <TouchableOpacity onPress={handleDeleteitem}>
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
