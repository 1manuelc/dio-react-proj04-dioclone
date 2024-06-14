import styled from 'styled-components';

export const RankingColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 3.2rem;

	color: #fff;

	h3 {
		font-size: 28px;
	}

	@media (width > 1024px) {
		max-width: 50vw;
	}
`;
