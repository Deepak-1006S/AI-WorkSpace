import React, { useState } from 'react'

interface PredictFormProps {
  onPredict: (input: string) => void
  loading: boolean
}

export default function PredictForm({ onPredict, loading }: PredictFormProps) {
  const [input, setInput] = useState('')

  function submit(e: React.FormEvent) {
    e.preventDefault()
    onPredict(input)
  }

  return (
    <form className="card" onSubmit={submit} aria-label="Predict form">
      <label htmlFor="input">Input</label>
      <textarea
        id="input"
        rows={6}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text or JSON for the demo model"
      />
      <div className="actions">
        <button type="submit" disabled={loading || !input.trim()}>
          {loading ? 'Predicting…' : 'Predict'}
        </button>
      </div>
    </form>
  )
}
