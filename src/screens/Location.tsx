import { View, Text, NativeModules, StatusBar, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParamList } from '../types/navigation'
import Galery from '../components/locations/LocationScreen/Galery'

type Props = NativeStackScreenProps<StackParamList, 'Location'>

const Location = ({navigation}: Props) => {
  const { StatusBarManager } = NativeModules
  const [sbHeight, setsbHeight] = useState<number>(StatusBar.currentHeight)


  useEffect(() => {
    if(Platform.OS === "ios") {
      StatusBarManager.getHeight((statusBarHeight: any) => {
        setsbHeight(Number(statusBarHeight.height))
      })
    }

    navigation.setOptions({
      headerBackTitleVisible: false
    })
  }, [])

  return (
    <View style={{marginTop: sbHeight + 40 }}>
      <Galery />
    </View>
  )
}

export default Location