import FilterButton from "./FilterButton";

type ToDoHeaderProps = {
  tasks: any;
  currentFilter: any;
  changeFilterHandler: any;
};
const ToDoHeader = ({
  tasks,
  currentFilter,
  changeFilterHandler,
}: ToDoHeaderProps) => {
  const user = {
    name: "User",
  };
  const length = tasks.length;
  const spelling = length === 1 ? "task" : "tasks";
  const status = currentFilter;
  return (
    <div className="flex flex-row justify-between">
      <article className="flex flex-col gap-2">
        <h1 className="lg:text-4xl font-bold md:text-2xl">
          Welcome {user.name}
        </h1>
        <p className="text-neutral-500">
          {length} {status} {spelling}
        </p>
      </article>

      <FilterButton
        currentFilter={currentFilter}
        changeFilterHandler={changeFilterHandler}
      ></FilterButton>
    </div>
  );
};

export default ToDoHeader;
