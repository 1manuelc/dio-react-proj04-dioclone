import { StyledContainer, InputContainer, StyledInput } from './styles';

import { IInputText } from '../../types/types';

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
