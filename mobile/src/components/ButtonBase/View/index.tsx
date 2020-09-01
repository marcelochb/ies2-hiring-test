import React from 'react';
import { View } from 'react-native';

import * as Styles from './styles';
import { ModelOfButtonBase } from '../Models';
import { ContentButtonBase } from './ContentButtonBase/View';

export const ButtonBase: React.FC<ModelOfButtonBase> = ({
  label,
  handle,
  isOutline = false,
  isSmall = false,
  isLink = false,
  IconSVG,
}) => {
  return (
    <Styles.Container
      onPress={handle}
      isLink={isLink}
      isSmall={isSmall}
      isOutline={isOutline}
    >
      <ContentButtonBase
        IconSVG={IconSVG}
        label={label}
        isOutline={isOutline}
        isSmall={isSmall}
      />
    </Styles.Container>
  );
}
