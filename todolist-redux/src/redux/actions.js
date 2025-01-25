import { ADD,DELETE,CHANGE } from "./actionType";

export const addListAction = payload => ({
	type: ADD,
	payload,
});

export const deleteListAction = payload => ({
	type: DELETE,
	payload,
});

export const updateListAction = payload => ({
	type: CHANGE,
	payload,
});