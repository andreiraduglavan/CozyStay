import { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native'
import { theme } from '../constants/theme'
import logo from '../../assets/cozystay-logo.png'
import { AntDesign } from '@expo/vector-icons'
import LocationCard from '../components/locations/LocationCard'
import { useNavigationContext } from '../context/NavigationContext'
import { useCalendarContext } from '../context/CalendarContext'
import { dateFormater } from '../utils/dateFormater'
import TouchableWithScaling from '../components/shared/TouchableWithScaling'

const Locations = () => {
  const { arrivalDate, departureDate } = useCalendarContext()
  const { rootNavigation } = useNavigationContext()

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Image source={logo} style={{width:120, height: 120*0.52}} />
      <View style={{paddingHorizontal: 14, width: '100%'}}>
        <View style={styles.calendarInput}>
          <TouchableWithScaling 
            onPress={() => rootNavigation.navigate('CalendarPicker') }
          > 
            <View style={styles.innerCalendarInput}>
              <AntDesign name="calendar" size={20} color={theme.colors.infoText} />
              <Text style={styles.calendarInputText}>{ !arrivalDate || !departureDate ? 'Check Availability' : `${dateFormater(arrivalDate)}, ${dateFormater(departureDate)}`}</Text>
            </View>
          </TouchableWithScaling>
        </View>
      </View>

      <FlatList 
        scrollEnabled={false}
        data={[1,2,3,4]}
        contentContainerStyle={{marginTop: 32, paddingHorizontal: 14}}
        renderItem={() => <LocationCard /> }
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 56+12,
    paddingBottom: 40
  },
  text: {
    color: theme.colors.text
  }, 
  calendarInput: {
    backgroundColor: theme.colors.card,
    marginTop: 20,
    padding: 16,
    borderColor: theme.colors.disabledText,
    borderWidth: 0.4,
    borderRadius: 100,
    width: '100%',
    shadowColor: 'black',
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 0},
  },
  innerCalendarInput: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  calendarInputText: {
    color: theme.colors.infoText, 
    fontWeight: '500', 
    marginLeft: 16
  }
})

export default Locations