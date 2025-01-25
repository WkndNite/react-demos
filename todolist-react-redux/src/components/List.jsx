import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, changeTodo } from "../redux/todoSlice";

export default function List() {
	const list = useSelector(state => state.todoList.todos);
	const dispatcher = useDispatch();

	return (
		<div>
			<ul
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "10px",
					marginTop: "20px",
				}}
			>
				{list.map(item => (
					<li
						key={item.id}
						className="text-primary"
						style={{ fontSize: "20px", width: "310px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
					>
						<span
							className={["item", item.completed ? "completed" : ""].join(" ")}
							onClick={() => dispatcher(changeTodo(item.id))}
						>
							{item.title}
						</span>
						<button
							className="btn btn-danger"
							onClick={() =>dispatcher(deleteTodo(item.id))}
						>
							删除
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
