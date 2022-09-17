import { useEffect, useState } from "react";
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"

const LOCAL_STORAGE_KEY = "savedTasks";

export interface iTask {
  id: string;
  content: string;
  isCompleted: boolean;
}
export function App() {

  const [tasks, setTasks] = useState<iTask[]>([]);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved) {
      setTasks(JSON.parse(saved))
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function setTasksAndSave(newTasks: iTask[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask(taskContent: string) {
    setTasksAndSave([
      ...tasks, {
        id:crypto.randomUUID(), 
        content: taskContent,
        isCompleted: false
      }
    ]);
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted, 
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
 }

  function deleteTaksById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks 
      tasks={tasks}
      onComplete={toggleTaskCompletedById}
      onDelete={deleteTaksById} />
    </>
  )
}

