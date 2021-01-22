import React, { useRef, useState } from 'react'
import {
  View, StyleSheet, Modal, Dimensions,
  SafeAreaView, TouchableOpacity, Animated, Text, Image,
  TextInput,
} from 'react-native'

import FastImage from 'react-native-fast-image'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { images } from '../../../assets/images'
import { Colors, Fonts, TextStyles } from '../../../assets/styles'
import { Helpers, NavigationHelpers } from '../../utils'
import { SCREEN_NAME } from '../../configs'
import {
  gioHang, khamPha, trangChu, ThongTinTaiKhoan,
} from '..'
import {
  userActions, categoryActions, productActions, cartActions, topkActions, topkitemActions, historyActions,
} from '../../redux/actions'

const { width } = Dimensions.get('window')
const rate = width / 375

const handlePressqlsp = () => {
  NavigationHelpers.navigateToScreen(SCREEN_NAME.QuanLySanPhamScreen)
}

const dangxuat = () => {
  NavigationHelpers.navigateToScreen(SCREEN_NAME.LoginScreen)
}

const Admin = (props) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user, (user) => user)

  const [isShowModalLogout, setIsShowModalLogout] = useState(false)
  const aniShowModal = useRef(new Animated.Value(0)).current

  const lichsumuahang = () => {
    dispatch(historyActions.getHoadon({

    }, (response) => {
      NavigationHelpers.navigateToScreen(SCREEN_NAME.LichSuDonHangScreen)
    }))
  }

  const handlePressTopK = () => {
    dispatch(topkActions.gettopk({

    }, (response) => {
      if (response?.success) {
        dispatch(topkitemActions.getitemtopk({

        }, (response) => {
          NavigationHelpers.navigateToScreen(SCREEN_NAME.SanPhamTopK)
        }))
      }
    }))
  }
  const handlePressMoreCategory = () => {
    NavigationHelpers.navigateToScreen(SCREEN_NAME.ThongTinTaiKhoan)
  }

  const handleShowModalLogout = () => {
    setIsShowModalLogout(true)
    Animated.spring(aniShowModal, {
      toValue: 1,
      tension: 60,
      useNativeDriver: true,
    }).start()
  }
  const handleHideModalLogout = () => {
    setIsShowModalLogout(false)

    Animated.spring(aniShowModal, {
      toValue: 0,
      tension: 60,
      useNativeDriver: true,
    }).start(() => { })
  }

  const tranY = aniShowModal.interpolate({
    inputRange: [0, 1],
    outputRange: [600, 0],
  })
  return (
    <View style={styles.container}>
      <View style={{
        paddingHorizontal: 15 * rate,

      }}
      >
        <View style={{
          alignItems: 'center', height: 130 * rate, marginTop: 40 * rate,
        }}
        >
          <View>
            <FastImage
              source={user[0].imageurl ? { uri: user[0].imageurl } : images.imageAvatar}
              style={{ height: 80 * rate, width: 80 * rate, borderRadius: 30 * rate }}
              resizeMode="cover"
            />
          </View>
          <View style={{}}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ ...Fonts.bold, fontSize: 20 * rate, color: Colors.neutralDark }}>{user[0].hovaten}</Text>

            </View>
          </View>
        </View>
      </View>

      <View style={{

        borderBottomWidth: 2,
        borderBottomColor: Colors.neutralLight,
      }}
      />
      <ItemMain
        icon={images.thongtintaikhoan}
        title="Thông tin tài khoản"
        onPress={handlePressMoreCategory}
      />
      <ItemMain
        icon={images.topk}
        title="Nhóm mặt hàng phổ biến"
        onPress={handlePressTopK}
      />
      <ItemMain
        icon={images.phuongthucthanhtoan}
        title="Quản lý sản phẩm"
        onPress={handlePressqlsp}
      />
      <ItemMain
        icon={images.quanlydonhang}
        title="Quản lý đơn hàng"
        onPress={lichsumuahang}
      />
      <ItemMain
        icon={images.dangxuat}
        title="Đăng xuất"
        onPress={handleShowModalLogout}
      />

      <Modal
        transparent
        visible={isShowModalLogout}
      >
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.7)',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          <Animated.View style={[{
            width: 330 / 375 * width,
            height: 250 / 375 * width,
            backgroundColor: Colors.backgroundWhite,
            borderRadius: 10 / 375 * width,
            alignItems: 'center',
            padding: 15,
          },
          {
            transform: [{
              translateY: tranY,
            }],
          },
          ]}
          >
            <View style={{ alignSelf: 'flex-end' }}>
              <TouchableOpacity
                onPress={handleHideModalLogout}
              >
                <FastImage
                  source={images.dong}
                  style={{ width: 15 / 375 * width, height: 15 / 375 * width }}
                />
              </TouchableOpacity>
            </View>

            <FastImage
              source={images.bye}
              style={{ width: 55 / 375 * width, height: 55 / 375 * width, marginBottom: 15 / 375 * width }}
            />
            <Text style={{

              color: Colors.neutralDark,
              fontSize: 15 * rate,
            }}
            >
              Hẹn gặp lại!
            </Text>
            <Text style={{

              color: Colors.neutralDark,
              marginTop: 19 / 375 * width,
              marginBottom: 24 / 375 * width,
              fontSize: 15 * rate,
            }}
            >
              Bạn muốn đăng xuất ngay bây giờ!
            </Text>

            <TouchableOpacity
              onPress={dangxuat}
            >

              <View style={{
                width: 250 / 375 * width,
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
                  Đăng xuất
                </Text>
              </View>

            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>

    </View>

  )
}
export default Admin
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Colors.backgroundWhite,
  },
  Borderbottom: {
    width: 350 * rate,
    // borderBottomWidth: 1,
    // borderBottomColor: Colors.neutralGrey,
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
})

const ItemMain = (props) => {
  const { icon, title, onPress } = props
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View>
        <View style={styles.Borderbottom} />
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 45 * rate,
          justifyContent: 'space-between',
          paddingHorizontal: 15 * rate,
        }}
        >
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
          >
            <Image
              source={icon}
              style={{
                height: 25 * rate,
                width: 25 * rate,
                tintColor: Colors.primaryGreen,
              }}
              resizeMode="contain"
            />
            <Text style={{
              marginLeft: 7 * rate,
              ...Fonts.bold,
              fontSize: 16 * rate,
              color: Colors.neutralDark,
              alignItems: 'center',
              marginTop: 5 * rate,
            }}
            >
              {title}
            </Text>
          </View>

          <Image
            source={images.go}
            style={{ height: 18 * rate, width: 18 * rate }}
            resizeMode="contain"
          />

        </View>

      </View>
    </TouchableOpacity>
  )
}

ItemMain.prototype = {
  onPress: PropTypes.func.isRequired,
}
