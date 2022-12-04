import Note from './Note';
import Folder from './Folder';

const NotesList = ({
	notes,
	handleDeleteNote,
	handleOnClickNote,
	handleOnClickFolder,
}) => {
	
	return (
		<div className='notes-list'>
			{notes.map((note) => {
				if (note.type === "Folder") {
					return <Folder
					id={note.id}
					title = {note.title}
					text={note.text}
					date={note.date}
					type={note.type}
					children={note.notes}
					handleDeleteFolder={handleDeleteNote}
					handleOnClickFolder={handleOnClickFolder}				
					/>
				}
				return <Note
					id={note.id}
					title = {note.title}
					text={note.text}
					date={note.date}
					type={note.type}
					children={note.notes}
					handleDeleteNote={handleDeleteNote}
					handleOnClickNote={handleOnClickNote}				
					/>
			})}
		</div>
	);
};

export default NotesList;
