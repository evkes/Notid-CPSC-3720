import Note from './Note';

const NotesList = ({
	notes,
	handleDeleteNote,
}) => {
	
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<Note
					id={note.id}
					title = {note.title}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
		</div>
	);
};

export default NotesList;
