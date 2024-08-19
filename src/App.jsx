import { useState } from 'react'
import Todo from "./components/Todo"
import TodoForm from "./components/TodoForm"
import Search from './components/Search'
import Filter from './components/Filter'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      titulo: "Criar funcionalidade no sistema",
      categoria: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      titulo: "Por o lixo para fora",
      categoria: "Casa",
      isCompleted: false,
    },
    {
      id: 3,
      titulo: "Estudar algebra",
      categoria: "Estudo",
      isCompleted: false,
    },
  ])

  const [pesquisa, setPesquisa] = useState("")

  const [filtro, setFiltro] = useState("All")

  const [ordenacao, setOrdenacao] = useState("Ascendente")

  const addTodo = (titulo, categoria) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      titulo,
      categoria,
      isCompleted: false,
    },
  ]
  setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) =>
    todo.id !== id ? todo : null
  )
    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <h1>Lista de tarefas:</h1>
      <Search pesquisa={pesquisa} setPesquisa={setPesquisa} />
      <Filter filtro={filtro} setFiltro={setFiltro} setOrdenacao={setOrdenacao}/>
      <div className='todo-list'>
        {todos
        .filter((todo) => 
          filtro === "All" 
        ? true 
        : filtro === "Completed" 
        ? todo.isCompleted 
        : !todo.isCompleted
      )
        .filter((todo) => 
          todo.titulo.toLowerCase().includes(pesquisa.toLocaleLowerCase())
      )
      .sort((a, b) =>
        ordenacao === "Ascendente"
        ? a.titulo.localeCompare(b.titulo)
        : b.titulo.localeCompare(a.titulo)    
    )
        .map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))} 
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App