import { View, Text, Animated, StyleSheet } from 'react-native'
import { theme } from '../../../constants/theme'
import { TouchableOpacity } from '@gorhom/bottom-sheet'
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import { AntDesign } from '@expo/vector-icons'

type Props = {
  bottomSheetRef: React.MutableRefObject<BottomSheetMethods>
  save: () => void
  numberOfAdults: number | null
  numberOfChildren: number | null
  bounceAnim: Animated.Value
  showExclamationMark: boolean
} 

const CalendarPickerFooter = ({ 
  bottomSheetRef, 
  bounceAnim, 
  numberOfAdults, 
  numberOfChildren, 
  showExclamationMark, 
  save
}: Props) => {
  
  return (
    <View style={styles.saveContainer}>
      <TouchableOpacity onPress={() => bottomSheetRef.current.snapToIndex(0) }>
        <Animated.View style={[{transform: [{translateY: bounceAnim}]}, styles.row]}>
          <View style={[styles.border, {marginRight: 6}]} >
            <Text style={styles.numberOfGuests}>{numberOfAdults < 1 ? 'Select the number of guests' : `${numberOfAdults} adults, ${numberOfChildren} children`}</Text>
          </View>
          <AntDesign name="exclamationcircleo" size={12} color="red" style={{opacity: showExclamationMark ? 1 : 0}} />
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity onPress={save}>
        <View style={{backgroundColor: theme.colors.text, paddingHorizontal: 32, paddingVertical: 8, borderRadius: 8}}>
          <Text style={{color: 'white', letterSpacing: 0.4}}>Save</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CalendarPickerFooter

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