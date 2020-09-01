import { ModelOfOnboardGlobalState } from '../modules/onboard/model';
import { ModelOfReloadPageGlobalState } from '../modules/reloadPage/model';
import { ModelOfCartGlobalState } from '../modules/cart/model';

export type GlobalState = {
  onboard: ModelOfOnboardGlobalState;
  reloadPage: ModelOfReloadPageGlobalState;
  cart: ModelOfCartGlobalState;
};
