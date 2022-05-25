import { Button, Linking, View, StyleSheet } from 'react-native';
import React from 'react';
import AppLink from 'react-native-app-link';


export default function Example () {
   const onPressButton = () => {
    // console.log("Link clicked for ");


    // maybeOpenURL(url, config) Opens link if app is present. If not, it opens an app store to prompt the user to download it.
    
    AppLink.maybeOpenURL("shopzcoin://", { appName: "Shopzcoin", appStoreId: "1444565782", appStoreLocale:"my", playStoreId:"com.wcv.shopzcoin" }).then(() => {
      // console.log('User pressed');
    })
    .catch((err) => {
      // handle error
    });
  };

   // button where user click to go on playstore

    return (
      <View style={styles.container}>
      <Button
        style={styles.button}
        onPress={onPressButton}
        title="Open Shopzcoin App"
      />
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
   flex: 1,
   justifyContent: 'center',
  },
});