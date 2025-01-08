import style from './Button.module.css';

const Button = ({ buttonName }) => {
	return <button className={style.button}>{buttonName}</button>;
};

export default Button;
