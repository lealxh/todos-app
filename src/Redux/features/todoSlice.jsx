import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const getTodos = createAsyncThunk("todos/getTodos", () => {
  return fetch("https://jsonplaceholder.typicode.com/users/1/todos").then(todos => {
    return todos.json()
  })
})

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    loading: false,
    error: null,
    selectedTodo: null
  },
  extraReducers: {
    [getTodos.pending]: (state, action) => {
      state.loading = true
    },
    [getTodos.fulfilled]: (state, action) => {
      state.todos = action.payload
      console.log("Fulfilled")
      console.log(action)
      state.loading = false
    },
    [getTodos.rejected]: (state, action) => {
      state.loading = false
      console.log("Rejected")
      console.log(action)
      state.error = action.payload
    }
  }
})
export default todoSlice.reducer
