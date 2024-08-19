const Filter = ({filtro, setFiltro, setOrdenacao}) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética:</p>
                <button onClick={() => setOrdenacao("Ascendente")}>Ascendente</button>
                <button onClick={() => setOrdenacao("Descendente")}>Descendente</button>
            </div>
        </div>
    </div>
  )
}

export default Filter