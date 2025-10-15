type TaskItemProps = {
  task: any;
  onToggleTask: (id: any) => void;
  onTaskDelete: (id: any) => void;
};
const TaskItem = ({ task, onToggleTask, onTaskDelete }: TaskItemProps) => {
  return (
    <div
      className={`${task.status ? "task-item-competed" : "task-item-nocomlete"} bg-white mb-2 p-4 rounded-lg border border-white duration-300 ease-in-out hover:border-neutral-400 flex justify-between overflow-hidden flex-row task-item-wrapper`}
    >
      <div className="flex flex-row items-center gap-2 task-item">
        <div
          className={`custom-icon ${task.status ? "active" : ""}`}
          onClick={() => onToggleTask(task.id)}
        ></div>
        <p className="font-medium task-item-text">{task.title}</p>
      </div>

      <div className="task-right">
        <div
          className="custom-icon dark"
          onClick={() => onTaskDelete(task.id)}
        ></div>
      </div>
    </div>
  );
};

export default TaskItem;
