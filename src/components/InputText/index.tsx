import PropTypes from 'prop-types';
import { StyledContainer, InputContainer, StyledInput } from './styles';
import { IconType } from 'react-icons';

interface IInputText {
	Icon: IconType;
	size: number;
	color: string;
	placeholder: string;
	type: string;
	register: Function;
	name: string;
}

const InputText = ({
	Icon,
	size,
	color,
	placeholder,
	type,
	register,
	name,
}: IInputText) => {
	return (
		<StyledContainer>
			<InputContainer>
				<Icon size={size} color={color} />
				<StyledInput
					placeholder={placeholder}
					type={type}
					{...register(name)}
				/>
			</InputContainer>
		</StyledContainer>
	);
};

export default InputText;
