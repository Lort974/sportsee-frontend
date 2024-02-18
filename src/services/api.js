// Cette fonction est une fonction asynchrone qui récupère les données utilisateur
export const fetchUserData = async (userId, dataType) => {
    try {
        // Utilisez fetch pour faire une requête HTTP à l'API
        const response = await fetch(`http://localhost:3000/user/${userId}/${dataType}`)
        
        // Vérifiez si la réponse est ok (statut HTTP 200-299)
        if (!response.ok) {
            // Si la réponse n'est pas ok, récupérez le message d'erreur du serveur
            const message = await response.text();
            
            // Lancez une erreur avec le message du serveur
            throw new Error(message);
        }
        
        // Si la réponse est ok, convertissez la réponse en JSON
        const userData = await response.json()
        
        // Retournez les données utilisateur
        return userData
    }
    catch (error) {
        // Si une erreur se produit, relancez l'erreur pour qu'elle puisse être gérée par l'appelant
        throw error
    }
}
