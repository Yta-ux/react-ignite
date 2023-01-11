import { TaskProps } from "../../App";
import { Empty } from "../Empty";
import { Task } from "../Task";
import styles from "./style.module.css";

type ListTaskProps = {
  listTasks: TaskProps[];
  onChangeStatusTask: (id: number) => void,
  onDeleteTask: (id: number) => void
};

export function ListTask({ listTasks, onChangeStatusTask, onDeleteTask }: ListTaskProps) {
  const totalCompletedTasks = listTasks.reduce(
    (previousValue: any, currentValue: any) => {
      if (currentValue.status === true) {
        previousValue++;
      }
      return previousValue;
    },
    0
  );
  return (
    <div className={styles.container}>
      <div className={styles.headerList}>
        <div>
          <strong>Tarefas criadas</strong>
          <p>{listTasks.length}</p>
        </div>
        <div>
          <strong>Concluídas</strong>
          <p>
            {totalCompletedTasks === 0
              ? "0"
              : `${totalCompletedTasks} de ${listTasks.length}`}
          </p>
        </div>
      </div>
      <div className={styles.listTask}>
        {listTasks.length === 0 ? (
          <Empty />
        ) : (
          listTasks.map((task) => {
            return <Task key={task.id} id={task.id} content={task.content} status={task.status} onDeleteTask={onDeleteTask} onChangeCheckbox={onChangeStatusTask}/>;
          })
        )}
      </div>
    </div>
  );
}
