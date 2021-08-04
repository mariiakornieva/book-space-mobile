import React from 'react';
import { View } from 'react-native';
import { PRIMARY_COLOR_TRANSPARENT } from '../constants';

interface RadioButtonProps {
  style: object; // TODO: figure the type
  selected: boolean;
};

export function RadioButton(props: RadioButtonProps) {
  return (
    <View style={[{
      height: 20,
      width: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: PRIMARY_COLOR_TRANSPARENT,
      alignItems: 'center',
      justifyContent: 'center',
    }, props.style]}>
      {
        props.selected ?
          <View style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: PRIMARY_COLOR_TRANSPARENT,
          }} />
          : null
      }
    </View>
  );
}
