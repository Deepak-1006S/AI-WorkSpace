import React, { useState } from 'react'
import { generateImage } from '../services/localAI'

export default function ImageSimulator() {
  const [prompt, setPrompt] = useState('A futuristic city at dusk')
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState<string | null>(null)

  async function create() {
    setLoading(true)
    try {
      const res = await generateImage(prompt)
      setUrl(res.url)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="card image-sim">
      <h2>Image Generator (simulated)</h2>
      <label>Prompt</label>
      <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} rows={4} />
      <div className="actions">
        <button onClick={create} disabled={loading}>{loading ? 'Generating…' : 'Generate Image'}</button>
      </div>
      {url && (
        <div className="image-preview">
          <img src={url} alt={prompt} />
          <a href={url} target="_blank" rel="noreferrer">Open image</a>
        </div>
      )}
    </section>
  )
}
