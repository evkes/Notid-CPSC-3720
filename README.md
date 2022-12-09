# Notid-CPSC-3720

Organized note taking project made for CPSC-3720, a software engineering class at Clemson University. 

**Sprint 1 contributors**:
Kevin Le (kle35 and le515), Evan Kessler (evkes2002 and alt account evkes), Chelsea Van Vulpen (cjvvulpen), and Harrison Langpaul​ (Nesaak)
Manager and Professor: 
Paige Anne Rodeghero (paigerodeghero)

**Sprint 1 scope**: 
List of files, text we can open. Create folders or dividers, a search function, top file most recent. We chose dividers (tags) instead of folders and data stored in local storage.

**APIS Used**:
 {react-icons/md} from 'react' - to add icons to webpage
 { useState, useEffect } from 'react' - essential for local storage, editing, adding, and removing notes
 { nanoid } from 'nanoid' - an id that is essential for making notes organized and unique
 FullCalendar from '@fullcalendar/react' // https://fullcalendar.io/docs/month-view
 dayGridPlugin from '@fullcalendar/daygrid' - calendar APIs

**Helpful resources that guided us through this project**:
Basic React Boilerplate set up from https://github.com/jrgrimshaw/notes-app-tutorial/blob/main/src/App.css
Ideas for some search functionality, organization from https://github.com/chrisblakely01/react-notes-app
Pipelineing tutorial for searching and sorting algorithms, with arrays from https://stackoverflow.com/questions/46884394/compare-searching-by-date-reactjs and https://stackoverflow.com/questions/10123953/how-to-sort-an-object-array-by-date-property
Use
How to use react's use effect and use state: https://www.youtube.com/watch?v=0ZJgIjIuY7U
How to use React's localstorage: https://blog.logrocket.com/localstorage-javascript-complete-guide/#:~:text=localStorage%20in%20JavaScript.-,What%20is%20localStorage%20in%20JavaScript%3F,the%20browser%20window%20is%20closed.
Frontend model inspired by: https://app.grammarly.com/ and github issues
Note taking information and front end design: https://github.com/readme/guides/documentation-note-taking 
Research on intuitive design: https://cxl.com/blog/intuitive-web-design-how-to-make-your-website-intuitive-to-use/#:~:text=The%20easier%20your%20website%20is,stopping%2C%20even%20for%20a%20second

**Plans for Sprint 2**:
When clicking on a note, we will display the notes taken from that day
Adding folder functionality on top of the tags
Adding a color choice functionality for tags- https://www.youtube.com/watch?v=senxk5FbsJM or https://casesandberg.github.io/react-color/

**Extra information about our project**:
Search is case sensitive, can search by tag or by title

Cookies are very secure, however we went with localstorage. This is an intereresting research article that discusses the pros and cons of each one: https://www.pivotpointsecurity.com/local-storage-versus-cookies-which-to-use-to-securely-store-session-tokens/#:~:text=Cookies%20are%20intended%20to%20be,localStorage%20can%20store%20more%20data.

For our project, we believe that storing more note data in is better than the security aspects, as our target demographic will not be harbouring
government secrets, but rather using this as a fun tool to assist with note taking for class, where data does not necessarially need to be as secure. However, we may add some encryption and authentication in the future to help make this data more secure. 
We used to have a note display, however, that made the design less user friendly as too much information was on the screen at once and it looked too cluttered, so we decided to remove this and just have the user search by title or tag.