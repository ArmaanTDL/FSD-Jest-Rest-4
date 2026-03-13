import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="success-badge">
        ✨ EXP-4 jest and react testing is succesfull
      </div>
      
      <h1>Testing Excellence</h1>
      
      <div className="card">
        <div className="dashboard-header">
          <h2>Continuous Integration</h2>
          <p>Verified and validated with Jest & React Testing Library</p>
        </div>

        <div className="main-action">
          <button onClick={() => setCount((count) => count + 1)}>
            Interactive Elements: {count}
          </button>
        </div>

        <div className="status-grid">
          <div className="status-item">
            <div className="status-label">Test Suite</div>
            <div className="status-value">Passed ✅</div>
          </div>
          <div className="status-item">
            <div className="status-label">Coverage</div>
            <div className="status-value">100% 🚀</div>
          </div>
          <div className="status-item">
            <div className="status-label">Environment</div>
            <div className="status-value">Stable 💎</div>
          </div>
        </div>
      </div>

      <p className="read-the-docs">
        Premium Testing Framework Documentation
      </p>
    </div>
  )
}

export default App
