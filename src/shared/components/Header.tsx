import React from 'react';
import { Animated, StyleProp, View, Text, ViewStyle } from 'react-native';
import { globalStyles } from '../styles';

type HeaderProps = {
  title?: string;
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  backButton: JSX.Element | null;
};

export function Header({ backButton, style, title = '' }: HeaderProps): JSX.Element | null {
  return (
    <View style={[globalStyles.header, style as StyleProp<ViewStyle>]}>
      {backButton}
      <Text style={globalStyles.text}>{title}</Text>
    </View>
  );
}
