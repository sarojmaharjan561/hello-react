import style from './Button.module.css';

const Button = ({ buttonName, onButtonClick }) => {
	return (
		<button className={style.button} onClick={onButtonClick}>
			{buttonName}
		</button>
	);
};

export default Button;
