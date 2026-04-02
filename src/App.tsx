import { useState } from "react";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { ListTask } from "./components/ListTask";

export type TaskProps = {
  id?: number;
  content: string;
  status: boolean;
};

export function App() {
  const [tasks, setNewTask] = useState<TaskProps[]>([]);

  const addNewTask = (task: TaskProps) => {
    setNewTask([...tasks, task])
    console.log(tasks)

  };

  const deleteTask = (id: number) => {
    const tasksWithoutSelectedId = tasks.filter(task => task.id !== id)

    setNewTask(tasksWithoutSelectedId)
  }
  const changeStatusTask = (id: number) => {
    const updatedStatusTask = tasks.map(task => {
      if(task.id === id){
        return {
          ...task,
          status: !task.status
        }
      }
      return task
    })

    setNewTask(updatedStatusTask)
    console.log(tasks)
  };
  return (
    <div>
      <Header />
      <main>
        <Input tasks={tasks} onAddNewTask={addNewTask} />
        <ListTask listTasks={tasks} onDeleteTask={deleteTask} onChangeStatusTask={changeStatusTask}/>
      </main>
    </div>
  );
}
