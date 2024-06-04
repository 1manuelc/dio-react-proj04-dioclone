import PropTypes from 'prop-types';
import { StyledContainer, InputContainer, StyledInput } from './styles';

const InputText = ({ Icon, size, color, placeholder, type }) => {
	return (
		<StyledContainer>
			<InputContainer>
				<Icon size={size} color={color} />
				<StyledInput placeholder={placeholder} type={type} />
			</InputContainer>
		</StyledContainer>
	);
};

InputText.propTypes = {
	Icon: PropTypes.any,
	size: PropTypes.number,
	color: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.string,
};

export default InputText;
