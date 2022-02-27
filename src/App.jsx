import { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import Home, { CreateTodo, EditTodo, ListTodos } from "./Pages/Todos/index"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<ListTodos />} />
          <Route path="/create" element={<CreateTodo />} />
          <Route path="/edit" element={<EditTodo />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
