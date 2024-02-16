export const fetchUserData = async (userId, dataType) => {
    const response = await fetch(`http://localhost:3000/user/${userId}/${dataType}`)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    const userData = await response.json()
    return userData
}

/*export const fetchUserMainData = async (userId) => {
    const response = await fetch(`http://localhost:3000/user/${userId}/`)
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
    return activity
}

export const fetchUserAverageSessions = async (userId) => {
    const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    const averageSessions = await response.json()
    return averageSessions
}

export const fetchUserPerformance = async (userId) => {
    const response = await fetch(`http://localhost:3000/user/${userId}/performance`)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    const performance = await response.json()
    
    return performance;
}*/