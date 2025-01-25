import { ADD, DELETE, CHANGE } from "./actionType";

let defaultState = {
	list: [
		{ id: 1, title: "Learn React", completed: false },
		{ id: 2, title: "Learn Redux", completed: false },
		{ id: 3, title: "Learn React Native", completed: false },
	],
};

export function todoReducer(state = defaultState, action) {
	switch (action.type) {
		case ADD:
			return{
                list: [
                    ...state.list,
                    {
                        id: Date.now(),
                        title: action.payload,
                        completed: false,
                    },
                ]
            }
		case DELETE:
			return {
				list: state.list.filter(item => item.id !== action.payload),
			};
		case CHANGE:
			return {
				list: state.list.map(item => {
					if (item.id === action.payload) {
						item.completed = !item.completed;
					}
					return item;
				}),
			};
		default:
			return state;
	}
}
