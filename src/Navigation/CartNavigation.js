import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../Screens/Cart';
import Checkout from '../Screens/Checkout';
import OrderAccepted from '../Screens/OrderAccepted'
import ErrorScreen from '../Screens/ErrorScreen'
import Delivery from '../Screens/Account/Delivery'
import Promo from '../Screens/Account/Promo';
import Payment from '../Screens/Account/Payment'

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
          <Stack.Screen name="Delivery" component={Delivery} />
          <Stack.Screen name="Promo" component={Promo} />
          <Stack.Screen name="Payment" component={Payment} />
         
 
        </Stack.Navigator>
      );
}

export default CartNavigation