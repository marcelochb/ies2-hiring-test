import { combineReducers } from 'redux';

import { onboard } from './onboard/reducer';
import { cart } from './cart/reducer';
export default combineReducers({
  onboard,
  cart,
});
