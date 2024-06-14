import PropTypes from 'prop-types';
import { StyledButton } from './styles';

interface IButton {
	variant?: string;
	text: string;
	type?: string;
	itFillWidth?: boolean;
	onClickFn?: () => void;
}

const Button = ({ variant, text, itFillWidth = false, onClickFn }: IButton) => {
	let space = itFillWidth ? 100 : 0;

	return (
		<StyledButton
			onClick={onClickFn}
			variant={variant?.toLowerCase()}
			spacing={space}
		>
			{text}
		</StyledButton>
	);
};

export default Button;
