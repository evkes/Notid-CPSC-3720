# Notid-CPSC-3720

**Project link:**
http://ec2-50-16-147-5.compute-1.amazonaws.com:3000/

Organized note taking project made for CPSC-3720, a software engineering class at Clemson University.

**Sprint 1 contributors**:
Kevin Le (kle35 and le515), Evan Kessler (evkes2002 and alt account evkes), Chelsea Van Vulpen (cjvvulpen), and Harrison Langpaul​ (Nesaak)
Manager and Professor:
Paige Anne Rodeghero (paigerodeghero)

**Sprint 1 scope**:
List of files, text we can open. Create folders or dividers, a search function, top file most recent. We chose dividers (tags) instead of folders and data stored in local storage.


**How to use**:
- Create a note by typing directly into the tag textbox, title textbox, and type to add note textbox and press save
- Your notes will populate on the right hand side on a note preview, with the tag and title with the most recently edited date
- To open a note, simply click on it
- To delete a note press "delete"
- To search for a note, type your tag or title in the search bar, and the note display will automatically display. The search bar is case sensitive.
- To navigate through the calendar, we have left and right arrow buttons to signify changing the month. Click on the left button to move back a month and right button to move forward a month. Click "today" to display the current date.

**APIS Used**:
- {react-icons/md} from 'react' - to add icons to webpage
- { useState, useEffect } from 'react' - essential for local storage, editing, adding, and removing notes
- { nanoid } from 'nanoid' - an id that is essential for making notes organized and unique
- FullCalendar from '@fullcalendar/react' // https://fullcalendar.io/docs/month-view
- dayGridPlugin from '@fullcalendar/daygrid' - calendar APIs

**Helpful resources that guided us through this project**:
- Basic React Boilerplate set up from https://github.com/jrgrimshaw/notes-app-tutorial/blob/main/src/App.css
- Ideas for some search functionality, organization from https://github.com/chrisblakely01/react-notes-app
- Pipelineing tutorial for searching and sorting algorithms, with arrays from https://stackoverflow.com/questions/46884394/compare-searching-by-date-reactjs and https://stackoverflow.com/questions/10123953/how-to-sort-an-object-array-by-date-property
Use
- How to use react's use effect and use state: https://www.youtube.com/watch?v=0ZJgIjIuY7U
- How to use React's localstorage: https://blog.logrocket.com/localstorage-javascript-complete-guide/#:~:text=localStorage%20in%20JavaScript.-,What%20is%20localStorage%20in%20JavaScript%3F,the%20browser%20window%20is%20closed.
- Frontend model inspired by: https://app.grammarly.com/ and github issues
- Note taking information and front end design: https://github.com/readme/guides/documentation-note-taking
- Research on intuitive design: https://cxl.com/blog/intuitive-web-design-how-to-make-your-website-intuitive-to-use/#:~:text=The%20easier%20your%20website%20is,stopping%2C%20even%20for%20a%20second

**How to contribute to this project**:
- Clone the repository
- Make your desired changes and test your code
- Submit a pull request with your desired changes

**Plans for Sprint 2**:
- When clicking on a note, we will display the notes taken from that day
- Adding folder functionality on top of the tags
- Adding a color choice functionality for tags- https://www.youtube.com/watch?v=senxk5FbsJM or https://casesandberg.github.io/react-color/
- Authentication to make localstorage data more secure

**Extra information about our project**:
Search is case sensitive, can search by tag or by title

Cookies are very secure, however we went with localstorage. This is an intereresting research article that discusses the pros and cons of each one: https://www.pivotpointsecurity.com/local-storage-versus-cookies-which-to-use-to-securely-store-session-tokens/#:~:text=Cookies%20are%20intended%20to%20be,localStorage%20can%20store%20more%20data.

For our project, we recognized that cookies store less data and are harder to implement than localstorage JSON parsing. Cookies can only store less data, which is not good for our application that can store large notes. We also had to weigh the pros and cons between the security of cookies and the security of localstorage. While localstorage is less secure than cookies, it stores more data. We do plan on addressing possible security issues in the future by possibly adding some form of authentication for the user to store their information in localstorage.

**User Stories**
- As a user, I want to open a previously edited note.
- As a user, I want to be able to delete a previously written note.
- As a user, I want to be able to edit a previously written note.
- As a user, I want a search bar so that I can find things quicker.
- As a user, I want to have a calendar to see the dates.
- As a user, I want the files to be organized as last edited to keep notes organized and recent.
- As a user, I want to be able to have a tag on each file to organize the notes.
- As a user, I want to store my files on local storage so that I can access them later.
