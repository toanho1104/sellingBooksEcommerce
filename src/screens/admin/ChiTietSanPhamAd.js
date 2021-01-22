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
  TextInput,

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
  const author = useSelector((state) => state.author, (author) => author)

  const [selectedValue, setSelectedValue] = useState('java')
  const dispatch = useDispatch()
  const currentProduct = props?.route?.params
  const gia = currentProduct.giaban

  const [tensach, settensach] = useState(__DEV__ ? currentProduct.tensanpham : '')
  const [giaban, setgiaban] = useState(__DEV__ ? gia.toString() : '')
  const [tacgia, settacgia] = useState(__DEV__ ? currentProduct.idtacgia : '')
  const [theloai, settheloai] = useState(__DEV__ ? currentProduct.idtheloai : '')
  const [mota, setmota] = useState(__DEV__ ? currentProduct.mota : '')
  const [image, setimage] = useState(__DEV__ ? currentProduct.image : '')

  const [idsanphamtopk, setidsanphamtopk] = useState(currentProduct?.id)

  const [isShowModalLogout, setIsShowModalLogout] = useState(false)
  const handleHideModalLogout = () => {
    setIsShowModalLogout(false)
  }

  const handleShowModalLogout = () => {
    setIsShowModalLogout(true)
  }

  const [isShowModalUpdateLogout, setIsShowModalUpdateLogout] = useState(false)
  const handleHideModalUpdateLogout = () => {
    setIsShowModalUpdateLogout(false)
  }

  const handleShowModalUpdateLogout = () => {
    setIsShowModalUpdateLogout(true)
  }

  const handleUpdateITem = () => {
    dispatch(productActions.updateProducts({
      id: currentProduct.id,
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
            setIsShowModalLogout(false)
          }
        }))
      }
    }))
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
            <Image
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
          <TouchableOpacity onPress={handleShowModalUpdateLogout}>
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
              Cập nhật sản phẩm
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

              <TouchableOpacity onPress={handleUpdateITem}>
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
