import { ADD_CAMPUS, ADD_STUDENT } from "../constants/action-types";

export function addCampus(payload) {
  return { type: ADD_CAMPUS, payload };
}

export function addStudent(payload) {
  return { type: ADD_STUDENT, payload };
}
