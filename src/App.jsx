import './App.css';
import style from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CalculatorContainer from './components/CalculatorContainer';
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';
import { useState } from 'react';

function App() {
	const [calVal, setCalVal] = useState('');

	const onButtonClick = (buttonText) => {
		if (buttonText === 'C') {
			return setCalVal('');
		}
		if (buttonText === '=') {
			let result = eval(calVal);
			return setCalVal(result);
		}
		let newVal = calVal + buttonText;
		setCalVal(newVal);
	};

	return (
		<>
			<div className={style.Container}>
				<CalculatorContainer>
					<Display displayValue={calVal} />
					<ButtonsContainer onButtonClick={onButtonClick} />
				</CalculatorContainer>
			</div>
		</>
	);
}

export default App;
