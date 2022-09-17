import styles from "./Task.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { iTask } from "../App";

interface Props {
    task: iTask;
    onComplete: (taskId: string) => void;
    onDelete: (taskId: string) => void;
}

export function Task({ task, onComplete, onDelete }: Props) {

    return (
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
            </button>

            <p className={task.isCompleted ? styles.textCompleted : ""}>
                {task.content}
            </p>

            <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
                <TbTrash size={19} />
            </button>
        </div>
    )
}