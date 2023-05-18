import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { theme } from '../../constants/theme'
import { ProfileStackParamList } from '../../types/navigation'
import { NavigationContainer } from '@react-navigation/native'

import Profile from '../Profile'

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>()

const ProfileStackNavigator = () => {
  return (
    <NavigationContainer theme={theme} independent={true}>
      <ProfileStack.Navigator>
        <ProfileStack.Screen 
          name='Profile' 
          component={Profile}
          options={{
            headerLargeTitle: true, 
            headerTitleStyle: {color: theme.colors.primary},
            headerStyle:{backgroundColor: theme.colors.background}, 
            headerShadowVisible: false,
          }} 
        />
      </ProfileStack.Navigator>
    </NavigationContainer>
  )
}

export default ProfileStackNavigator