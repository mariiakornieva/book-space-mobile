import React from 'react';
import Svg, { Path } from "react-native-svg";
import { Pressable, View } from 'react-native';

export function BackButton({ onPress }) {
  return (
    <Pressable onPress={onPress} style={{
      marginTop: 62,
      marginLeft: 29,
    }}>
      <View>
        <Svg
          width={32}
          height={32}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M16 4C9.375 4 4 9.375 4 16s5.375 12 12 12 12-5.375 12-12S22.625 4 16 4z"
            stroke="#846E63"
            strokeMiterlimit={10}
          />
          <Path
            d="M18.5 22l-6-6 6-6"
            stroke="#846E63"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </View>
    </Pressable>
  );
}
