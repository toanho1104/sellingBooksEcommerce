import React, { useState, useEffect } from 'react'
import {
  View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Dimensions, FlatList, Image, TextInput,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import * as Animatable from 'react-native-animatable'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { images } from '../../../assets/images'
import { Colors, Fonts, TextStyles } from '../../../assets/styles'
import { Danhsachsp, SCREEN_NAME } from '../../configs'
import { Helpers, NavigationHelpers } from '../../utils'
import { TitleDSSanpham, Item } from '../../components'

const { width } = Dimensions.get('window')
const rate = width / 375
const numColumns = 4
const calSize = width / numColumns
const khamPha = (props) => {
  const categories = useSelector(createSelector((state) => state.categories, (categories) => categories))
  console.log(categories)
  const products = useSelector((state) => state.products, (products) => products)

  const [search, setSearch] = useState('')
  const [filteredDataSource, setFilteredDataSource] = useState([])
  const [masterDataSource, setMasterDataSource] = useState([])

  useEffect(() => {
    setMasterDataSource(products)
    // setFilteredDataSource(products)
  })

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(
        (item) => {
          const itemData = item.tensanpham
            ? item.tensanpham.toUpperCase()
            : ''.toUpperCase()
          const textData = text.toUpperCase()
          return itemData.indexOf(textData) > -1
        }
      )
      setFilteredDataSource(newData)
      setSearch(text)
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource)
      setSearch(text)
    }
  }

  // const [tensach, settensach] = useState()
  // const [sanPham, setSanPham] = useState()
  // const handleSeach = () => {
  //   useEffect(() => {
  //     settensach(tensach)
  //     LocSp()
  //   }, [])

  //   const LocSp = () => {
  //     const a = products.filter((item) => {
  //       console.log('aaaaaaaaaaaaaaaaaaaaaaa', item)
  //       return item.tensanpham === tensach
  //     })
  //     setSanPham(a)
  //   }
  // }

  const handleViewCategoriesDetail = (item) => {
    NavigationHelpers.navigateToScreen(SCREEN_NAME.DanhSachSP, { id: item.id, tentheloai: item.tentheloai })
  }
  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15 * rate,
        paddingHorizontal: 15 * rate,
      }}
      >

        <View style={{
          height: 50,
          borderRadius: 15,
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: '#DADADA',
          flex: 1,
        }}
        >

          <TextInput
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
            placeholder="Tìm kiếm sản phẩm"
            style={{ marginLeft: 10, flex: 1 }}
          />
          <TouchableOpacity
            onPress={{}}
          >
            <Image
              source={images.timkiem}
              style={{ width: 25 * rate, height: 25 * rate, marginRight: 7 * rate }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{
        paddingHorizontal: 15 * rate,
        borderBottomWidth: 2,
        borderBottomColor: Colors.neutralLight,
        marginTop: 10 * rate,
      }}
      >
        <Text style={{ ...Fonts.bold, fontSize: 18 * rate, color: Colors.neutralDark }}> Danh mục sản phẩm</Text>
      </View>

      <View style={{}}>
        <FlatList
          style={{ marginBottom: 24, marginTop: 12 }}
          showsHorizontalScrollIndicator={false}
          data={categories}
          extraData={categories}
          keyExtractor={(item, index) => `list-categories-${index}`}
          numColumns={numColumns}
          columnWrapperStyle={{ marginBottom: 16 }}
          renderItem={({ item, index }) => {
            console.tron.log({ item })
            return (
              <TouchableOpacity onPress={() => handleViewCategoriesDetail(item)}>
                <Animatable.View
                  animation="tada"
                  delay={350}
                  duration={1100}
                  style={{ alignItems: 'center', width: calSize, height: 80 * rate }}
                >
                  <View style={{
                    width: 70 * rate,
                    height: 70 * rate,
                    // borderWidth: StyleSheet.hairlineWidth,
                    borderColor: Colors.neutralLight,
                    justifyContent: 'center',
                    alignItems: 'center',

                  }}
                  >
                    <FastImage
                      source={{ uri: item.imageurl }}
                      style={{ width: 60 * rate, height: 60 * rate }}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={{
                    // ...TextStyles.captionNormalTextRegular,
                    color: Colors.neutralGrey,
                    marginTop: 8 * rate,
                    width: 75 * rate,
                    textAlign: 'center',

                    height: 20 * rate,
                  }}
                  >
                    {item.tentheloai}

                  </Text>
                </Animatable.View>
              </TouchableOpacity>
            )
          }}
        />
      </View>

      <View style={{
        paddingHorizontal: 15 * rate,
        borderBottomWidth: 2,
        borderBottomColor: Colors.neutralLight,
        marginTop: 1 * rate,
      }}
      >
        <Text style={{ ...Fonts.bold, fontSize: 18 * rate, color: Colors.neutralDark }}> Danh sách sản phẩm</Text>
      </View>
      <View style={{
        flex: 6, marginTop: 15 * rate, borderwidth: 2, alignItems: 'center',
      }}
      >

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
            data={filteredDataSource}
            keyExtractor={(item, index) => `listcaata-${index}`}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            renderItem={({ item, index }) => {
              return (
                <Item
                  item={item}
                />
              )
            }}
          />
        </Animatable.View>
      </View>
    </View>
  )
}
export default khamPha
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
  },
})
