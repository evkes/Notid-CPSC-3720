import React from 'react';
import { MdSearch } from 'react-icons/md';
//https://github.com/chrisblakely01/react-notes-app
const Search = ({ handleSearchNote }) => {
	return (
		<div className='search-box'>
			<MdSearch className='search-icons' size='1.3em' />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='Search for Note By Title or Tag:'
			/>
		</div>
	);
};

export default Search;
