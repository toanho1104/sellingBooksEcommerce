import React, { useEffect, useState } from 'react'
import {
  View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Dimensions, FlatList, Image, TextInput,
} from 'react-native'

import FastImage from 'react-native-fast-image'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { images } from '../../../assets/images'
import { Colors, Fonts } from '../../../assets/styles'
import { Helpers, NavigationHelpers } from '../../utils'
import { SCREEN_NAME } from '../../configs'
import {
  userActions, categoryActions, productActions, cartActions, topkActions,
} from '../../redux/actions'

const { width } = Dimensions.get('window')
const rate = width / 375

const TopKScreen = () => {
  const dispatch = useDispatch()
  const [k, setk] = useState(__DEV__)

  const handlePressTopK = () => {
    dispatch(topkActions.gettopk({
      k,
    }, (response) => {
      console.log('topk', response)
      Helpers.showMess('Đăng nhập thành công', 'success')
      NavigationHelpers.navigateToScreen(SCREEN_NAME.TopKScreen)
    }))
  }

  return (
    <View style={styles.container}>

      <TextInput
        onChangeText={(text) => setk(text)}
      />
      <TouchableOpacity
        onPress={handlePressTopK}
      >
        <View style={{
          width: 30,
          height: 30,
          backgroundColor: '#111',
        }}
        />
      </TouchableOpacity>
    </View>

  )
}

export default TopKScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.backgroundWhite,
  },

})
