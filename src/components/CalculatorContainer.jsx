import style from './CalculatorContainer.module.css';

const CalculatorContainer = (props) => {
	return (
		<center>
			<div id="calculator" className={style.calculator}>
				{props.children}
			</div>
		</center>
	);
};

export default CalculatorContainer;
