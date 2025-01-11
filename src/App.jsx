import './App.css';
import style from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CalculatorContainer from './components/CalculatorContainer';
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';

function App() {
	return (
		<>
			<div className={style.Container}>
				<CalculatorContainer>
					<Display />
					<ButtonsContainer />
				</CalculatorContainer>
			</div>
		</>
	);
}

export default App;
