import './App.css';
import style from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CalculatorContainer from './components/CalculatorContainer';
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';
import { useState } from 'react';

function App() {
	const [calVal, setCalVal] = useState(0);

	const onButtonClick = (buttonText) => {
		if (buttonText === 'C') {
			return setCalVal(0);
		}
		if (buttonText === '=') {
			if (calVal == '') {
				return;
			}
			try {
				let result = eval(calVal);
				return setCalVal(result);
			} catch (e) {
				if (e instanceof SyntaxError) {
					console.log('here');
					alert(e.message);
					return setCalVal(0);
				}
			}
		}

		if (calVal === 0) {
			var newVal = buttonText;
		} else {
			newVal = calVal + buttonText;
		}

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
