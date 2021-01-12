import React from 'react'
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

const { width } = Dimensions.get('window')
const rate = width / 375
const numColumns = 4
const calSize = width / numColumns
const khamPha = () => {
  const categories = useSelector(createSelector((state) => state.categories, (categories) => categories))
  const handleViewCategoriesDetail = (item) => {
    NavigationHelpers.navigateToScreen(SCREEN_NAME.DanhSachSP, { id: item.id })
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
          <Image
            source={images.timkiem}
            style={{ width: 25 * rate, height: 25 * rate, marginLeft: 7 * rate }}
          />
          <TextInput
            placeholder="Tìm kiếm sản phẩm"
            style={{ marginLeft: 10, flex: 1 }}
          />
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

      <View>
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
                  style={{ alignItems: 'center', width: calSize }}
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
                    marginTop: 8,
                    width: 75 * rate,
                    textAlign: 'center',

                    height: 30,
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
