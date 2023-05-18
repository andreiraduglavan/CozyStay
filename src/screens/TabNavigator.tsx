import { NavigationContainer } from '@react-navigation/native'
import { theme } from '../constants/theme'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, AntDesign, MaterialIcons, Octicons} from '@expo/vector-icons'
import { BottomTabParamList, StackParamList } from '../types/navigation'
import SearchStackNavigator from './StackNavigators/SearchStackNavigator'
import CartStackNavigator from './StackNavigators/CartStackNavigator'
import ProfileStackNavigator from './StackNavigators/ProfileStackNavigator'
import LocationsStackNavigator from './StackNavigators/LocationsStackNavigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect } from 'react'
import { useNavigationContext } from '../context/NavigationContext'

const Tab = createBottomTabNavigator<BottomTabParamList>()

type Props = NativeStackScreenProps<StackParamList, 'TabNavigator'>

const TabNavigator = ({navigation}: Props) => {
  const { setRootNavigation } = useNavigationContext()
  
  useEffect(() => {
    setRootNavigation(navigation)
  }, [])

  return (
    <NavigationContainer theme={theme} independent={true} >
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          headerShown:false,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.infoText,
          tabBarStyle: { height: 50 },
          tabBarActiveBackgroundColor: theme.dark == true ? theme.colors.background : theme.colors.card,
          tabBarInactiveBackgroundColor: theme.dark == true ? theme.colors.background : theme.colors.card, 
          tabBarIcon: ({focused, color, size }) => {
            if ( route.name =='Locations' ) {
              return <Ionicons name="location-outline" size={size} color={color} />
            } 
            if ( route.name =='Search' ) {
              return <AntDesign name="calendar" size={size} color={color} />
            } 
            if ( route.name =='Cart' ) {
              return <MaterialIcons name="landscape" size={size} color={color} />
            } 
            if ( route.name =='Profile' ) {
              return <Octicons name="person" size={size} color={color} />
            } 
          }
        })}
      >
        <Tab.Screen name="Locations" component={LocationsStackNavigator} />
        <Tab.Screen name="Search" component={SearchStackNavigator} options={{tabBarLabel: 'Bookings'}} />
        <Tab.Screen name="Cart" component={CartStackNavigator} options={{tabBarLabel: 'Explore'}} />
        <Tab.Screen name="Profile" component={ProfileStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator