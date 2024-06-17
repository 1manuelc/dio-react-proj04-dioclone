import { StyledButton } from './styles';

import { IButton } from '../../types/types';

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
