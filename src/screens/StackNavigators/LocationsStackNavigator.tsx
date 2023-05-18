import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { theme } from '../../constants/theme'
import { LocationsStackParamList } from '../../types/navigation'
import { NavigationContainer } from '@react-navigation/native'
import Locations from '../Locations'


const LocationsStack = createNativeStackNavigator<LocationsStackParamList>()

const LocationsStackNavigator = () => {
  return (
    <NavigationContainer theme={theme} independent={true}>
      <LocationsStack.Navigator>
        <LocationsStack.Screen 
          name='Locations' 
          component={Locations}
          options={{
            headerLargeTitle: true, 
            headerShown: false,
            headerTitleStyle: {color: theme.colors.primary},
            headerStyle:{backgroundColor: theme.colors.background}, 
            headerShadowVisible: false,
          }} 
        />
      </LocationsStack.Navigator>
    </NavigationContainer>
  )
}

export default LocationsStackNavigator