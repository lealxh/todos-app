import React, { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { selectTodo, updateTodo } from "../../Redux/features/todoSlice"
import Loading from "../../components/loading"

function EditTodo() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { selectedTodo, error, loading = false } = useSelector(state => ({ ...state.todos }))
  const { id } = useParams()
  const [title, setTitle] = useState("")
  const [completed, setCompleted] = useState(false)
  useEffect(() => {
    dispatch(selectTodo(id))
  }, [])
  useEffect(() => {
    if (selectedTodo) {
      setTitle(selectedTodo.title)
      setCompleted(selectedTodo.completed)
    }
  }, [selectedTodo])
  function handleUpdate() {
    dispatch(updateTodo(id, { userId: 1, title, completed }))
      .then(resp => {
        console.log("Respuesta del dispatch")
        console.log(resp)
        alert("Updated succesfully")
        navigate("/list")
      })
      .catch(error => console.log(error))
  }
  return (
    <>
      <h1>Edit Todo {id}</h1>
      {loading ? (
        <Loading />
      ) : (
        <>
          <label htmlFor="title">Title</label>
          <input type={"text"} value={title} name="title" onChange={e => setTitle(e.target.value)} style={{ width: "300px" }} />

          <label htmlFor="title">Completed</label>
          <input type={"checkbox"} checked={completed} name="completed" onChange={e => setCompleted(e.target.checked)} />
          <input type={"button"} onClick={() => handleUpdate()} value={"Update"} style={{ width: "100px" }} />
        </>
      )}

      {error ? <div>{error}</div> : ""}
      <Link to={"/list"}>Back</Link>
    </>
  )
}

export default EditTodo
