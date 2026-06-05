export async function chatResponse(messages: { role: 'user' | 'assistant'; text: string }[]) {
  await new Promise((r) => setTimeout(r, 400 + Math.random() * 600))
  const last = messages[messages.length - 1]
  const reply = `Echo: ${last.text.slice(0, 80)}${last.text.length > 80 ? '…' : ''}`
  return { text: reply }
}

export async function generateImage(prompt: string) {
  await new Promise((r) => setTimeout(r, 600 + Math.random() * 800))
  // return an SVG data URL placeholder that incorporates the prompt
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='512' height='320'><rect width='100%' height='100%' fill='#0b1220'/><text x='50%' y='50%' fill='#9aa4b2' font-size='18' font-family='Arial' dominant-baseline='middle' text-anchor='middle'>${escapeHtml(
    prompt.slice(0, 60)
  )}</text></svg>`
  const dataUrl = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg)
  return { url: dataUrl }
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!))
}
