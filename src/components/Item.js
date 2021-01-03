import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native'
import { Fonts, Colors, TextStyles } from '../../assets/styles'
import { images } from '../../assets/images'

const { width } = Dimensions.get('window')
const rate = width / 375

const RenderItemSP = ({ item, index }) => (
  <View style={{
    alignItems: 'center',
    width: 165 * rate,
    height: 220 * rate,
    marginRight: 19 * rate,
    marginTop: 19 * rate,

    backgroundColor: Colors.WHITE,
    borderRadius: 17 * rate,
    justifyContent: 'center',
    // eslint-disable-next-line no-dupe-keys
    // backgroundColor: Colors.backgroundWhite,
    borderWidth: 2,
    borderColor: Colors.neutralLight,

  }}
  >
    <View
      style={{
        alignItems: 'center',

      }}
    >
      <Image
        source={item.image}
        style={{
          width: 100 * rate,
          height: 100 * rate,
          borderRadius: 15 * rate,
        }}
        resizeMode="contain"
      />

    </View>

    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10 * rate,
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
        {item.title}
      </Text>
    </View>

    <View style={{
      width: 140 * rate,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

    }}
    >
      <Text style={{
        marginTop: 10 * rate,
        marginBottom: 10 * rate,
        fontSize: 12 * rate,
        ...Fonts.bold,
        color: Colors.primaryBlue,
      }}
      >
        {item.price}
        {' '}
        VND

      </Text>
      <Image
        source={images.them}
        style={{
          width: 35 * rate,
          height: 35 * rate,
        }}
      />
    </View>

  </View>

)

export default RenderItemSP
