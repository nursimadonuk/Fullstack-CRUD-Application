import { ADD_CAMPUS, ADD_STUDENT, DELETE_CAMPUS, DELETE_STUDENT } from "../constants/action-types";

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
    case DELETE_CAMPUS:
      return Object.assign({}, state, {
        CAMPUS_LIST: state.CAMPUS_LIST.filter(campus => campus.id != action.id)
      });
    case DELETE_STUDENT:
      return Object.assign({}, state, {
        CAMPUS_LIST: state.STUDENT_LIST.filter(student => student.id != action.id)
      });
    case FETCH_CAMPUSES:
      //do an API call to database here
      return Object.assign({}, state, {
        CAMPUS_LIST: [
          {
            id: 0,
            name: "Hunter College",
            address: "695 Park Ave, New York, NY 10065",
            description: "CUNY—Hunter College is a public institution that was founded in 1870. It has a total undergraduate enrollment of 16,249, and the setting is Urban. CUNY—Hunter College's ranking in the 2020 edition of Best Colleges is Regional Universities North, #23.",
            image: "https://pbs.twimg.com/profile_images/378800000830024561/204a2bf82862c56c42db4da287d40712_400x400.jpeg"
          },
          {
            id: 1,
            name: "City College",
            address: "160 Convent Ave, New York, NY 10031",
            description: "The City College of the City University of New York is a public senior college of the City University of New York (CUNY) system in New York City. It is the oldest of CUNY's 24 institutions of higher learning, and is considered its flagship college.",
            image: "https://user-content.givegab.com/uploads/group/logo/437243/28fb0d3dcca3031796e1a436e180ed50ee167d41.png"
          },
          {
            id: 2,
            name: "Baruch College",
            address: "55 Lexington Ave, New York, NY 10010",
            description: "Baruch College is a senior college in the City University of New York, educates 15,024 undergraduates and 3,005 graduate students in a high-tech campus located in midtown Manhattan.",
            image: "https://user-content.givegab.com/uploads/group/logo/437243/28fb0d3dcca3031796e1a436e180ed50ee167d41.png" 
          }
        ]
      });
    case FETCH_STUDENTS:
      //do an API call to database here
      return Object.assign({}, state, {
        STUDENT_LIST: [
          {
            id: 0,
            name: "Xing Tao Shi",
            campus: "Hunter College",
            GPA: "3.95",
            email: "xshi603@gmail.com",
            image: "https://i.ya-webdesign.com/images/no-avatar-png-1.png"
          },
          {
            id: 1,
            name: "Khinshan Khan",
            campus: "Hunter College",
            GPA: "4.00",
            email: "kkhan@gmail.com",
            image: "https://i.ya-webdesign.com/images/no-avatar-png-1.png"
          }
        ]
      })
    default:
      return state;
  }
}

export default rootReducer;
