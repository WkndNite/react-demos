import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

export default function Input(props) {
	const [value, setValue] = React.useState("");
	const dispatcher = useDispatch();
	return (
		<div className="row">
			<div className="col-md-8">
				<input
					type="text"
					className="form-control"
					placeholder="请输入待办事项"
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
			</div>
			<div className="col-md-4">
				<button
					className="btn btn-primary"
					onClick={() => {dispatcher(addTodo({ id: Date.now(), title: value, completed: false }));setValue("");}}
				>
					添加
				</button>
			</div>
		</div>
	);
}
