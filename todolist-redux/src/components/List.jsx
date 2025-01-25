import React from "react";
import { deleteListAction, updateListAction } from "../redux/actions";

export default function List(props) {
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
				{props.store.getState().list.map(item => (
					<li
						key={item.id}
						className="text-primary"
						style={{ fontSize: "20px", width: "310px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
					>
						<span
							className={["item", item.completed ? "completed" : ""].join(" ")}
							onClick={() => props.store.dispatch(updateListAction(item.id))}
						>
							{item.title}
						</span>
						<button
							className="btn btn-danger"
							onClick={() => props.store.dispatch(deleteListAction(item.id))}
						>
							删除
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
