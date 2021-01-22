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

const DanhsachSPTopK = (props) => {
  console.tron.log({ props })
  const { route } = props
  const { params } = route
  const [idtopk, setidtopk] = useState(params?.id)
  console.log(idtopk)

  const topkitem = useSelector((state) => state.topkitem, (topkitem) => topkitem)
  console.tron.log({ topkitem })
  useEffect(() => {
    if (params?.id) {
      setidtopk(params?.id)
      LocSp()
    }
  }, [])
  const [sanPham, setSanPham] = useState()

  const LocSp = () => {
    const a = topkitem.filter((item) => {
      return item.idtopk === idtopk
    })
    setSanPham(a)
  }
  return (
    <View style={style.Container}>
      <View style={{
        flex: 0.7, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 2, width, borderColor: Colors.neutralLight, paddingHorizontal: 5 * rate,
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
          Danh Muc Sách
          
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
            data={sanPham}
            keyExtractor={(item, index) => `listcaata-${index}`}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            renderItem={({ item, index }) => {
              return (
                <View style={{
                  alignItems: 'center',
                  width: 165 * rate,
                  height: 230 * rate,
                  marginRight: 19 * rate,
                  marginTop: 15 * rate,
            
                  backgroundColor: Colors.WHITE,
                  borderRadius: 17 * rate,
                  justifyContent: 'center',
                  // eslint-disable-next-line no-dupe-keys
                  // backgroundColor: Colors.backgroundWhite,
                  borderWidth: 2,
                  borderColor: Colors.neutralLight,
            
                }}
                >
            
                  <TouchableOpacity>
                    <View
                      style={{
                        alignItems: 'center',
            
                      }}
                    >
                      <Image
                        source={{ uri: item.image }}
                        style={{
                          width: 100 * rate,
                          height: 100 * rate,
                          borderRadius: 15 * rate,
                          marginTop: 12 * rate,
                        }}
                        resizeMode="contain"
                      />
            
                    </View>
                    <View style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 8 * rate,
                      width: 140 * rate,
                      height: 50 * rate,
            
                    }}
                    >
                      <Text style={{
            
                        fontSize: 15 * rate,
                        ...Fonts.bold,
                        color: Colors.neutralDark,
                      }}
                      >
                        {item.tensanpham}
                      </Text>
                    </View>
                  </TouchableOpacity>
            
                  <View style={{
                    width: 140 * rate,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
            
                  }}
                  >
                    {/* <Text style={{
                      marginTop: 10 * rate,
                      marginBottom: 10 * rate,
                      fontSize: 12 * rate,
                      ...Fonts.bold,
                      color: Colors.primaryBlue,
                    }}
                    >
                      {a}
                      VND
                    </Text> */}
            
                    <CurrencyInput
                      value={item.giaban}
                      precisions={false}
                      editable={false}
                      style={{
                        marginTop: 8 * rate,
                        marginBottom: 8 * rate,
                        fontSize: 13 * rate,
                        ...Fonts.regular,
                        color: Colors.primaryBlue,
                        width: 88 * rate,
                      }}
                    />
            
                    <Text style={{
            
                      fontSize: 14 * rate,
                      ...Fonts.regular,
                      color: Colors.primaryBlue,
                      marginRight: 7 * rate,
                    }}
                    >
                      VND
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
export default DanhsachSPTopK

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
