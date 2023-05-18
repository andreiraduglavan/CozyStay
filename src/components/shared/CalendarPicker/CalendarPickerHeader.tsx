import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { theme } from '../../../constants/theme'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParamList } from '../../../types/navigation'

type NavigationProps = NativeStackScreenProps<StackParamList , 'CalendarPicker'>
type Props = {
  clearDates: () => void
}

const CalendarPickerHeader = ({ clearDates }: Props) => {
  const navigation = useNavigation<NavigationProps['navigation']>()

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack() }>
        <AntDesign name="close" size={24} color={theme.colors.infoText} />  
      </TouchableOpacity>
      <TouchableOpacity onPress={clearDates} >
        <Text style={styles.clear}>Clear dates</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CalendarPickerHeader

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    paddingTop: 24,
    flexDirection: 'row',
    paddingHorizontal: 14,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  clear: {
    fontSize: 16, 
    letterSpacing: 0.2, 
    color: theme.colors.infoText
  },
  numberOfGuests: {
    fontSize: 14, 
    letterSpacing: 0.2, 
    color: theme.colors.infoText
  },
  clientIndication: {
    fontSize: 22,
    fontWeight: '500',
    letterSpacing: 0.3,
    color: theme.colors.text,
    paddingHorizontal: 14,
    paddingTop: 36,
    alignSelf: 'flex-start',
    flexGrow: 1
  }, 
  saveContainer: {
    height: 80,
    borderTopWidth: 1,
    borderColor: theme.colors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14
  },
  border: {
    borderBottomColor: theme.colors.infoText, 
    borderBottomWidth: 1
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoText: {
    color: theme.colors.infoText, 
    fontSize: 13, 
    letterSpacing: 0.2, 
    marginTop: 16
  },
  adultsSelectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: theme.colors.text,
    fontSize: 16,
    letterSpacing: 0.4
  },
  childrenSelectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24
  }
})