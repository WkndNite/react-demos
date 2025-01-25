import List from "./components/List";
import Input from "./components/Input";
import "./css/App.css";

function App(props) {
	return (
		<div className="container">
			<h1
				className="lead"
				style={{
					marginTop: "20px",
					marginBottom: "30px",
				}}
			>
				待办事项
			</h1>
			<Input store={props.store}/>
			<List store={props.store}/>
		</div>
	);
}

export default App;
