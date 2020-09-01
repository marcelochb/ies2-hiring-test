import React from 'react';
import { View } from 'react-native';
import { ModelOfContentBaseButton } from '../Models';

import * as Styles from './styles';

export const ContentButtonBase: React.FC<ModelOfContentBaseButton> = ({
  IconSVG,
  label,
  isOutline,
  isSmall,
}) => {
  return (
    <React.Fragment>
      {IconSVG && (<IconSVG />)}
      {label && (<Styles.Text
        hasSVG={IconSVG}
        isOutline={isOutline}
        isSmall={isSmall}
      >
        {label}
      </Styles.Text>)}
    </React.Fragment>
  );
}
