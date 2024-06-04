import PropTypes from 'prop-types';
import { StyledButton } from './styles';

const Button = ({ variant, text, itFillWidth = false, onClickFn }) => {
	let space = itFillWidth ? 100 : undefined;

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

Button.propTypes = {
	variant: PropTypes.string,
	text: PropTypes.any,
	onClickFn: PropTypes.func,
	itFillWidth: PropTypes.bool,
};

export default Button;
