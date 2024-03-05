import { getTodos } from "../store/reducer/Todo";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.data);
  const isLoading = useSelector((state) => state.todo.isLoading);
  const getTodoHandler = () => {
    dispatch(getTodos());
  };
  return (
    <>
      <button className="welcome-btn" onClick={getTodoHandler}>
        Get Todos
      </button>
      <section>
        {isLoading && <p className="loading">Todos is loading</p>}
        {!isLoading && todos.map((todo) => <p key={todo.id}>{todo.title}</p>)}
        {!isLoading && todos.length < 1 && ( <p>Click button to get todos data </p>)}
      </section>
    </>
  );
};

export default Todo;
