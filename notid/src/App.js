import './App.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Header from './components/Header';
import AddNote from './components/AddNote';
import FullCalendar from '@fullcalendar/react' // https://fullcalendar.io/docs/month-view
import dayGridPlugin from '@fullcalendar/daygrid'
import Search from './components/Search';

const App = () => {
  const [notes, setNotes] = useState([
	]);

	useEffect(() => {
		const savedNotes = window.localStorage.getItem('react-notes-app-data');
		if (savedNotes != null) { setNotes(JSON.parse(savedNotes)); }
	}, []);

	useEffect(() => {
		window.localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

  const [setSearchText] = useState('');

	const addNote = (title, text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
            title: title,
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

  
  return (
    <div className="App">
      <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>NoteID</h1>
                <button className="add">Add</button>
            </div>
            
            <div className='container'>
                <Search handleSearchNote={setSearchText} />
                
        </div>
            
            <div className="app-sidebar-notes">
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
      <div className='container'>
          <Header></Header>
          <AddNote handleAddNote={addNote}></AddNote>
      </div>
    </div>
  );
}

export default App;

