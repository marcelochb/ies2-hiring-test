import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'ies2',
      storage: AsyncStorage,
      whitelist: ['onboard', 'cart'],
    },
    reducers,
  );

  return persistedReducer;
};
