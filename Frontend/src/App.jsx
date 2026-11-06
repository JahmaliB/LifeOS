import { useEffect, useState } from 'react'
import './App.css'
import { getWelcomeMessage } from './services/api'
import { getHealthStatus } from './services/api'

function App() {
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [health, setHealthStatus] = useState('')

    useEffect(() => {
        const fetchBackend = async () => {
            try {
                const data = await getWelcomeMessage()
                setMessage(data.message)
                const healthData = await getHealthStatus()
                setHealthStatus(healthData.status)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchBackend()
    }, [])

    return (
        <div>
            <h1>LifeOS</h1>
            <h2>Backend Connection</h2>

            {loading && <p>Connecting to backend...</p>}
            {message && <p>{message}</p>}
            {error && <p>Error: {error}</p>}
            {health && <p> Backend Status: {health}</p>}
        </div>
    )
}

export default App