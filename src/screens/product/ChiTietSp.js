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
import { useDispatch } from 'react-redux'
import { images } from '../../../assets/images'
import { Colors, Fonts } from '../../../assets/styles'
import { DataItem, SCREEN_NAME } from '../../configs'
import { Helpers, NavigationHelpers } from '../../utils'
import {
  userActions, categoryActions, productActions, cartActions,
} from '../../redux/actions'

const { width } = Dimensions.get('window')
const rate = width / 375

const ChiTietSP = (props) => {
  const dispatch = useDispatch()
  const currentProduct = props?.route?.params
  console.log('curen', currentProduct.id)

  const themVaoGioHang = () => {
    dispatch(cartActions.addCarts({
      id: currentProduct.id,
      tensanpham: currentProduct.tensanpham,
      giaban: currentProduct.giaban,
      imageurl: currentProduct.image,
      soluong: 1,
    }, (response) => {
      if (response?.success) {
        dispatch(cartActions.getCarts({

        }, (responseCA) => {
          if (responseCA?.success) {
            console.log('pppppppppppppppppppppppppppp', response.success)
            Helpers.showMess('Cập nhât thành công', 'success')
            NavigationHelpers.navigateToScreen(SCREEN_NAME.gioHang)
          }
        }))
      }
    }))
    // NavigationHelpers.navigateToScreen(SCREEN_NAME.gioHang)
  }

  return (
    <View style={style.Container}>
      <View style={{
        flex: 0.8, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 2, width, borderColor: Colors.neutralLight, paddingHorizontal: 5 * rate,
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

      <View style={{ flex: 6, marginTop: 15 * rate }}>

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
              ...Fonts.bold, color: Colors.neutralDark, fontSize: 18 * rate, flex: 2,
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
              ...Fonts.bold, color: Colors.primaryBlue, fontSize: 15 * rate, flex: 2,
            }}
            >
              {currentProduct.tentacgia}
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
              Giá bán:
              {' '}
            </Text>
            <Text style={{
              ...Fonts.regular, color: Colors.primaryYellow, fontSize: 15 * rate, flex: 2,
            }}
            >
              {currentProduct.giaban}
            </Text>
          </View>

          <View style={{
            flexDirection: 'row',
          }}
          >

            <Text style={{ ...Fonts.regular, fontSize: 15 * rate, flex: 1 }}>Mô tả: </Text>
            <Text style={{ ...Fonts.regular, fontSize: 15 * rate, flex: 2 }}>{currentProduct.mota}</Text>
          </View>
        </View>

      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={themVaoGioHang}>
            <Animatable.View
              animation="fadeInRight"
              delay={350}
              duration={1100}
              style={{
                width: 300 * rate,
                height: 60 * rate,
                backgroundColor: Colors.primaryGreen,
                borderRadius: 10 * rate,
                justifyContent: 'center',

              }}
            >
              <View style={{ alignItems: 'center' }}>
                <Text style={{ ...Fonts.bold, color: '#ffff', fontSize: 17 * rate }}>Thêm vào giỏ hàng</Text>
              </View>
            </Animatable.View>
          </TouchableOpacity>

        </View>

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
