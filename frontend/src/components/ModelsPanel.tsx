import React, { useState } from 'react'

export default function ModelsPanel() {
  const [model, setModel] = useState('gpt-lite')
  const [temperature, setTemperature] = useState(0.7)
  const [maxTokens, setMaxTokens] = useState(256)

  return (
    <section className="card models-panel">
      <h2>Model Controls</h2>
      <label>Model</label>
      <select value={model} onChange={(e) => setModel(e.target.value)}>
        <option value="gpt-lite">gpt-lite (fast)</option>
        <option value="gpt-creative">gpt-creative (creative)</option>
        <option value="gpt-precise">gpt-precise (deterministic)</option>
      </select>

      <label>Temperature: {temperature.toFixed(2)}</label>
      <input type="range" min="0" max="1" step="0.01" value={temperature} onChange={(e) => setTemperature(Number(e.target.value))} />

      <label>Max tokens: {maxTokens}</label>
      <input type="range" min="16" max="2048" step="8" value={maxTokens} onChange={(e) => setMaxTokens(Number(e.target.value))} />

      <p className="muted">These controls are simulated in the frontend-only demo.</p>
    </section>
  )
}
