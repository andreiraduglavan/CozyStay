import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native'
import { useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Calendar, DateData } from 'react-native-calendars'
import { theme } from '../constants/theme'
import { StackParamList } from '../types/navigation'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MarkedDates } from 'react-native-calendars/src/types'
import { getDatesInRange } from '../utils/getDates'
import { compareDates } from '../utils/compareDates'
import { bounceUp } from '../utils/Animations'
import BottomSheet from '@gorhom/bottom-sheet'
import { useCalendarContext } from '../context/CalendarContext'
import GuestSelectorBottomSheet from '../components/shared/CalendarPicker/GuestSelectorBottomSheet'
import CalendarPickerHeader from '../components/shared/CalendarPicker/CalendarPickerHeader'
import CalendarPickerFooter from '../components/shared/CalendarPicker/CalendarPickerFooter'

const screenWidth = Dimensions.get('screen').width

type Props = NativeStackScreenProps<StackParamList, 'CalendarPicker'>

const CalendarPicker = ({navigation}: Props) => {
  const maxNumberOfGuests = 12
  const { setArrivalDate, setDepartureDate } = useCalendarContext()
  const bounceAnim = useRef(new Animated.Value(0)).current
  const [markedDates, setMarkedDates] = useState<MarkedDates>({})
  const [checkInDate, setCheckInDate] = useState<string | null>(null)
  const [checkOutDate, setCheckOutDate] = useState<string | null>(null)
  const [indicationText, setIndicationText] = useState<string>('Select check-in date')
  const [showExclamationMark, setShowExclamationMark] = useState(false)
  const [numberOfAdults, setNumberOfAdults] = useState<number | null>(null)
  const [numberOfChildren, setNumberOfChildren] = useState<number | null>(null)

  const bottomSheetRef = useRef<BottomSheet>(null)

  const onDayPress = (e: DateData) => {
    const date = e.dateString
    let newMarkedDates = markedDates

    if (!checkInDate) {
      newMarkedDates[date] = {startingDay: true, endingDay: true, color: theme.colors.primary, textColor: 'white'}
      setCheckInDate(date)
      setMarkedDates(newMarkedDates)
      setIndicationText('Select check-out date')
    } else if (!checkOutDate) {
      if (compareDates(checkInDate, date)) {
        newMarkedDates[checkInDate] = {startingDay: true, color: theme.colors.primary, textColor: 'white'}
        newMarkedDates[date] = { endingDay: true, color: theme.colors.primary, textColor: 'white'}
        
        const innerDates = getDatesInRange(checkInDate, date)
        innerDates.forEach(date => newMarkedDates[date] = { color: theme.colors.primaryWithOpacity, textColor: 'white' })

        setMarkedDates(newMarkedDates)
        setCheckOutDate(date)
        setIndicationText(`${innerDates.length+1} nights at BarnHaus`)
      }
      
    } else {
      clearDates()
    }
    
  }

  const clearDates = () => {
    setCheckInDate(null)
    setCheckOutDate(null)
    setMarkedDates({})
    setIndicationText('Select check-in date')
  }

  const save = () => {
    if (numberOfAdults == null || !checkInDate || !checkOutDate) {
      setShowExclamationMark(true) 
      bounceUp(bounceAnim)
      return
    }

    setArrivalDate(checkInDate)
    setDepartureDate(checkOutDate)

    navigation.goBack()
  }

  const minus = (mode: 'adults' | 'children') => {
    setShowExclamationMark(false)

    if (mode == 'adults') {
      setNumberOfAdults(numberOfAdults => numberOfAdults-1)
    } else {
      setNumberOfChildren(numberOfChildren => numberOfChildren-1)
    }
  }

  const plus = (mode: 'adults' | 'children') => {
    setShowExclamationMark(false)

    if (mode == 'adults') {
      setNumberOfAdults(numberOfAdults => numberOfAdults+1)
    } else {
      setNumberOfChildren(numberOfChildren => numberOfChildren+1)
    }
  }

  const reset = () => {
    setNumberOfAdults(null)
    setNumberOfChildren(null)
  }


  return (
    <View style={{flex: 1}}> 
      <View style={styles.container}>
        
        <CalendarPickerHeader 
          clearDates={clearDates}
        />
        
        <Text style={styles.clientIndication}>{indicationText}</Text>
        
        <Calendar
          markingType='period'
          markedDates={markedDates}
          minDate={new Date().toISOString().slice(0,10)} //today date in format yyyy-mm-dd
          maxDate='2023-10-31'
          theme={{
            calendarBackground: theme.colors.background,
            arrowColor: theme.colors.primary,
            todayTextColor: theme.colors.primary,
          }}
          style={{
            width: screenWidth - 10,
            paddingBottom: 4
          }}
          showSixWeeks = {true}
          onDayPress={onDayPress}
        />
      </View>

      <CalendarPickerFooter 
          bottomSheetRef={bottomSheetRef}
          bounceAnim={bounceAnim}
          numberOfAdults={numberOfAdults}
          numberOfChildren={numberOfChildren}
          save={save}
          showExclamationMark={showExclamationMark}
        />

      <GuestSelectorBottomSheet 
        bottomSheetRef={bottomSheetRef}  
        maxNumberOfGuests={maxNumberOfGuests}
        minus={minus}
        numberOfAdults={numberOfAdults}
        numberOfChildren={numberOfChildren}
        plus={plus}
        reset={reset}
      />
      <StatusBar style='light' />
    </View>
  )
}

export default CalendarPicker

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