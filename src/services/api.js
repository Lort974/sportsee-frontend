export const fetchUserMainData = async (userId) => {
    const response = await fetch(`http://localhost:3000/user/${userId}`)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    const user = await response.json()
    return user
}

export const fetchUserActivity = async (userId) => {
    const response = await fetch(`http://localhost:3000/user/${userId}/activity`)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    const activity = await response.json()
    return activity.data.sessions
}

export const fetchUserAverageSessions = async (userId) => {
    const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    const averageSessions = await response.json()
    return averageSessions.data.sessions
}

export const fetchUserPerformance = async (userId) => {
    const response = await fetch(`http://localhost:3000/user/${userId}/performance`)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    const performance = await response.json()
    
    const FRENCH_TRANSLATIONS = {
        'cardio': 'Cardio',
        'energy': 'Energie',
        'endurance': 'Endurance',
        'strength': 'Force',
        'speed': 'Vitesse',
        'intensity': 'Intensité'
    }

    const dataWithKindNames = performance.data.data.map(item => ({
        ...item,
        kind: FRENCH_TRANSLATIONS[performance.data.kind[item.kind]]
    }));

    return dataWithKindNames;
}