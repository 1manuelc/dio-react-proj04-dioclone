import styled, { css } from 'styled-components';

export const UserContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	gap: 0.75rem;
`;

export const UserInfos = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
	gap: 0.25rem;

	h4 {
		color: #fff;
		font-size: 1.6rem;
		font-weight: 700;
	}
`;

export const ProgressBar = styled.div`
	height: 1.2rem;
	width: 100%;

	display: flex;
	justify-content: flex-start;
	align-items: center;

	border-radius: 0.375rem;
	background: #fff;
`;

export const ActualProgress = styled.div`
	${({ percentual }) =>
		percentual >= 0 && percentual <= 100
			? css`
					width: ${percentual + '%'};
			  `
			: css`
					width: 0%;
			  `}

	height: 100%;
	border-radius: inherit;
	background-color: #23dd7a;
`;
