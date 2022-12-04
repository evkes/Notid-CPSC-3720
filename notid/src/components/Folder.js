const Note = ({ id, title, text, date, handleDeleteNote, handleOnClickFolder}) => {
	return (
		<div className='note'>
			<div className="app-sidebar-note" onClick = {() => {handleOnClickFolder(id)}}>
                    <div className="sidebar-note-title">
                    
                        <strong>{title}</strong> {
							/* 
							<button 
							onClick={() => handleDeleteNote(id)}
							className='delete-icon'
							size='1.3em'>
							Delete</button>
							*/
						}
                    </div>

                <p>{text}</p>
                <small className="note-meta">Last modified {date}</small>
                
            </div>
		</div>
	);
};

export default Note;
