import './App.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Header from './components/Header';
import AddNote from './components/AddNote';
import FullCalendar from '@fullcalendar/react' // https://fullcalendar.io/docs/month-view
import dayGridPlugin from '@fullcalendar/daygrid'
import Search from './components/Search';
import Note from './components/Note';

const App = () => {
    let loadNotes;

    try {
      loadNotes = JSON.parse(localStorage.getItem('notid-notes-and-folder-data'));
    }
    catch(e) {
      loadNotes = [];
    }
  
  const [notes, setNotes] = useState(loadNotes);

  const [displayFolderId, setDisplayFolderId] = useState(null);

  const [displayNotes, setDisplayNotes] = useState(notes);

	useEffect(() => {
		localStorage.setItem(
			'notid-notes-and-folder-data',
			JSON.stringify(notes)
		);
    setDisplayNotes(notes);
	}, [notes]);

  useEffect(() => {
    console.log(displayFolderId)
    if (displayFolderId !== null) {
      setDisplayNotes(notes.find((element) => element.id === displayFolderId).notes);
    }
    else {
      setDisplayNotes(notes);
    }
	}, [displayFolderId]);

  const [searchText, setSearchText] = useState('');

	const addNote = (title, text, folderTitle = null) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
      title: title,
			text: text,
      type: "Note",
      parentId: null,
			date: date.toLocaleDateString(),
		};
    let folder = notes.find(note => note.type === "Folder" && note.title === folderTitle); 
		const newNotes = [...notes];
    if (folderTitle) {
      if (!folder) {
        folder = addFolder(folderTitle);
      }
      const folderIndex = newNotes.indexOf(folder);
      newNote.parentId = folder.id;
      // Deletes the folder in order to append a new note 
      if (folderIndex !== -1) {
        newNotes.splice(folderIndex, 1);
      }
      folder.notes.push(newNote);
      newNotes.push(folder);
    }
    else {
      newNotes.push(newNote);
    }
		setNotes(newNotes);
    
	};
  const addFolder = (title) => {
		const date = new Date();
		const newFolder = {
			id: nanoid(),
      title: title,
			notes: [],
      type: "Folder",
			date: date.toLocaleDateString(),
		};
    return newFolder;
  }

	const deleteNote = (id, folderId) => {
    const folder = notes.find(note => note.type === "Folder" && note.id === folderId);
		let newNotes = [...notes];
    if (folder) {
      newNotes.remove(newNotes.indexOf(folder));
      folder.notes = folder.notes.filter((note) => note.id !== id);
      newNotes.push(folder);
    }
    else {
      // Deletes from top level if not within a folder
      newNotes = newNotes.filter((note) => note.id !== id); 
    }
		setNotes(newNotes);
	};

  const deleteFolder = (folderId) => {
		const newNotes = notes.filter((note) => note.type === "Folder" && note.id !== folderId);
		setNotes(newNotes);
	};

  const showFoldersOnly = () => {
    return notes.filter((note) => note.type === "Folder");
  }

  const handleOnClickFolder = (id) => {
     setDisplayFolderId(id);
  }

  const handleOnClickNote = (id) => {
    const date = new Date();
    const noteChosen = notes.filter((note) => note.id === id);
    return [noteChosen.title, noteChosen.text, date.toLocaleDateString];
  }
  
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
                    notes={displayNotes.filter((note) =>
                      note.title.includes(searchText)
                    )}
                    handleDeleteNote={deleteNote}
                    handleOnClickFolder={handleOnClickFolder}
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
      <div className='container'>
          <Header></Header>
          <AddNote handleAddNote={addNote} handleAddFolders={addFolder} getFolders={showFoldersOnly} handleOnClickNote={handleOnClickNote}></AddNote>
      </div>
    </div>
  );
}

export default App;

