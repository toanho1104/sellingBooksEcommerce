import React from 'react'
import {
  View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Dimensions, FlatList,
} from 'react-native'
import Swiper from 'react-native-swiper'
import FastImage from 'react-native-fast-image'
import * as Animatable from 'react-native-animatable'
import { images } from '../../../assets/images'
import { TitleDSSanpham, Item } from '../../components'
import { DataItem } from '../../configs'
import { Colors } from '../../../assets/styles'

const { width } = Dimensions.get('window')
const rate = width / 375

const trangChu = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.swiper}>
          <Swiper
            autoplay
            autoplayTimeout={4.5}
            showsButtons
            style={styles.wrapper}
          >
            <View style={styles.slide}>
              <FastImage
                style={styles.image}
                source={images.sachhay1}
                resizeMode="cover"
              />
            </View>
            <View style={styles.slide}>
              <FastImage
                style={styles.image}
                source={images.sachhay2}
                resizeMode="cover"
              />
            </View>
            <View style={styles.slide}>
              <FastImage
                style={styles.image}
                source={images.sachhay3}
                resizeMode="cover"
              />
            </View>
          </Swiper>
        </View>

        <View style={{
          width: 350 * rate,
        }}
        >
          <TitleDSSanpham title="Sản phẩm bán chạy nhất" />
        </View>

        <Animatable.View
          animation="bounceInRight"
          delay={350}
          duration={1100}
          style={{
            width: 350 * rate,
          }}
        >
          <FlatList
            style={{}}
            data={DataItem}
            keyExtractor={(item, index) => `list-user-${index}`}
            renderItem={Item}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </Animatable.View>

        <View style={{
          width: 350 * rate,
        }}
        >
          <TitleDSSanpham title="Sản phẩm ngẩu nhiên" />
        </View>

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
            data={DataItem}
            keyExtractor={(item, index) => `list-user-${index}`}
            renderItem={Item}
            horizontal

            showsHorizontalScrollIndicator={false}
          // numColumns={2}
          />
        </Animatable.View>

      </ScrollView>
    </View>
  )
}
export default trangChu
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.backgroundWhite,
  },
  swiper: {
    height: 180 * rate,
    width: 353 * rate,
    borderRadius: 17 * rate,
    marginTop: 15,
    borderWidth: 2,
    borderColor: Colors.neutralLight,
  },
  wrapper: {

  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  image: {
    width: 350 * rate,
    flex: 1,
    borderRadius: 17 * rate,
  },
})
