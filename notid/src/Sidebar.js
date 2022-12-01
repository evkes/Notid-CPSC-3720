import FullCalendar from '@fullcalendar/react' // https://fullcalendar.io/docs/month-view
import dayGridPlugin from '@fullcalendar/daygrid'
import { useState, useEffect } from 'react';
import NotesList from './components/NotesList';
import Search from './components/Search';

const Sidebar = () => {
    const [notes, setNotes] = useState([]);

	const [setSearchText] = useState('');

    useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

    

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

    return (
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>NoteID</h1>
                <button className="add">Add</button>
            </div>
            
            <div className='container'>
                <Search handleSearchNote={setSearchText} />
                
        </div>
            
            <div className="app-sidebar-notes">
            <div className="app-sidebar-note">
                    <div className="sidebar-note-title">
                    
                        <strong>Hello World</strong>
                        <button>Delete</button>

                    </div>

                <p>Sample Text</p>
                <small className="note-meta">Last modified [Sample Date]</small>
                
            </div>
                <NotesList
                    notes={notes}
                    handleDeleteNote={deleteNote}
                />
            </div>
            <div className="app-sidebar-calendar">
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                showNonCurrentDates={false}
                />
            </div>   
        </div>
    );
        
}

export default Sidebar;