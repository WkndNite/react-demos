import List from "./components/List";
import Input from "./components/Input";
import "./css/App.css";

function App() {
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
			<Input/>
			<List/>
		</div>
	);
}

export default App;
