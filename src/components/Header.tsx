import todoLogo from "../assets/img/Logo.svg";
import { AiOutlinePlusCircle } from 'react-icons/ai'
import styles from "./Header.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
    onAddTask: (taskContent: string) => void;
}

export function Header({ onAddTask }: Props) {

    const [content, setContent] = useState("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        onAddTask(content);
        setContent("");
    }

    function onChangeContent(event: ChangeEvent<HTMLInputElement>) {
        setContent(event.target.value);
    }

    return (
        <header className={styles.header}>
            <img src={todoLogo} />

            <form className={styles.newTasksForm} onSubmit={handleSubmit}>
                <input
                placeholder="Adicione uma nova tarefa..." 
                onChange={onChangeContent} 
                value={content}
                required />
                <button>
                    Criar
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
        
    );
}