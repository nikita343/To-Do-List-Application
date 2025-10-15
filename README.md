Project Showcase: To-Do List Application

This project is a complete, fully functional To-Do list app built with React and TypeScript.
State Management & Persistence: Used useState to manage the central tasks array and the currentFilter. Implemented the useEffect hook to synchronize app state with browser localStorage, ensuring data persists across sessions.

Data Immutability (CRUD):  Mastered immutable array updates: used the spread operator with .map() to toggle task status and .filter() to safely remove items without directly modifying state.

Lifting State Up & Prop Drilling:  Implemented handler functions (updateTaskStatus, removeTaskHandler) in the central Dashboard component and passed them down as props to the child TaskItem. 
Successfully passed filter controls via prop drilling through ToDoHeader.

Dynamic Filtering:  Created a controlled select input and applied the native .filter() method to the main task array to dynamically display subsets of data (all, active, completed) without requiring separate components.
