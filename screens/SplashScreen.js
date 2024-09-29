// src/components/SplashScreen.tsx

import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

    setTimeout(() => {
      navigation.replace('Part of Body');
    }, 2500);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/img/icon.png')} // Path to your splash screen image
        style={styles.image}
      />
      <Text style={styles.title}>Deaf Digital Learning App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200, // Customize the image size
    height: 200,
  },
  title: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
