import { ADD_CAMPUS, ADD_STUDENT } from "../constants/action-types";

const initialState = {
  CAMPUS_LIST: [],
  STUDENT_LIST: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_CAMPUS) {
    return Object.assign({}, state, {
      CAMPUS_LIST: state.campuses.concat(action.payload)
    });
  }

  if (action.type === ADD_STUDENT) {
    return Object.assign({}, state, {
      STUDENT_LIST: state.students.concat(action.payload)
    });
  }

  return state;
}

export default rootReducer;
