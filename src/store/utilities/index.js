import axios from "axios";

// ACTION TYPES;
const FETCH_STUDENTS = "FETCH_STUDENTS";
const FETCH_CAMPUSES = "FETCH_CAMPUSES";

const DELETE_STUDENT = "DELETE_STUDENT";
const DELETE_CAMPUS = "DELETE_CAMPUS";

const ADD_CAMPUS = "ADD_CAMPUS";
const ADD_STUDENT = "ADD_STUDENT";

const EDIT_STUDENT = "EDIT_STUDENT";
const EDIT_CAMPUS = "EDIT_CAMPUS";

/** This function is for mocking an API call with Promises. It should be
 * used with hardcoded data.
 * @param time  the amount of time in milliseconds to wait
 * @return      a promise, which passes the time as a parameter
 */
function promiseTimeout(time) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(time);
    }, time);
  });
}

// ACTION CREATORS;
function fetchAllCampuses(campuses) {
  return { type: FETCH_CAMPUSES, payload: campuses };
}

function fetchAllStudents(students) {
  return { type: FETCH_STUDENTS, payload: students };
}

function removeACampus(id) {
  return { type: DELETE_CAMPUS, payload: id };
}

function removeAStudent(id) {
  return { type: DELETE_STUDENT, payload: id };
}

function addACampus(campusToAdd) {
  return { type: ADD_CAMPUS, payload: campusToAdd };
}

function addAStudent(studentToAdd) {
  return { type: ADD_STUDENT, payload: studentToAdd };
}

function editACampus(newCampusValues, id) {
  return { type: EDIT_CAMPUS, payload: newCampusValues };
}

function editAStudent(newStudentValues, id) {
  return { type: EDIT_STUDENT, payload: newStudentValues };
}

// THUNKS;
// These will be called in the anonymous function of our mapDispatch of one of our React components;
export const fetchAllCampusesThunk = () => dispatch => {
  axios.get("/api/campuses/").then(res => dispatch(fetchAllCampuses(res.data)));
};

export const fetchAllStudentsThunk = () => dispatch => {
  axios.get("/api/students/").then(res => dispatch(fetchAllStudents(res.data)));
};

export const removeCampusThunk = id => dispatch => {
  axios
    .delete("/api/campuses/delete", { data: { id: id } })
    .then(res => dispatch(removeACampus(id)));
};

export const removeStudentThunk = id => dispatch => {
  axios
    .delete("/api/students/delete", { data: { id: id } })
    .then(res => dispatch(removeAStudent(id)));
};

export const editCampusThunk = changedCampus => dispatch => {
  axios
    .post("/api/campuses/edit", changedCampus)
    .then(res => dispatch(editACampus(changedCampus)));
};

export const editStudentThunk = changedStudent => dispatch => {
  axios
    .post("/api/students/edit", changedStudent)
    .then(res => dispatch(editAStudent(changedStudent)));
};

export const addCampusThunk = campus => dispatch => {
  axios
    .post("/api/campuses/add", campus)
    .then(res => dispatch(addACampus(campus)));
};

export const addStudentThunk = student => dispatch => {
  axios
    .post("/api/students/add", student)
    .then(res => dispatch(addAStudent(student)));
};

// REDUCER;

const initialState = {
  CAMPUS_LIST: [],
  STUDENT_LIST: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CAMPUSES:
      return Object.assign({}, state, {
        CAMPUS_LIST: action.payload
      });
    case FETCH_STUDENTS:
      return Object.assign({}, state, {
        STUDENT_LIST: action.payload
      });
    case DELETE_CAMPUS:
      return Object.assign({}, state, {
        CAMPUS_LIST: state.CAMPUS_LIST.filter(
          campus => campus.id !== action.payload
        )
      });
    case DELETE_STUDENT:
      return Object.assign({}, state, {
        STUDENT_LIST: state.STUDENT_LIST.filter(
          student => student.id !== action.payload
        )
      });
    case ADD_CAMPUS:
      return Object.assign({}, state, {
        CAMPUS_LIST: state.CAMPUS_LIST.concat(action.payload)
      });
    case ADD_STUDENT:
      return Object.assign({}, state, {
        STUDENT_LIST: state.STUDENT_LIST.concat(action.payload)
      });
    case EDIT_CAMPUS:
      return Object.assign({}, state, {
        CAMPUS_LIST: state.CAMPUS_LIST.map(campus => {
          if (campus.id == action.payload.id) {
            return action.payload;
          } else {
            return campus;
          }
        })
      });
    case EDIT_STUDENT:
      return Object.assign({}, state, {
        STUDENT_LIST: state.STUDENT_LIST.map(student => {
          if (student.id == action.payload.id) {
            console.log("Updating with new values: ", action.payload);
            return action.payload;
          } else {
            return student;
          }
        })
      });
    default:
      return state;
  }
}

export default rootReducer;
