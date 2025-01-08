import './App.css';
import style from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';

function App() {
	return (
		<>
			<div id="calculator" className={style.calculator}>
				<Display />
				<ButtonsContainer />
			</div>
		</>
	);
}

export default App;
