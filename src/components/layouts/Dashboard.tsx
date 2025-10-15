import { useEffect, useState } from "react";
import ToDoHeader from "../blocks/ToDoHeader";
import NewTaskForm from "../blocks/NewTaskForm";
import InfoBlock from "../blocks/InfoBlock";
import ListOfTasks from "../blocks/ListOfTasks";
import type { Task, FilterType } from "../../types/Task";

const Dashboard = () => {
  const getStoredData = (key: string) => {
    const storedData = localStorage.getItem(key);

    if (storedData) {
      return JSON.parse(storedData);
    }

    return [];
  };
  const [tasks, setTasks] = useState<Task[]>(() => getStoredData("tasks"));
  const [currentFilter, setCurrentFilter] = useState<FilterType>(() => {
    const storedFilter = localStorage.getItem("filter");
    return (storedFilter as FilterType) || "all";
  });

  useEffect(() => {
    const tasksJSON = JSON.stringify(tasks);
    localStorage.setItem("tasks", tasksJSON);
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("filter", currentFilter);
  }, [currentFilter]);

  const addTaskHander = (task: any) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  const updateTaskStatus = (id: number) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, status: task.status === true ? false : true };
        }
        return task;
      });
    });
  };

  const removeTaskHandler = (id: number) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  };

  const changeFilterHandler = (newFilterValue: FilterType) => {
    setCurrentFilter(newFilterValue);
  };

  let filteredTasks = tasks.filter((task) => {
    if (currentFilter === "total") {
      return true;
    }

    if (currentFilter === "completed") {
      return task.status;
    }

    if (currentFilter === "active") {
      return !task.status;
    }

    return true;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <InfoBlock></InfoBlock>
      <div className=" bg-neutral-200 w-full md:p-8 p-4 flex flex-col md:overflow-hidden h-dvh">
        <ToDoHeader
          tasks={filteredTasks}
          currentFilter={currentFilter}
          changeFilterHandler={changeFilterHandler}
        ></ToDoHeader>
        <NewTaskForm addOnTask={addTaskHander}></NewTaskForm>

        <ListOfTasks
          tasks={filteredTasks}
          onToggleTask={updateTaskStatus}
          onTaskDelete={removeTaskHandler}
        ></ListOfTasks>
      </div>
    </div>
  );
};

export default Dashboard;
