import React, { useEffect } from "react"
import CreateTodo from "./create"
import EditTodo from "./edit"
import ListTodos from "./List"
import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <h1>Todos App</h1>
      <div>
        <Link to={"/list"}>List todos</Link>
        <br />
        <Link to={"/create"}>Create todo</Link>
        <br />
      </div>
    </>
  )
}

export default Home
export { CreateTodo, EditTodo, ListTodos }
