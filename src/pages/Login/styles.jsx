import styled from 'styled-components';

export const StyledForm = styled.form`
	width: 100%;
	display: flex;
	flex-flow: column;
	gap: 2.4rem;
`;

export const Actions = styled.div`
	width: 100%;
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	color: #fff;

	a {
		color: #fff;
		font-weight: 700;
	}

	.yellow {
		color: #e5e044;
	}

	.green {
		color: #23dd7a;
	}
`;
