import { ADD_CAMPUS, ADD_STUDENT } from "../constants/action-types";

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
	gpa: float
*/
export function addStudent(payload) {
  return { type: ADD_STUDENT, payload };
}
