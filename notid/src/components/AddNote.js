import { useState } from 'react';

const AddNote = ({ handleAddNote, handleOnClickNote }) => {
	
	const [titleText, setTitleText] = useState('');
	const [noteText, setNoteText] = useState('');
	const [updatedDate, setDate] = useState('');
	const [tagText, setTagText] = useState('');
	const characterLimit = 10000;
	const titleLimit = 1000;
	const tagLimit = 1000;


	const noteClick = (id) => {
		const [titleText, noteText, tagText, updatedDate] = handleOnClickNote(id);
		setTitleText(titleText);
		setNoteText(noteText);
		setTagText(tagText);
		setDate(updatedDate);
	}
	

	const handleTagChange = (event) => {
		if (tagLimit - event.target.value.length >= 0) {
			setTagText(event.target.value);
		}
	}

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
			handleAddNote(titleText, noteText, tagText);
			setTitleText('');
			setNoteText('');
			setTagText('');
		}
		
	};

	return (
		<div className='app-main-new-note'>
			<textarea 
				rows={1}
				id = 'Tag'
				placeholder= 'Tag...'
				value={tagText}
				onChange={handleTagChange}
			></textarea>
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
