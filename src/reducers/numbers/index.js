import { SUBMIT_NUMBERS } from '../../actions/numbersAction';

const initialState = {
  submitNumbersResult: false,
  submitNumbersLoading: false,
  submitNumbersError: false,
};

const numbers = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_NUMBERS:
      return {
        ...state,
        submitNumbersResult: action.payload.data,
        submitNumbersLoading: action.payload.loading,
        submitNumbersError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default numbers;
