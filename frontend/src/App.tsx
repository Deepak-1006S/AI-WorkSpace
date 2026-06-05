import React, { useState } from 'react'
import Header from './components/Header'
import PredictForm from './components/PredictForm'
import ResultCard from './components/ResultCard'
import { predict } from './services/mockModel'
interface Result {
  input_preview: string
  tokens: number
  top_label: string
  confidence: number
}

export default function App() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<Result | null>(null)


    const [activeTab, setActiveTab] = useState<'playground' | 'chat' | 'images' | 'models' | 'settings'>('playground')

    async function handlePredict(input: string) {
      setLoading(true)
      try {
        const res = await predict(input)
        setResult(res)
        setActiveTab('playground')
      } finally {
        setLoading(false)
      }
    }

    return (
      <div className="app-root">
        <Header />
        <nav className="tabs container">
          <button onClick={() => setActiveTab('playground')} className={activeTab === 'playground' ? 'active' : ''}>Playground</button>
          <button onClick={() => setActiveTab('chat')} className={activeTab === 'chat' ? 'active' : ''}>Chat</button>
          <button onClick={() => setActiveTab('images')} className={activeTab === 'images' ? 'active' : ''}>Images</button>
          <button onClick={() => setActiveTab('models')} className={activeTab === 'models' ? 'active' : ''}>Models</button>
          <button onClick={() => setActiveTab('settings')} className={activeTab === 'settings' ? 'active' : ''}>Settings</button>
        </nav>

        <main className="container">
          {activeTab === 'playground' && (
            <>
              <PredictForm onPredict={handlePredict} loading={loading} />
              {result && <ResultCard result={result} />}
            </>
          )}

          {activeTab === 'chat' && <ChatSimulator />}
          {activeTab === 'images' && <ImageSimulator />}
          {activeTab === 'models' && <ModelsPanel />}
          {activeTab === 'settings' && <Settings />}
        </main>
      </div>
    )
}
