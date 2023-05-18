import { StatusBar } from 'expo-status-bar'
import { hasHomeIndicator, theme } from './src/constants/theme'
import { View } from 'react-native'
import StackNavigator from './src/screens/MainNavigation'
import { NavigationContext } from './src/context/NavigationContext'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { CalendarContext } from './src/context/CalendarContext'

export default function App() {
  return (
    <NavigationContext>
      <CalendarContext>
        <GestureHandlerRootView style={{flex: 1}}>
        <View style={{backgroundColor: theme.colors.background,flex: 1, paddingBottom: hasHomeIndicator ? 30 : 0 }}>
            <StackNavigator />
            <StatusBar style={theme.dark == true ? 'light' : 'dark'} />
          </View>
        </GestureHandlerRootView>
      </CalendarContext>
    </NavigationContext>
  )
}
