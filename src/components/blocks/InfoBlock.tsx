const InfoBlock = () => {
  return (
    <div className="md:order-2 order-1 wrapper bg-[url(/images/bg.svg)] bg-cover bg-center bg-no-repeat w-full md:h-dvh sm:h-400 content-center p-4">
      <div className="mx-auto max-w-lg text-white">
        <div className="flex flex-col gap-4">
          <h2 className="md:text-4xl text-2xl font-bold">
            Project Showcase: <br></br>
            <span className="text-highlight">To-Do List Application</span>
          </h2>
          This project is a complete, fully functional To-Do list app built with
          React and TypeScript.
        </div>
        <ul
          className="mt-8 list-disc
"
        >
          <li className="mt-2">
            <span className="text-highlight">
              State Management & Persistence: &nbsp;
            </span>
            Used useState to manage the central tasks array and the
            currentFilter. Implemented the useEffect hook to synchronize app
            state with browser localStorage, ensuring data persists across
            sessions.
          </li>
          <li className="mt-2">
            <span className="text-highlight">
              Data Immutability (CRUD): &nbsp;
            </span>
            Mastered immutable array updates: used the spread operator with
            .map() to toggle task status and .filter() to safely remove items
            without directly modifying state.
          </li>
          <li className="mt-2">
            <span className="text-highlight">
              Lifting State Up & Prop Drilling: &nbsp;
            </span>
            Implemented handler functions (updateTaskStatus, removeTaskHandler)
            in the central Dashboard component and passed them down as props to
            the child TaskItem. Successfully passed filter controls via prop
            drilling through ToDoHeader.
          </li>
          <li className="mt-2">
            <span className="text-highlight">Dynamic Filtering: &nbsp;</span>
            Created a controlled select input and applied the native .filter()
            method to the main task array to dynamically display subsets of data
            (all, active, completed) without requiring separate components.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InfoBlock;
