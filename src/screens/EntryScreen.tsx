import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Button } from '../shared/components';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../shared/styles';
import { PRIMARY_FONT_FAMILY } from '../shared/constants';
import LogoSvg from '../../assets/images/logo.svg';

export function EntryScreen(): JSX.Element | null {
  const nav = useNavigation();

  return (
    <View style={globalStyles.container}>
      <LogoSvg width={250} height={250} />

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
            // style={{ marginBottom: 32 }}
            size={{ width: 280, height: 46 }}
          />
        </Pressable>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: 32,
          }}>
          <Pressable
            onPress={() => nav.navigate('Home')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#846E63',
                marginRight: 8,
                fontSize: 18,
                fontFamily: PRIMARY_FONT_FAMILY,
              }}>
              Skip
            </Text>
            {/* <Image
              source={require('../assets/images/skip.png')}
              style={{
                width: 12,
                height: 10,
              }}
            /> */}
          </Pressable>
        </View>
      </View>
    </View>
  );
}
