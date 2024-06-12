import PropTypes from 'prop-types';
import { StyledContainer, InputContainer, StyledInput } from './styles';

const InputText = ({
	Icon,
	size,
	color,
	placeholder,
	type,
	register,
	name,
}) => {
	return (
		<StyledContainer>
			<InputContainer>
				<Icon size={size} color={color} />
				<StyledInput placeholder={placeholder} type={type} {...register(name)} />
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
	register: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
};

export default InputText;
