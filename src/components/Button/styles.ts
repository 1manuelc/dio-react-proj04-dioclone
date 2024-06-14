import styled, { css } from 'styled-components';

// importando atributos de um botão comum em HTML para o componente com extends
interface IButtonStyled extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: string;
	spacing: number;
}

export const StyledButton = styled.button<IButtonStyled>`
	${({ spacing }) =>
		spacing === 100
			? css`
					width: 100%;
			  `
			: undefined}

	padding: 0.8rem 1.2rem;
	border-radius: 0.8rem;
	cursor: pointer;
	font-size: 1.6rem;

	@media screen and (width <= 1024px) {
		font-size: 1.4rem;
	}

	&:hover {
		opacity: 0.8;
	}

	${({ variant }) => {
		switch (variant) {
			case 'default':
				return css`
					background-color: #fff;
					color: #000;
				`;
			case 'highlight':
				return css`
					background-color: #e4105d;
					color: #fff;
				`;
			case 'gray':
				return css`
					background-color: #565656;
					color: #fff;
				`;
			default:
				return css`
					background-color: transparent;
					color: #fff;
				`;
		}
	}}
`;
