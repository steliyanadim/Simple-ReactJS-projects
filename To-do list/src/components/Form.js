import styles from './Form.module.css'
export default function Form({updateTodos}) {
    const submitHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const text = Object.fromEntries(data).text;
        form.reset();
        updateTodos(text);
    }
    return (
        <form className={styles['form']} onSubmit={(e) => submitHandler(e)} action="">
            <input className={styles['input']} type="text" name='text' />
            <button className={styles['button']}>Add Todo</button>
        </form>
    )
}