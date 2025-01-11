import style from './Display.module.css';

const Display = ({ displayValue }) => {
	return <input id="display" className={style.display} type="text" value={displayValue} readOnly />;
};

export default Display;
