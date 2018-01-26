import types from './types';

const defaultState = {
  items: [],
  loading: false
};

export default (prevState = defaultState, action) => {
  switch (action.type) {
    case types.REQUEST_INVITE_LIST:
      return {
        ...prevState,
        loading: true
      };
    case types.RECEIVE_INVITE_LIST:
      return {
        ...prevState,
        loading: false,
        items: action.payload.response
      };
    default:
      return prevState;
  }
};
