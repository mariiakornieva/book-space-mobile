import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { globalStyles } from '../styles';

interface HeaderProps {
  title?: string;
  style?: any;
  backButton: JSX.Element | null;
}

export function Header({ backButton, style, title = '' }: HeaderProps) {
  return (
    <View style={[globalStyles.header, style]}>
      {backButton}
      <Text style={globalStyles.text}>{title}</Text>
    </View>
  );
}
