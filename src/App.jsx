import './App.css';
import style from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<>
			<div id="calculator" className={style.calculator}>
				<input id="display" className={style.display} type="text" />
				<div id="button-container" className={style.buttonContainer}>
					<button className={style.button}>C</button>
					<button className={style.button}>1</button>
					<button className={style.button}>2</button>
					<button className={style.button}>+</button>
				</div>
			</div>
		</>
	);
}

export default App;
