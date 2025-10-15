import { useState } from "react";

const NewTaskForm = ({ addOnTask }: any) => {
  const [enteredTask, setEnteredTask] = useState("");

  const submitHandler = (event: any) => {
    event.preventDefault();

    if (enteredTask !== " ") {
      const formData = {
        id: Math.random().toString(),
        title: enteredTask,
        status: false,
      };

      addOnTask(formData);
    }

    setEnteredTask(" ");
  };
  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="pt-4 pb-4 w-full flex flex-row gap-2"
      >
        <input
          onChange={(event) => setEnteredTask(event.target.value)}
          type="text"
          value={enteredTask}
          required={true}
          className="form-custom-input w-full"
        />

        <button type="submit" className="custom-button w-50">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default NewTaskForm;
