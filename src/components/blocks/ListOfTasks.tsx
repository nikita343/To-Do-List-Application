import TaskItem from "./TaskItem";
type ListOfTasksProps = {
  tasks: any;
  onToggleTask: (id: any) => void;
  onTaskDelete: (id: any) => void;
};
const ListOfTasks = ({
  tasks,
  onToggleTask,
  onTaskDelete,
}: ListOfTasksProps) => {
  return (
    <div className="grow overflow-auto custom-scrollbar pr-4">
      {tasks.map((task: any) => (
        <TaskItem
          key={task.id}
          onToggleTask={onToggleTask}
          onTaskDelete={onTaskDelete}
          task={task}
        ></TaskItem>
      ))}
    </div>
  );
};

export default ListOfTasks;
