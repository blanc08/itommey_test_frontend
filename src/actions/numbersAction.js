import axios from 'axios';

export const SUBMIT_NUMBERS = 'SUBMIT_NUMBERS';

export const submitNumbers = (data) => {
  return async (dispatch) => {
    // loading
    dispatch({
      type: SUBMIT_NUMBERS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: 'POST',
      url: 'http://localhost:8080',
      data: { arr: data },
      timeout: 3000,
    })
      .then((response) => {
        // success
        dispatch({
          type: SUBMIT_NUMBERS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // error
        dispatch({
          type: SUBMIT_NUMBERS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
