import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Button } from '../shared/components';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../shared/styles';
import { PRIMARY_COLOR, PRIMARY_FONT_FAMILY } from '../shared/constants';
import LogoSvg from '../../assets/images/logo.svg';
import SkipSvg from '../../assets/icons/skip.svg';
import Keychain from 'react-native-keychain';
import { Auth } from 'aws-amplify';

export function EntryScreen(): JSX.Element | null {
  const [, setLoading] = useState(true);

  useEffect(() => {
    const fetchKey = async (): Promise<void> => {
      try {
        const creds = await Keychain.getInternetCredentials('auth');

        if (creds) {
          const { username, password } = creds;
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const user = await Auth.signIn(username, password);
          setLoading(false);

          if (user) {
            nav.navigate('Home');
          }
        }
      } catch {
        setLoading(false);
      }
    };

    void fetchKey();
  }, []);

  const nav = useNavigation();

  return (
    <View style={globalStyles.container}>
      <View style={{ marginBottom: 78 }}>
        <LogoSvg width={250} height={250} />
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
          <Button label="Sign Up" size={{ width: 280, height: 46 }} />
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
                color: PRIMARY_COLOR,
                marginRight: 8,
                fontSize: 18,
                fontFamily: PRIMARY_FONT_FAMILY,
              }}>
              Skip
            </Text>
            <SkipSvg width={12} height={10} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
