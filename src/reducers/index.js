import { ADD_CAMPUS, ADD_STUDENT } from "../constants/action-types";

const initialState = {
  CAMPUS_LIST: [],
  STUDENT_LIST: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CAMPUS:
      return Object.assign({}, state, {
        CAMPUS_LIST: state.CAMPUS_LIST.concat(action.payload)
      });
    case ADD_STUDENT:
      return Object.assign({}, state, {
        STUDENT_LIST: state.STUDENT_LIST.concat(action.payload)
      });
    default:
      return state;
  }
}

export default rootReducer;
