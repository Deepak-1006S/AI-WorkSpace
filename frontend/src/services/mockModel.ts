export async function predict(input: string) {
  // Simulate realistic latency and outputs for a frontend-only demo
  await new Promise((r) => setTimeout(r, 600 + Math.random() * 800))

  // Basic heuristic "model": counts tokens and echoes summary
  const tokens = input.split(/\s+/).filter(Boolean)
  const summary = tokens.slice(0, 30).join(' ')
  return {
    input_preview: summary + (tokens.length > 30 ? '…' : ''),
    tokens: tokens.length,
    top_label: tokens.length > 10 ? 'long' : 'short',
    confidence: Math.max(0.5, Math.min(0.99, 1 - Math.exp(-tokens.length / 20)))
  }
}
