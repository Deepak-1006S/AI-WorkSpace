import React, { useState, useEffect, useRef } from 'react'
import { chatResponse } from '../services/localAI'

type Message = { role: 'user' | 'assistant'; text: string }
const STORAGE_KEY = 'ai_workspace_chat_history'

export default function ChatSimulator() {
  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const endRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function send() {
    if (!input.trim()) return
    const userMsg: Message = { role: 'user', text: input }
    setMessages((m) => [...m, userMsg])
    setInput('')
    setLoading(true)
    try {
      const res = await chatResponse([...messages, userMsg])
      const bot: Message = { role: 'assistant', text: res.text }
      setMessages((m) => [...m, bot])
    } finally {
      setLoading(false)
    }
  }

  function clearHistory() {
    setMessages([])
    localStorage.removeItem(STORAGE_KEY)
  }

  return (
    <section className="card chat-sim">
      <div className="chat-controls">
        <h2>Chat Simulator</h2>
        <div>
          <button onClick={clearHistory}>Clear</button>
        </div>
      </div>

      <div className="chat-window">
        {messages.map((m, i) => (
          <div key={i} className={`chat-message ${m.role}`}>
            <div className="role">{m.role}</div>
            <div className="text">{m.text}</div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          send()
        }}
      >
        <textarea placeholder="Say something to the model" value={input} onChange={(e) => setInput(e.target.value)} />
        <div className="actions">
          <button type="submit" disabled={loading || !input.trim()}>{loading ? 'Thinking…' : 'Send'}</button>
        </div>
      </form>
    </section>
  )
}
