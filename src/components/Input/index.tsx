import { ChangeEvent, KeyboardEvent, MouseEvent, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TaskProps } from "../../App";
import styles from "./styles.module.css";

type InputProps = {
  tasks: TaskProps[]
  onAddNewTask: (task: TaskProps) => void
}

export function Input({tasks, onAddNewTask}: InputProps) {
  const [newValueTask, setNewValueTask] = useState("")
  const handleAddNewTask = (event: any) => {
    if(event.key === "Enter" || event.type === "click"){
      onAddNewTask({
        id: tasks.length + 1,
        content: newValueTask,
        status: false
      })
      setNewValueTask("")
    }
  }

  const handleNewValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewValueTask(e.target.value)
  }
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={newValueTask}
        id='newTask'
        onChange={handleNewValueChange}
        onKeyDown={handleAddNewTask}
        placeholder="Adicione uma nova tarefa"
      />
      <button className={styles.btnSubmit} type="submit" onClick={handleAddNewTask} disabled={newValueTask.length  === 0}>
        Criar
        <AiOutlinePlusCircle size={16} />
      </button>
    </div>
  );
}
