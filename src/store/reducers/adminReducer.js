import actionTypes from '../actions/actionTypes';

const initContentOfConfirmModal = {
  isOpen: false,
  messageId: "",
  handleFunc: null,
  dataFunc: null,
};

const initialState = {
  gender:[],
  roles:[],
  positions: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_SUCCESS:
        let copyState = {...state};
        copyState.genders = action.data;
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_FAILED:
      console.log(action);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default adminReducer;