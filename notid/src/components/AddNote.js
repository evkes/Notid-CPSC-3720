import { useState } from 'react';
import { MdFolder } from 'react-icons/md';
import NotesList from './NotesList';

const AddNote = ({ handleAddNote, handleAddFolders, getFolders }) => {
	
	const [titleText, setTitleText] = useState('');
	const [noteText, setNoteText] = useState('');
	const [folderId, setFolderId] = useState(null);
	const [folderName, setFolderName] = useState("");
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
			handleAddNote(titleText, noteText, folderName);
			setTitleText('');
			setNoteText('');
		}
		
	};

	const handleFolderNameChange = (event) => {
		setFolderName(event.target.value);
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
				rows={1}
				id = 'folder'
				placeholder= 'Folder...'
				value={folderName}
				onChange={handleFolderNameChange}
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
