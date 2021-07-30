import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { FONT_FAMILY, PRIMARY_COLOR } from '../../shared/constants';
import { globalStyles } from '../../shared/styles';
import { Button, RadioButton } from '../../shared/components';

export function SignUpScreen() {
  const [signup, setSignup] = useState(false);

  return (
    <View style={[globalStyles.container, { padding: 40 }]}>
      <Text style={{
        alignSelf: 'flex-start',
        marginBottom: 40,
        fontSize: 18,
        fontFamily: FONT_FAMILY,
      }}>Sign Up</Text>

      <TextInput
        style={globalStyles.input}
        onChangeText={() => { }}
        // value={name}
        placeholder="Name"
      />

      <TextInput
        style={globalStyles.input}
        onChangeText={() => { }}
        // value={email}
        placeholder="Email"
      />

      <TextInput
        style={globalStyles.input}
        onChangeText={() => { }}
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
          onPress={() => setSignup(!signup)}
        >
          <RadioButton
            selected={signup}
            style={{ marginRight: 8 }}
          />
          <Text style={{
            fontSize: 10,
            color: PRIMARY_COLOR,
            fontFamily: 'Montserrat',
          }}>Please sign me up to the latest book news  </Text>
        </Pressable>
      </View>

      <Pressable onPress={() => { }}>
        <Button
          label="Sign Up"
          // style={{ marginBottom: 32 }}
          size={{ width: 280, height: 46 }}
          primary
        />
      </Pressable>
    </View>
  );
}
