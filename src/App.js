import "./App.css";
import Question from "./Question";

function App({question,options}) {
	// const question = "";
	// const options = [];
	return (
		<div className="App">
			<Question question={question} options={options} />
		</div>
	);
}

export default App;
