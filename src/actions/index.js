import { ADD_CAMPUS, ADD_STUDENT, DELETE_STUDENT, DELETE_CAMPUS, FETCH_STUDENTS, FETCH_CAMPUSES } from "../constants/action-types";

/* Payload should be a Campus object with these properties:
	name: string,
	id: int,
	address: string,
	description: string,
	location: string,
	image: url
 */
export function addCampus(payload) {
  return { type: ADD_CAMPUS, payload };
}

/* Paylod should be a Student object with these properties:
	firstName: string,
	lastName: string,
	email: string,
	image: url,
	gpa: float,
	id: int,
	campusID: int
*/
export function addStudent(payload) {
  return { type: ADD_STUDENT, payload };
}

/**
 * This creates an action object
 * @param id  the id of the campus to be removed
 */
export function deleteCampus(id) {
	return {type: DELETE_CAMPUS, id: id}
}

/**
 * This creates an action object
 * @param id  the id of the student to be removed
 */
export function deleteStudent(id) {
	return {type: DELETE_STUDENT, id: id}
}

export function loadStudents() {
	return { type: FETCH_STUDENTS }
}

export function loadCampuses() {
	return { type: FETCH_CAMPUSES }
}
