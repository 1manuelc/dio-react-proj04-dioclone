import { StylizedBar } from './styles';
import { LuSearch } from 'react-icons/lu';

const SearchBar = () => {
	return (
		<>
			<StylizedBar>
				<input type='text' placeholder='Buscar' />
				<LuSearch color='#fff' />
			</StylizedBar>
		</>
	);
};

export default SearchBar;
