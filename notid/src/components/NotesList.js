import Note from './Note';

const NotesList = ({
	notes,
	handleDeleteNote,
	handleOnClickNote,
}) => {
	
	return (
		<div className='notes-list'>
			{notes.map((note) => {
				return <Note
					id={note.id}
					title = {note.title}
					tag = {note.tag}
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
