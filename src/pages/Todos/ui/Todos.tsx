import { FC } from "react";
import s from "./Todos.module.scss";
import { PageTitle } from "@/entitites/PageTitle";
import SortAZIcon from "@/shared/icons/sort-a-z.svg?react";
import FiltersIcon from "@/shared/icons/filters.svg?react";
import { IconButton } from "@/shared/ui/IconButton";
import { Select } from "@/shared/ui/Select";

const TodosPage: FC = () => {
  return (
    <div className={s.page}>
      <header className={s.header}>
        <PageTitle standalone>Todos</PageTitle>
        <div className={s.tools}>
          <Select
            control={({ isOpen, onOpen, hasValue }) => (
              <IconButton
                icon={SortAZIcon}
                variant={isOpen ? "primary" : hasValue ? "success" : "default"}
                onClick={onOpen}
              />
            )}
            options={[
              { value: "value1", label: "New" },
              { value: "value2", label: "Old" },
              { value: "value3", label: "Priority" },
            ]}
          />
          <IconButton icon={FiltersIcon} />
        </div>
      </header>
    </div>
  );
};

export default TodosPage;
