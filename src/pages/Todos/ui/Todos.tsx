import { FC } from "react";
import s from "./Todos.module.scss";
import { PageTitle } from "@/entitites/PageTitle";
import SortAZIcon from "@/shared/icons/sort-a-z.svg?react";
import FiltersIcon from "@/shared/icons/filters.svg?react";
import SaveIcon from "@/shared/icons/save.svg?react";
import { IconButton } from "@/shared/ui/IconButton";
import { Select } from "@/shared/ui/Select";
import { Drawer } from "@/shared/ui/Drawer";
import { Button } from "@/shared/ui/Button";

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
          <Drawer
            title='filters'
            control={({ onOpen }) => (
              <IconButton icon={FiltersIcon} onClick={onOpen} />
            )}
            actions={({ onClose }) => (
              <div className={s.filtersActions}>
                <Button
                  className={s.filtersAction}
                  variant='primary'
                  onClick={onClose}
                  centered
                  size='large'
                >
                  Apply
                </Button>
                <IconButton
                  className={s.filtersAction}
                  variant='primary'
                  icon={SaveIcon}
                  onClick={onClose}
                  size='large'
                />
                <Button
                  className={s.filtersAction}
                  onClick={onClose}
                  centered
                  size='large'
                >
                  Cancel
                </Button>
              </div>
            )}
          >
            filters
          </Drawer>
        </div>
      </header>
    </div>
  );
};

export default TodosPage;
