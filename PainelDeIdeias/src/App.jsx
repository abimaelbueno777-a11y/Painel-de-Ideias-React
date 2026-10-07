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

  function toggleIdea(id) {
    setIdeas(currentIdeas => currentIdeas.map(idea => {
      if (idea.id === id) {
        // Copia o objeto e inverte apenas a propriedade done.
        return { ...idea, done: !idea.done }
      }

      return idea
    }))
  }

  function removeIdea(id) {
    setIdeas(currentIdeas => currentIdeas.filter(idea => idea.id !== id))
  }

  // Os contadores são calculados a partir da lista, sem outro useState.
  const totalIdeas = ideas.length
  const completedIdeas = ideas.filter(idea => idea.done).length

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
            <label className="idea-label">
              <input
                className="idea-checkbox"
                type="checkbox"
                checked={idea.done}
                onChange={() => toggleIdea(idea.id)}
              />
              <span className={idea.done ? 'idea-text completed' : 'idea-text'}>
                {idea.text}
              </span>
            </label>

            <button
              className="remove-button"
              type="button"
              onClick={() => removeIdea(idea.id)}
              aria-label={`Remover ideia ${idea.text}`}
              title="Remover ideia"
            >
              <span aria-hidden="true">×</span>
            </button>
          </li>
        ))}
      </ul>

      <footer className="counter" aria-live="polite">
        {`${totalIdeas} ${totalIdeas === 1 ? 'IDEIA' : 'IDEIAS'} NO PAINEL · `}
        {`${completedIdeas} ${completedIdeas === 1 ? 'CONCLUÍDA' : 'CONCLUÍDAS'}`}
      </footer>
    </main>
  )
}

export default App
      