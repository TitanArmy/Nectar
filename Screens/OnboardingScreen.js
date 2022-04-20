import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import App from '../App';
import { Text, View,SafeAreaView,Image,TouchableOpacity,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from './Cart';
import PagerView from 'react-native-pager-view';



const OnboardingScreen = ({navigation})=>{
    return(
        // <Onboarding
        // onSkip={() => navigation.navigate(Cart)}
        // onDone={() => navigation.navigate(Cart)}
        //  pages={[
        //    {
        //      backgroundColor: '#fff',
        //      image: <Image style={{flex:1}}  source={require('../Images/onboard.png')} />,
        //      title: 'Onboarding 1',
        //      subtitle: 'Done with React Native Onboarding Swiper',
        //     },
            
        //  ]}
        // />   

        <View >
      <PagerView >
        <View key="1">
          <Image source={require('../Images/onboard.png')}/>
        </View>
      </PagerView>
    </View>
    )
}
export default OnboardingScreen;