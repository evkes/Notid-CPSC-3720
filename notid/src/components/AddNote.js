import { useState } from 'react';

const AddNote = ({ handleAddNote, handleOnClickNote }) => {
	
	const [notes, setNotes] = useState({
		title:'',
		text:'',
		tag:'',
		date:''
	})
	const characterLimit = 10000;
	const titleLimit = 1000;
	const tagLimit = 1000;

	const handleTagChange = (event) => {
		if (tagLimit - event.target.value.length >= 0) {
			setNotes({
				title: (event.target.value),
				text: (event.target.value),
				tag: (event.target.value),
				date: ''
			})
		}
	}

	const handleTitleChange = (event) => {
		if (titleLimit - event.target.value.length >= 0) {
			setNotes({
				title: (event.target.value),
				text: (event.target.value),
				tag: (event.target.value),
				date: ''
			})
		}
	}
	
	const handleTextChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNotes({
				title: (event.target.value),
				text: (event.target.value),
				tag: (event.target.value),
				date: ''
			})
		}
	};

	const handleSaveClick = () => {
		handleAddNote(notes.title, notes.tag, notes.text);
		setNotes({
			title: '',
			text: '',
			tag: '',
			date: ''
		})
	};

	return (
		<div className='app-main-new-note'>
			<textarea 
				className='tag-element'
				rows={1}
				id = 'Tag'
				placeholder= 'Tag...'
				value={notes.tag}
				onChange={handleTagChange}
			></textarea>
			<textarea 
				className='title-element'
				rows={1}
				id = 'title'
				placeholder= 'Title...'
				value={notes.title}
				onChange={handleTitleChange}
			></textarea>
			<textarea
				className='note-element'
				id = 'text'
				placeholder='Type to add a note...'
				value={notes.text}
				onChange={handleTextChange}
			></textarea>
			<div className='button-container'>
				<button className='save-btn' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;
