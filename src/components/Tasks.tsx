import { Task } from "./Task";
import { iTask } from "../App";
import styles from "./Tasks.module.css";
import { TbClipboardText } from "react-icons/tb";

interface Props {
    tasks: iTask[];
    onComplete: (taskId: string) => void;
    onDelete: (taskId: string) => void;
}

export function Tasks({ tasks, onComplete, onDelete }:Props) {

    const taskQuantity = tasks.length;
    const completedTasks = tasks.filter((task) => task.isCompleted).length;

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas criadas</p>
                    <span>{taskQuantity}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Concluídas</p>
                    <span>{completedTasks} de {taskQuantity}</span>
                </div>
            </header>

            <div className={styles.list}>
                {tasks.map((task) => (
                    <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} />
                ))}

                {tasks.length <= 0 && (
                    <section className={styles.empty}>
                        <TbClipboardText size={50} />
                        <div>
                            <p>Não há tarefas cadastradas</p>
                        </div>
                        <span>Crie suas tarefas e organize seus itens</span>
                    </section>
                )}
            </div>

        </section>
    )
}