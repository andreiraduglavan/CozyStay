import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { theme } from '../../constants/theme'
import { CartStackParamList } from '../../types/navigation'
import { NavigationContainer } from '@react-navigation/native'

import Cart from '../Cart'

const CartStack = createNativeStackNavigator<CartStackParamList>()

const CartStackNavigator = () => {
  return (
    <NavigationContainer theme={theme} independent={true}>
      <CartStack.Navigator>
        <CartStack.Screen 
          name='Cart' 
          component={Cart}
          options={{
            headerLargeTitle: true, 
            headerTitleStyle: {color: theme.colors.primary},
            headerStyle:{backgroundColor: theme.colors.background}, 
            headerShadowVisible: false,
          }} 
        />
      </CartStack.Navigator>
    </NavigationContainer>
  )
}

export default CartStackNavigator