// Cette fonction est utilisée pour transformer les données en un modèle approprié en fonction du type spécifié
const Model = (data, type, category) => {
    let model
    // Utilisez un switch pour déterminer comment transformer les données en fonction du type
    switch (type) {
        case "scoreCard":
            // Pour le type "scoreCard", créez un tableau avec les données de score et de max
            model = [
                {
                    name: "Score",
                    value: (data.data.data.todayScore ? data.data.data.todayScore : data.data.data.score) * 100,
                    fill: '#FF0000',
                },
                {
                    name: "Max",
                    value: 100,
                    fill: '#000000',
                    fillOpacity: 0,
                },
            ]
            break
        case "firstName":
            // Pour le type "firstName", utilisez simplement le prénom de l'utilisateur
            model = data.data.data.userInfos.firstName
            break
        case "nutritionCard":
            // Pour le type "nutritionCard", récupérez la valeur de la catégorie spécifiée et formatez-la si nécessaire
            model = data.data.data.keyData[category]
            model = model > 999 ? model.toLocaleString("en-US") : model
            break
        case "activityCard":
            // Pour le type "activityCard", utilisez les données de session de l'utilisateur
            model = data.data.data.sessions
            break
        case "averageSessionsCard":
            // Pour le type "averageSessionsCard", utilisez également les données de session de l'utilisateur
            model = data.data.data.sessions
            break
        case "performanceCard":
            // Pour le type "performanceCard", transformez les données en utilisant un dictionnaire de traductions
            const FRENCH_TRANSLATIONS = {
                'cardio': 'Cardio',
                'energy': 'Energie',
                'endurance': 'Endurance',
                'strength': 'Force',
                'speed': 'Vitesse',
                'intensity': 'Intensité'
            }
            model = data.data.data.data.map(item => ({
                ...item,
                kind: FRENCH_TRANSLATIONS[data.data.data.kind[item.kind]]
            }));
    }

    // Retournez le modèle transformé
    return model
}

// Exportez Model comme export par défaut
export default Model
