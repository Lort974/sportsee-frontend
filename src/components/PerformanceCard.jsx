import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { useUserData } from './Fetch'
import Model from '../services/model'

// Ce composant affiche une carte de performance pour un utilisateur spécifique
export const PerformanceCard = ({userId}) => {
    // Utilisez le hook personnalisé useUserData pour récupérer les données de performance de l'utilisateur
    const data = useUserData(userId, "performance")

    let performance

    // Vérifiez si les données existent et sont bien structurées
    if (data && data.data && data.data.data) {
        // Si c'est le cas, utilisez la fonction Model pour transformer les données en un format approprié pour la carte de performance
        performance = Model(data, "performanceCard")
    }

    // Renvoie un graphique radar à l'intérieur d'un conteneur réactif
    return <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={performance}>
            <PolarGrid stroke="#FFFFFF" />
            <PolarAngleAxis dataKey="kind" stroke="#FFFFFF" fontSize={12} tickLine={false} />
            <Radar name="Mike" dataKey="value" stroke="none" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
    </ResponsiveContainer>
}

// Exportez PerformanceCard comme composant par défaut
export default PerformanceCard
