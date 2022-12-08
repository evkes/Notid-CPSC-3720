const Note = ({ id, tag, title, text, date, handleDeleteNote}) => {
	
	const getNote = () => {
		console.log(id);
		return [id, tag, title, text, date];
	}

	return (
		<div className='note'>
			<div className="app-sidebar-note" onClick = {() => getNote()}>
					<div className = "tag-data">
						<u>{tag}</u>
					</div>
					<div className="sidebar-note-title">
                        <strong>{title}</strong>
                        <button 
						onClick={() => handleDeleteNote(id)}
						className='delete-icon'
						size='1.3em'>
						Delete</button>

                    </div>

                <p>{text}</p>
                <small className="note-meta">Last modified {date}</small>
                
            </div>
		</div>
	);
};

export default Note;
