import FullCalendar from '@fullcalendar/react' // https://fullcalendar.io/docs/month-view
import dayGridPlugin from '@fullcalendar/daygrid'

function Sidebar(){
    return (
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>NoteID</h1>
                <button>Add</button>
            </div>
            <div className="app-sidebar-notes">
                <div className="app-sidebar-note">
                    <div className="sidebar-note-title">

                        <strong>Title</strong>
                        <button>Delete</button>

                    </div>

                <p>Note preview</p>
                <small className="note-meta">Last modified [date]</small>
                
                </div>
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