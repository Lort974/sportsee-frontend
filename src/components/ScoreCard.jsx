// Importez les composants et les hooks nécessaires
import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import { useUserData } from '../components/Fetch'
import Model from '../services/model'

// Ce composant affiche une carte de score pour un utilisateur spécifique
export const ScoreCard = ({userId}) => {
    // Utilisez le hook personnalisé useUserData pour récupérer les données de l'utilisateur
    const data = useUserData(userId, "")

    let score
    // Vérifiez si les données existent et sont bien structurées
    if (data && data.data && data.data.data && (data.data.data.todayScore || data.data.data.score)) {
        // Si c'est le cas, utilisez la fonction Model pour transformer les données en un format approprié pour la carte de score
        score = Model(data, "scoreCard")
    }
    // Renvoie un graphique radial à l'intérieur d'un conteneur réactif
    return <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="75%" outerRadius="100%" barSize={10} data={score}>
            <text x={30} y={24} fill="#20253A" textAnchor="start" dominantBaseline="central">
                <tspan fontSize="15">Score</tspan>
            </text>
            <RadialBar
                minAngle={15}
                label={({ name, viewBox, value }) => {
                    if (name === 'Score') {
                        const { cx, cy } = viewBox;
                        return (
                            <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
                                <tspan fill="#282D30" fontSize={26} fontWeight={700}>
                                    {`${value}%`}
                                </tspan>
                                <tspan x={cx} dy="1.8em" fill="#74798C" fontSize={16} fontWeight={700}>
                                    de votre
                                </tspan>
                                <tspan x={cx} dy="1.4em" fill="#74798C" fontSize={16} fontWeight={700}>
                                    objectif
                                </tspan>
                            </text>
                        );
                    }
                }}
                clockWise
                dataKey="value"
                cornerRadius={"50%"}
                barSize={15}
            />
        </RadialBarChart>
    </ResponsiveContainer>
}

// Exportez ScoreCard comme composant par défaut
export default ScoreCard
