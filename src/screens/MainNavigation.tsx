import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View } from 'react-native'
import { theme } from '../constants/theme'
import { StackParamList } from '../types/navigation'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigator'
import CalendarPicker from './CalendarPicker'
import Location from './Location'
import { useNavigationContext } from '../context/NavigationContext'
import TouchableWithScaling from '../components/shared/TouchableWithScaling'
import { Feather } from '@expo/vector-icons'

const Stack = createNativeStackNavigator<StackParamList>()

const StackNavigator = () => {
  const { rootNavigation } = useNavigationContext()

  return (
    <NavigationContainer theme={theme} independent={true}>
      <Stack.Navigator>
        <Stack.Screen 
          name='TabNavigator' 
          component={TabNavigator}
          options={{
            headerShown: false
          }} 
        />
        <Stack.Screen 
          name='CalendarPicker' 
          component={CalendarPicker}
          options={{
            headerShown: false,
            presentation: 'modal'
          }} 
        />
        <Stack.Screen 
          name='Location' 
          component={Location}
          options={{
            presentation: 'card',
            headerTransparent: true,
            headerTitle: '',
            headerLeft: () => (
              <TouchableWithScaling onPress={() => rootNavigation.goBack() }>
                <View>
                  <Feather name="chevron-left" size={28} color='white' />
                </View>
              </TouchableWithScaling>
            )
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator