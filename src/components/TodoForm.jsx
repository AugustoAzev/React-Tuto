import { useState } from "react"

const TodoForm = ({addTodo}) => {
  const [titulo, setTitulo] = useState("")
  const [categoria, setCategoria] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!titulo || !categoria) return;
    //adicionar todo
    addTodo(titulo, categoria)
    //limpar campos
    setTitulo("")
    setCategoria("")
  }

  return (
    <div className='todo-form'>
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Digite o título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        />
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option value="">Selecione</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Casa">Casa</option>
          <option value="Estudo">Estudo</option>
        </select>
        <button type='submit'>Criar tarefa</button>
      </form>
    </div>
  )
}

export default TodoForm
