import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { ModelOfInputText } from '../Models';

import * as Styles from './styles';
import { Inputs } from '@src/styles';

export const InputText: React.FC<ModelOfInputText> = ({
  label,
  onChangeText,
  value,
}) => {
  return (
    <Styles.Container>
      <TextInput
        theme={Inputs.theme}
        style={Inputs.style}
        label={label}
        onChangeText={onChangeText}
        value={value}
        mode='outlined'
      />
    </Styles.Container>
  );
}

