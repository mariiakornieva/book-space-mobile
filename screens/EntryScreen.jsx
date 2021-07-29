import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import { Button } from '../shared/components';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../shared/styles';

export function EntryScreen() {
  const [loaded] = useFonts({
    'RhodiumLibre': require('../assets/fonts/Rhodium_Libre/RhodiumLibre-Regular.ttf'),
  });

  const nav = useNavigation();

  if (!loaded) {
    return null;
  }

  return (
    <View style={globalStyles.container}>
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

      <View style={{
        marginVertical: 60,
      }}>
        <Image
          style={{
            width: 288,
            height: 194,
          }}
          source={require("../assets/images/main.png")}
        />
      </View>

      <View>
        <Pressable onPress={() => nav.navigate('SignIn')}>
          <Button
            label="Sign In"
            style={{ marginBottom: 32 }}
            size={{ width: 280, height: 46 }}
            primary
          />
        </Pressable>

        <Pressable onPress={() => nav.navigate('SignUp')}>
          <Button
            label="Sign Up"
            style={{ marginBottom: 32 }}
            size={{ width: 280, height: 46 }}
          />
        </Pressable>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
          <Pressable onPress={() => nav.navigate('Home')} style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <Text style={{
              color: '#846E63',
              marginRight: 8,
              fontSize: 18,
              fontFamily: 'RhodiumLibre',
            }}
            >
              Skip
            </Text>
            <Image
              source={require('../assets/images/skip.png')}
              style={{
                width: 12,
                height: 10,
              }}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    // flex: 1,
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
