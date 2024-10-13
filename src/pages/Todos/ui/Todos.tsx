import { FC } from "react";
import s from "./Todos.module.scss";
import { PageTitle } from "@/entitites/PageTitle";
import SortAZIcon from "@/shared/icons/sort-a-z.svg?react";
import { IconButton } from "@/shared/ui/IconButton";
import { Select } from "@/shared/ui/Select";
import { TodosFilter } from "@/features/Todos/TodosFilter";
import { useSelector } from "react-redux";
import { homespaceIdSelector } from "@/store/auth";
import { useGetTasksQuery } from "@/store";
import PlusSpacedIcon from "@/shared/icons/plus-spaced.svg?react";
import { FloatingButton } from "@/shared/ui/FloatingButton";
import { TodoItem } from "@/entitites/Todos";

const TodosPage: FC = () => {
  const homespaceId = useSelector(homespaceIdSelector);

  const { data: tasks = [] } = useGetTasksQuery(homespaceId!, {
    skip: !homespaceId,
  });

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
              { value: "value3", label: "Priority low" },
              { value: "value4", label: "Priority high" },
            ]}
          />
          <TodosFilter />
        </div>
      </header>
      <div className={s.list}>
        {tasks.map((task) => (
          <TodoItem key={task.id} {...task} />
        ))}
      </div>
      <FloatingButton
        icon={PlusSpacedIcon}
        variant='primary'
        href='/app/rooms/create'
      />
    </div>
  );
};

export default TodosPage;
