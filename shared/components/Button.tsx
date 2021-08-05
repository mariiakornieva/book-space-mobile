import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ViewStyle, StyleProp } from 'react-native';

type Size = {
  width: number;
  height: number;
};

interface ButtonProps {
  label?: string;
  size: Size;
  style?: ViewStyle;
  primary?: boolean;
}

export function Button({ size, style, primary = false, label = '' }: ButtonProps) {
  const buttonTypeStyles = primary ? styles.primaryButton : styles.secondaryButton;
  const labelTypeStyles = primary ? styles.primaryLabel : styles.secondaryLabel;

  return (
    <View
      style={[
        styles.button,
        buttonTypeStyles,
        style,
        {
          width: size.width,
          height: size.height,
        },
      ]}>
      <Text
        style={{
          ...styles.label,
          ...labelTypeStyles,
        }}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 9,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  label: {
    fontSize: 18,
    fontFamily: 'RhodiumLibre',
  },
  primaryButton: {
    backgroundColor: '#846E63',
    borderWidth: 0,
  },
  primaryLabel: {
    color: '#fff',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'solid',
  },
  secondaryLabel: {
    color: '#846E63',
  },
});
