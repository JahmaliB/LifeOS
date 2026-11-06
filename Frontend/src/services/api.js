const API_URL = import.meta.env.VITE_API_URL

export async function getWelcomeMessage() {
    const response = await fetch(`${API_URL}/`)

    if (!response.ok) {
        throw new Error('Failed to connect to LifeOS API')
    }

    return response.json()
}

export async function getHealthStatus() {
    const response = await fetch(`${API_URL}/health`)

    if (!response.ok) {
        throw new Error('Backend health check failed')
    }

    return response.json()
}