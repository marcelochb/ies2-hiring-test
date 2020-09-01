import { useDispatch } from 'react-redux';
import { onboardCheckInRequest } from '@src/store/modules/onboard/actions';

export const useHomeController = () => {
  const dispatch = useDispatch();

  const submitButton = () => dispatch(onboardCheckInRequest());

  return {
    handleController: {
      submitButton,
    },
  };
};
