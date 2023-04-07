import styles from './Todo.module.css'

export default function Todo({
    id,
    text,
    isCompleted,
    toggleTodoStatus,
    deleteTodo,
}){

    	return(
            <tr className={`${isCompleted ? styles['completeRow']: styles['notCompleteRow']} ${styles['row']}`}>
            <td className={`${styles['td']} ${styles['text']}`}>{text}</td>
            <td className={styles['td']}>{isCompleted ? `Complete`: `Not complete`}</td>
            <td><button className={`${styles['td']} ${styles['button']}`} onClick={() => toggleTodoStatus(id)}>Change status</button></td>
            <td><button className={`${styles['td']} ${styles['button']}`}onClick={()=> deleteTodo(id)}>Delete</button></td>
          </tr>
        )
}
