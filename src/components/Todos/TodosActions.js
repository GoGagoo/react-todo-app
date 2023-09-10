import { RiDeleteBinLine, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './TodosActions.module.css'

function TodosActions({ resetTodos, deleteCompletedTodo, completedTodosExists }) {
  return (
    <div className={styles.todosActionContainer}>
      <Button title={"Reset Todo"} onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button title={"Clear Completed Todo"} onClick={deleteCompletedTodo} disabled={!completedTodosExists}>
        <RiDeleteBinLine />
      </Button>
    </div>
  )
}

export default TodosActions