import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	
	const [titleText, setTitleText] = useState('');
	const [noteText, setNoteText] = useState('');
	const characterLimit = 10000;
	const titleLimit = 1000;

	const handleTitleChange = (event) => {
		if (titleLimit - event.target.value.length >= 0) {
			setTitleText(event.target.value);
		}
	}
	
	const handleTextChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(titleText, noteText);
			setTitleText('');
			setNoteText('');
		}
		
	};

	return (
		<div className='app-main-new-note'>
			<textarea 
				rows={1}
				id = 'title'
				placeholder= 'Title...'
				value={titleText}
				onChange={handleTitleChange}
			></textarea>
			<textarea
				id = 'text'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleTextChange}
			></textarea>
			<div className='app-main-note-footer'>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;
