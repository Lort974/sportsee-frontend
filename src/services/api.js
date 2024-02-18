export const fetchUserData = async (userId, dataType) => {
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}/${dataType}`)
        if (!response.ok) {
            const message = await response.text(); // Récupère le message d'erreur du serveur
            throw new Error(message); // Lance une erreur avec le message du serveur
        }
        const userData = await response.json()
        return userData
    }
    catch (error) {
        throw error
    }
}