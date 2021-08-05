import React from 'react';
import { View, ViewStyle } from 'react-native';
import { PRIMARY_COLOR_TRANSPARENT } from '../constants';

type RadioButtonProps = {
  style?: ViewStyle;
  selected?: boolean;
};

export function RadioButton({ style, selected = false }: RadioButtonProps): JSX.Element | null {
  return (
    <View
      style={[
        {
          height: 20,
          width: 20,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: PRIMARY_COLOR_TRANSPARENT,
          alignItems: 'center',
          justifyContent: 'center',
        },
        style,
      ]}>
      {selected ? (
        <View
          style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: PRIMARY_COLOR_TRANSPARENT,
          }}
        />
      ) : null}
    </View>
  );
}
