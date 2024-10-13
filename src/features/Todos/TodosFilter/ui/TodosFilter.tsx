import { FC } from "react";
import s from "./TodosFilter.module.scss";
import FiltersIcon from "@/shared/icons/filters.svg?react";
import SaveIcon from "@/shared/icons/save.svg?react";
import { Drawer } from "@/shared/ui/Drawer";
import { IconButton } from "@/shared/ui/IconButton";
import { Button } from "@/shared/ui/Button";
import { Checkbox } from "@/shared/ui/Checkbox";
import { useSelector } from "react-redux";
import { homespaceIdSelector } from "@/store/auth";
import { useGetRoomsQuery, useGetUsersQuery } from "@/store";

const TodosFilter: FC = () => {
  const homespaceId = useSelector(homespaceIdSelector);

  const { data: rooms = [] } = useGetRoomsQuery(homespaceId!, {
    skip: !homespaceId,
  });

  const { data: users = [] } = useGetUsersQuery(homespaceId!, {
    skip: !homespaceId,
  });

  return (
    <Drawer
      title='filters'
      control={({ onOpen }) => (
        <IconButton icon={FiltersIcon} onClick={onOpen} />
      )}
      actions={({ onClose }) => (
        <div className={s.actions}>
          <Button
            className={s.actionsButton}
            variant='primary'
            onClick={onClose}
            centered
            size='large'
          >
            Apply
          </Button>
          <IconButton
            className={s.actionsButton}
            variant='primary'
            icon={SaveIcon}
            onClick={onClose}
            size='large'
          />
          <Button
            className={s.actionsButton}
            onClick={onClose}
            centered
            size='large'
          >
            Clear all
          </Button>
          <Button
            className={s.actionsButton}
            onClick={onClose}
            centered
            size='large'
          >
            Cancel
          </Button>
        </div>
      )}
      className={s.filters}
    >
      <div className={s.filtersBlock}>
        <p className={s.filtersTitle}>Room</p>
        {rooms.map((room) => (
          <Checkbox key={room.id} label={room.name} />
        ))}
      </div>
      <div className={s.filtersBlock}>
        <p className={s.filtersTitle}>Assignee</p>
        {users.map((user) => (
          <Checkbox key={user.id} label={user.name} />
        ))}
      </div>
      <div className={s.filtersBlock}>
        <p className={s.filtersTitle}>Priority</p>
        <Checkbox label="Low" />
        <Checkbox label="Medium" />
        <Checkbox label="High" />
      </div>
      <div className={s.filtersBlock}>
        <p className={s.filtersTitle}>Status</p>
        <Checkbox label="Created" />
        <Checkbox label="In progress" />
        <Checkbox label="Done" />
        <Checkbox label="Canceled" />
      </div>
      <div className={s.filtersBlock}>
        <p className={s.filtersTitle}>Deadline</p>
      </div>
      <div className={s.filtersBlock}>
        <p className={s.filtersTitle}>Tags</p>
      </div>
    </Drawer>
  );
};

export default TodosFilter;
