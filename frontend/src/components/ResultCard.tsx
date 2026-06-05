import React from 'react'

interface Result {
  input_preview: string
  tokens: number
  top_label: string
  confidence: number
}

export default function ResultCard({ result }: { result: Result }) {
  return (
    <section className="card result">
      <h2>Result</h2>
      <pre className="result-json">{JSON.stringify(result, null, 2)}</pre>
    </section>
  )
}
