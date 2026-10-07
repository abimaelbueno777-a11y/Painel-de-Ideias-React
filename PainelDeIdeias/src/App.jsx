import './App.css'

function App() {
    return (
    <main className="panel">
      <header className="panel-header">
        <h1>PAINEL DE IDEIAS</h1>
        <p>Suas ideias de projeto, guardadas antes que fujam.</p>
      </header>

      <form className="idea-form">
        <label className="sr-only" htmlFor="new-idea">Nova ideia</label>
        <input
          id="new-idea"
          type="text"
          placeholder="Ex.: app de receitas para o TCC..."
        />
        <button className="add-button" type="button" aria-label="Adicionar ideia">
          ADD
        </button>
      </form>    
      </main>
  )
}

export default App
      