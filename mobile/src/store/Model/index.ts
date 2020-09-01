import { ModelOfOnboardGlobalState } from '../modules/onboard/model';
import { ModelOfCartGlobalState } from '../modules/cart/model';

export type GlobalState = {
  onboard: ModelOfOnboardGlobalState;
  cart: ModelOfCartGlobalState;
};
