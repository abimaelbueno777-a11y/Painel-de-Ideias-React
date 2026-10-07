import { useState } from 'react'
import './App.css'

function App() {
  const [ideas, setIdeas] = useState([])
  const [newIdea, setNewIdea] = useState('')
  const [error, setError] = useState('')

  function handleChange(event) {
    setNewIdea(event.target.value)
    setError('')
  }

  function addIdea(event) {
    event.preventDefault()

    const text = newIdea.trim()

    if (text === '') {
      setError('Digite sua ideia antes de adicionar.')
      return
    }

    // O identificador é criado uma vez, quando a ideia entra na lista.
    const idea = {
      id: Date.now(),
      text: text,
      done: false
    }

    // Cria outro array usando a lista mais recente, sem alterar a anterior.
    setIdeas(currentIdeas => [...currentIdeas, idea])
    setNewIdea('')
    setError('')
  }
  return (
    <main className="panel">
      <header className="panel-header">
        <h1>PAINEL DE IDEIAS</h1>
        <p>Suas ideias de projeto, guardadas antes que fujam.</p>
      </header>

      <form className="idea-form" onSubmit={addIdea}>
        <label className="sr-only" htmlFor="new-idea">Nova ideia</label>
        <input
          id="new-idea"
          type="text"
          placeholder="Ex.: app de receitas para o TCC..."
          value={newIdea}
          onChange={handleChange}
          aria-invalid={error !== ''}
          aria-describedby={error ? 'idea-error' : undefined}
        />
        <button className="add-button" type="submit" aria-label="Adicionar ideia">
          ADD
        </button>
      </form>

      {error && <p id="idea-error" className="error" role="alert">{error}</p>}

      {ideas.length === 0 && (
        <p className="empty-message">Nenhuma ideia no painel. Adicione a primeira!</p>
      )}
      <ul className="idea-list" aria-label="Ideias no painel">
        {ideas.map(idea => (
          <li className="idea-item" key={idea.id}>
            <span className="idea-text">{idea.text}</span>
          </li>
        ))}
      </ul>    
      </main>
  )
}

export default App
      