import React from 'react'

export default function Settings() {
  function exportData() {
    const data = { chat: localStorage.getItem('ai_workspace_chat_history') }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'ai-workspace-export.json'
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  function importData(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]
    if (!f) return
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const obj = JSON.parse(String(reader.result))
        if (obj.chat) localStorage.setItem('ai_workspace_chat_history', obj.chat)
        alert('Imported')
      } catch (err) {
        alert('Invalid file')
      }
    }
    reader.readAsText(f)
  }

  return (
    <section className="card settings">
      <h2>Settings & Data</h2>
      <p className="muted">Export or import your local demo data.</p>
      <div className="actions">
        <button onClick={exportData}>Export Data</button>
        <label className="file">
          Import
          <input type="file" onChange={importData} />
        </label>
      </div>
    </section>
  )
}
