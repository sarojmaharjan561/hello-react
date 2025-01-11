import style from './CalculatorContainer.module.css';

const CalculatorContainer = (props) => {
	return (
		<div id="calculator" className={style.calculator}>
			{props.children}
		</div>
	);
};

export default CalculatorContainer;
