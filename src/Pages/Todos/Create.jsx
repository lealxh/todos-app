import React, { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { createTodo } from "../../Redux/features/todoSlice"
import Loading from "../../components/loading"

function CreateTodo() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { error, loading = false } = useSelector(state => ({ ...state.todos }))
  const [title, setTitle] = useState("")
  const [completed, setCompleted] = useState(false)

  function handleCreate() {
    dispatch(createTodo({ userId: 1, title, completed }))
      .then(resp => {
        console.log("Respuesta del dispatch")
        console.log(resp)
        alert("Created succesfully")
        navigate("/list")
      })
      .catch(error => console.log(error))
  }

  return (
    <>
      <h1>Create Todo</h1>
      {loading ? (
        <Loading />
      ) : (
        <>
          <label htmlFor="title">Title</label>
          <input type={"text"} value={title} name="title" onChange={e => setTitle(e.target.value)} style={{ width: "300px" }} />

          <label htmlFor="title">Completed</label>
          <input type={"checkbox"} checked={completed} name="completed" onChange={e => setCompleted(e.target.checked)} />
          <input type={"button"} onClick={() => handleCreate()} value={"Create"} style={{ width: "100px" }} />
        </>
      )}

      {error ? <div>{error}</div> : ""}

      <Link to={"/"}>Back</Link>
    </>
  )
}
export default CreateTodo
