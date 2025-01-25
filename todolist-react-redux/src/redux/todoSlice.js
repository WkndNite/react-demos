import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
	name: "todoList",
	initialState: {
		todos: [
			{ id: 1, title: "Learn React", completed: false },
			{ id: 2, title: "Learn Redux", completed: false },
			{ id: 3, title: "Learn React Native", completed: false },
		],
	},
	reducers: {
		addTodo: (state, action) => {
			state.todos.push(action.payload);
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter(todo => todo.id !== action.payload);
		},
		changeTodo: (state, action) => {
			state.todos = state.todos.map(todo => {
				if (todo.id === action.payload) {
					todo.completed = !todo.completed;
				}
				return todo;
			});
		},
	},
});

export default todoSlice.reducer;

export const { addTodo, deleteTodo, changeTodo } = todoSlice.actions;