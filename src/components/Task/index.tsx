import styles from "./style.module.css";
import { HiOutlineTrash } from "react-icons/hi";
import { TaskProps } from "../../App";

interface CardTaskProps extends TaskProps {
  onChangeCheckbox: (id: number) => void,
  onDeleteTask: (id: number) => void
}

export function Task({id, content, status, onChangeCheckbox, onDeleteTask}: CardTaskProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={`test-checkbox ${styles.customCheckbox}`}>
          <input id={`checkbox-${id}`} type="checkbox" onChange={() => onChangeCheckbox(Number(id))}/>
          <label htmlFor={`checkbox-${id}`}></label>
        </div>
        <p className={status ? styles.textMark : ''}>
          {content}
        </p>
      </div>
      <button className={`test-btn-delete ${styles.btnDelete}`} onClick={() => onDeleteTask(Number(id))}>
        <HiOutlineTrash size={20} />
      </button>
    </div>
  );
}
