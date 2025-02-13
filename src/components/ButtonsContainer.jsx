import style from './ButtonsContainer.module.css';
import Button from './Buttton';

const ButtonContainer = ({ onButtonClick }) => {
	const buttonNames = [
		'C',
		'+',
		'-',
		'*',
		'1',
		'2',
		'3',
		'/',
		'4',
		'6',
		'7',
		'.',
		'8',
		'9',
		'=',
		'0',
	];

	return (
		<>
			<div id="button-container" className={style.buttonContainer}>
				{buttonNames.map((buttonName) => (
					<Button
						key={buttonName}
						buttonName={buttonName}
						onButtonClick={() => onButtonClick(buttonName)}
					/>
				))}
			</div>
		</>
	);
};

export default ButtonContainer;
