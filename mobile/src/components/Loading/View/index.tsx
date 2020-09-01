import React from 'react';
import { View } from 'react-native';

import * as Styles from './styles';

export const Loading: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.SpinningLoading />
    </Styles.Container>
  );
}
