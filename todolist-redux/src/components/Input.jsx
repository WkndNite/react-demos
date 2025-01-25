import React from "react";
import {addListAction} from "../redux/actions";

export default function Input(props) {
	const [value, setValue] = React.useState("");
	function handleClick(){
		props.store.dispatch(addListAction(value));
		setValue("");
	}
	return (
		<div className="row">
			<div className="col-md-8">
				<input type="text" className="form-control" placeholder="请输入待办事项" value={value} onChange={e => setValue(e.target.value)} />
			</div>
			<div className="col-md-4">
				<button className="btn btn-primary" onClick={()=>handleClick(value)}>
					添加
				</button>
			</div>
		</div>
	);
}
