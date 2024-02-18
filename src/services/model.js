const Model = (data, type, category) => {
    let model
    switch (type) {
        case "scoreCard":
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
            model = data.data.data.userInfos.firstName
            break
        case "nutritionCard":
            model = data.data.data.keyData[category]
            model = model > 999 ? model.toLocaleString("en-US") : model
            break
        case "activityCard":
        model = data.data.data.sessions
            break
        case "averageSessionsCard":
            model = data.data.data.sessions
            break
        case "performanceCard":
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

    return model
}

export default Model