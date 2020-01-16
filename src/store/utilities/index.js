// ACTION TYPES;
const FETCH_STUDENTS = "FETCH_STUDENTS";
const FETCH_CAMPUSES = "FETCH_CAMPUSES";

const DELETE_STUDENT = "DELETE_STUDENT";
const DELETE_CAMPUS = "DELETE_CAMPUS";

const ADD_CAMPUS = "ADD_CAMPUS";
const ADD_STUDENT = "ADD_STUDENT";

// const EDIT_STUDENT = "EDIT_STUDENT";
// const EDIT_CAMPUS = "EDIT_CAMPUS";

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

// THUNKS;
// These will be called in the anonymous function of our mapDispatch of one of our React components;
export function fetchAllCampusesThunk() {
  return function(dispatch) {
    const campusesFromAPI = [
      {
        id: 0,
        name: "Hunter College",
        address: "695 Park Ave, New York, NY 10065",
        description:
          "CUNY—Hunter College is a public institution that was founded in 1870. It has a total undergraduate enrollment of 16,249, and the setting is Urban. CUNY—Hunter College's ranking in the 2020 edition of Best Colleges is Regional Universities North, #23.",
        image:
          "https://pbs.twimg.com/profile_images/378800000830024561/204a2bf82862c56c42db4da287d40712_400x400.jpeg"
      },
      {
        id: 1,
        name: "City College",
        address: "160 Convent Ave, New York, NY 10031",
        description:
          "The City College of the City University of New York is a public senior college of the City University of New York (CUNY) system in New York City. It is the oldest of CUNY's 24 institutions of higher learning, and is considered its flagship college.",
        image:
          "https://user-content.givegab.com/uploads/group/logo/437243/28fb0d3dcca3031796e1a436e180ed50ee167d41.png"
      },
      {
        id: 2,
        name: "Baruch College",
        address: "55 Lexington Ave, New York, NY 10010",
        description:
          "Baruch College is a senior college in the City University of New York, educates 15,024 undergraduates and 3,005 graduate students in a high-tech campus located in midtown Manhattan.",
        image: "https://www.baruch.cuny.edu/toolkit/assets/stacked-lockup.jpg"
      }
    ];
    dispatch(fetchAllCampuses(campusesFromAPI));
  };
}

export function fetchAllStudentsThunk() {
  return function(dispatch) {
    const studentsFromAPI = [
      {
        id: 0,
        firstName: "John",
        lastName: "Doe",
        campus: 2,
        GPA: "3.95",
        email: "john@gmail.com",
        image: "https://i.ya-webdesign.com/images/no-avatar-png-1.png"
      },
      {
        id: 1,
        firstName: "Jane",
        lastName: "Doe",
        campus: 1,
        GPA: "4.00",
        email: "jane@gmail.com",
        image: "https://i.ya-webdesign.com/images/no-avatar-png-1.png"
      }
    ];
    dispatch(fetchAllStudents(studentsFromAPI));
  };
}

export function removeCampusThunk(id) {
  return function(dispatch) {
    dispatch(removeACampus(id));
  };
}

export function removeStudentThunk(id) {
  return function(dispatch) {
    dispatch(removeAStudent(id));
  };
}

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
    default:
      return state;
  }
}

export default rootReducer;
