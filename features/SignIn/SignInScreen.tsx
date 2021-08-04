import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { FONT_FAMILY, PRIMARY_COLOR } from '../../shared/constants';
import { globalStyles } from '../../shared/styles';
import { Button, RadioButton } from '../../shared/components';

export function SignInScreen() {
  const [remember, setRemember] = useState(false);

  return (
    <View style={[globalStyles.container, { padding: 40 }]}>
      <Text style={{
        alignSelf: 'flex-start',
        marginBottom: 40,
        fontSize: 18,
        fontFamily: FONT_FAMILY,
      }}>Sign In</Text>

      <TextInput
        style={globalStyles.input}
        onChangeText={() => {}}
        // value={email}
        placeholder="Email"
      />

      <TextInput
        style={globalStyles.input}
        onChangeText={() => {}}
        // value={password}
        placeholder="Password"
        secureTextEntry={true}
      />

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 60,
        marginTop: 10,
      }}>
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}
          onPress={() => setRemember(!remember)}
        >
          <RadioButton
            selected={remember}
            style={{ marginRight: 8 }}
          />
          <Text style={{
            fontSize: 10,
            color: PRIMARY_COLOR,
            fontFamily: 'Montserrat',
          }}>Remember me</Text>
        </Pressable>

        <Text style={{
          fontSize: 10,
          color: PRIMARY_COLOR,
          fontFamily: 'Montserrat',
        }}>Forgot password?</Text>
      </View>

      <Text style={[
        globalStyles.text,
        {
          textAlign: 'center',
          fontSize: 18,
          marginBottom: 24,
        },
      ]}>
        Sign In with...
      </Text>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 46,
      }}>
        <Svg
          width={40}
          height={40}
          viewBox="0 0 40 40"
          fill="none"
          // xmlns="http://www.w3.org/2000/svg"
          style={{ marginRight: 16 }}
        >
          <G clipPath="url(#prefix__clip0)" fill="#3F4752">
            <Path d="M27.291 5.416a7.314 7.314 0 017.293 7.293V27.29a7.314 7.314 0 01-7.293 7.293H12.71a7.314 7.314 0 01-7.293-7.293V12.71a7.314 7.314 0 017.293-7.293H27.29zm0-2.916H12.71C7.094 2.5 2.5 7.094 2.5 12.709V27.29C2.5 32.906 7.094 37.5 12.709 37.5H27.29c5.615 0 10.209-4.594 10.209-10.209V12.71C37.5 7.094 32.906 2.5 27.291 2.5z" />
            <Path d="M29.479 12.709a2.188 2.188 0 110-4.375 2.188 2.188 0 010 4.375zM20 14.166A5.834 5.834 0 1114.166 20 5.84 5.84 0 0120 14.166zm0-2.916a8.75 8.75 0 100 17.5 8.75 8.75 0 000-17.5z" />
          </G>
          <Defs>
            <ClipPath id="prefix__clip0">
              <Path fill="#fff" d="M0 0h40v40H0z" />
            </ClipPath>
          </Defs>
        </Svg>
        <Svg
          width={40}
          height={40}
          viewBox="0 0 40 40"
          fill="none"
          // xmlns="http://www.w3.org/2000/svg"
          style={{ marginRight: 16 }}
        >
          <Path
            d="M22.328 34.995v-13.66h4.609l.685-5.348h-5.294V12.58c0-1.543.43-2.6 2.645-2.6h2.807V5.212A37.228 37.228 0 0023.668 5c-4.073 0-6.87 2.487-6.87 7.052v3.925H12.22v5.348h4.588v13.67h5.52z"
            fill="#3F4752"
          />
        </Svg>
        <Svg
          width={40}
          height={40}
          viewBox="0 0 40 40"
          fill="none"
          // xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M35.76 16.923a18.74 18.74 0 01.317 3.445c0 9.374-6.274 16.039-15.749 16.039A16.403 16.403 0 013.922 20 16.402 16.402 0 0120.328 3.593c4.43 0 8.132 1.63 10.972 4.277l-4.625 4.625v-.012c-1.722-1.64-3.907-2.481-6.347-2.481-5.413 0-9.813 4.573-9.813 9.988 0 5.413 4.4 9.997 9.813 9.997 4.912 0 8.255-2.809 8.942-6.665h-8.942v-6.399h15.434-.002z"
            fill="#3F4752"
          />
        </Svg>
      </View>

      <Pressable onPress={() => {}}>
        <Button
          label="Sign In"
          size={{ width: 280, height: 46 }}
          primary
        />
      </Pressable>
    </View>
  );
}
