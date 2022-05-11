import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../Screens/Cart';
import Checkout from '../Screens/Checkout';
import OrderAccepted from '../Screens/OrderAccepted'
import ErrorScreen from '../Screens/ErrorScreen'

const Stack = createStackNavigator();

const CartNavigation = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="cart" component={Cart} 
          options={{
                  headerShown:false
              }}
          />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="OrderAccepted" component={OrderAccepted} 
              options={{
                  headerShown:false
              }}
          />
          <Stack.Screen name="ErrorScreen" component={ErrorScreen} />
         
 
        </Stack.Navigator>
      );
}

export default CartNavigation