import type { FilterType } from "../../types/Task";

type FilterButtonProps = {
  currentFilter: string;
  changeFilterHandler: (filter: string) => void;
};

const FilterButton = ({
  currentFilter,
  changeFilterHandler,
}: FilterButtonProps) => {
  return (
    <select
      className="custom-select"
      value={currentFilter}
      onChange={(e) => {
        changeFilterHandler(e.target.value as FilterType);
      }}
    >
      <option value="total">Total</option>
      <option value="active">Active</option>
      <option value="completed">Completed</option>
    </select>
  );
};

export default FilterButton;
