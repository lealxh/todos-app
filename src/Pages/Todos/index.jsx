import React, { useEffect } from "react"
import CreateTodo from "./create"
import EditTodo from "./edit"
import ListTodos from "./List"
import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <h1>Home</h1>
      <div>
        <Link to={"/list"}>List</Link>
        <br />
        <Link to={"/create"}>Create</Link>
        <br />
        <Link to={"/edit"}>Edit</Link>
      </div>
    </>
  )
}

export default Home
export { CreateTodo, EditTodo, ListTodos }
