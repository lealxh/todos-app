import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import Loading from "../../components/loading"
import { useDispatch } from "react-redux"
import { getTodos } from "../../Redux/features/todoSlice"

function ListTodos() {
  const dispatch = useDispatch()
  const { todos = [], loading = false, error = null } = useSelector(state => ({ ...state.todos }))

  useEffect(() => {
    if (todos.length == 0) dispatch(getTodos())
  }, [])

  return (
    <>
      <h1>List Todos</h1>
      <div>
        {loading ? (
          <Loading />
        ) : todos.length > 0 ? (
          <ul>
            {todos.map(todo => {
              return (
                <li key={todo.id}>
                  <input type="checkbox" checked={todo.completed} readOnly="true" />
                  <Link to={`/edit/${todo.id}`}>{todo.title}</Link>
                </li>
              )
            })}
          </ul>
        ) : (
          <div>No Todos to Show</div>
        )}
        {error ? <div>{error}</div> : ""}
      </div>
      <Link to={"/"}>Back</Link>
    </>
  )
}

export default ListTodos
