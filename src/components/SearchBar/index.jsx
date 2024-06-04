import { StylizedBar } from './styles';
import { LuSearch } from 'react-icons/lu';

const SearchBar = () => {
	return (
		<>
			<StylizedBar>
				<LuSearch color='#fff' />
				<input type='text' placeholder='Buscar' />
			</StylizedBar>
		</>
	);
};

export default SearchBar;
