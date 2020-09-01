import { ChangeEvent } from 'react';

export type ModelOfInputText = {
  label: string;
  onChangeText: (e: string | ChangeEvent<any>) => void;
  value?: string;
};
