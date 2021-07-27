import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Font, { useFonts } from 'expo-font';

export default function EntryScreen() {
  const [loaded] = useFonts({
    'RhodiumLibre': require('../assets/fonts/Rhodium_Libre/RhodiumLibre-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Image
          style={{
            width: 28,
            height: 38,
          }}
          source={require('../assets/images/book.png')}
        />
        <Text style={styles.titleText}>Book Space</Text>
      </View>

      <View style={{ flex: 2 }}>
        <Image
          style={{
            width: 288,
            height: 194,
          }}
          source={require("../assets/images/main.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebd7d0',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 48,
    fontFamily: 'RhodiumLibre',
    color: '#352d39',
    marginLeft: 6,
  },
});
