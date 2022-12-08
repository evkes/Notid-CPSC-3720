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
    let loadNotes;

    try {
      loadNotes = JSON.parse(localStorage.getItem('notid-notes-data'));
    }
    catch(e) {
      loadNotes = [];
      localStorage.setItem('notid-notes-data', JSON.stringify(notes));
    }
  
  const [notes, setNotes] = useState(loadNotes);

  const [displayNotes, setDisplayNotes] = useState(notes);

	useEffect(() => {
		localStorage.setItem(
			'notid-notes-data',
			JSON.stringify(notes)
		);
    setDisplayNotes(notes);
	}, [notes]);


  const [searchText, setSearchText] = useState('');

	const addNote = (title, text, tag) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
      title: title,
			text: text,
      tag: tag,
			date: date.toLocaleDateString("en-GB", {
        hour: "2-digit", 
        minute: "2-digit",
        second: "2-digit",
      }), 
		};
		const newNotes = [...notes];
    newNotes.push(newNote);
		setNotes(newNotes);
    
	};

	const deleteNote = (id) => {
		let newNotes = [...notes];
    newNotes = newNotes.filter((note) => note.id !== id); 
		setNotes(newNotes);
	};

  const handleOnClickNote = (id) => {
    const date = new Date();
    const noteChosen = notes.filter((note) => note.id === id);
    return [noteChosen.title, noteChosen.text, noteChosen.tag, date.toLocaleDateString];
  }

  return (
    <div className="App">
      <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>NoteID</h1>
            </div>
            
            <div className='search-container'>
                <Search handleSearchNote={setSearchText} />
                
        </div>
            
            <div className="app-sidebar-notes">
                <NotesList
                    notes={displayNotes.filter((note) =>
                      note.title.includes(searchText) || 
                      note.tag.includes(searchText)
                    )}
                    handleDeleteNote={deleteNote}
                    handleOnClickNote={handleOnClickNote}
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
      <div className='note-container'>
          <Header></Header>
          <AddNote handleAddNote={addNote} handleOnClickNote={handleOnClickNote}></AddNote>
      </div>
    </div>
  );
}

export default App;

