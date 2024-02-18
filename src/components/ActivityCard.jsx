// Importez les composants et les hooks nécessaires
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import { useUserData } from './Fetch'
import Model from '../services/model'

// Ce composant affiche une carte d'activité pour un utilisateur spécifique
export const ActivityCard = ({userId}) => {
    // Utilisez le hook personnalisé useUserData pour récupérer les données de l'utilisateur
    const data = useUserData(userId, "activity");

    let activity

    // Vérifiez si les données existent et sont bien structurées
    if (data && data.data && data.data.data && data.data.data.sessions) {
        // Si c'est le cas, utilisez la fonction Model pour transformer les données en un format approprié pour la carte d'activité
        activity = Model(data, "activityCard")
    }

    // Préparez les graduations pour l'axe des y
    const ticks = [];
    
    if (activity) {
        const dataMin = Math.min(...activity.map(item => item.kilogram));
        const dataMax = Math.max(...activity.map(item => item.kilogram));
        for (let i = dataMin; i <= dataMax; i++) {
            ticks.push(i);
        }
    }

    // Ce composant est utilisé pour personnaliser la légende du graphique
    const renderLegend = (props) => {
        const { payload } = props;

        const legend = payload.map((entry, index) => (
            <div key={`item-${index}`} className="dashboard__body__charts__weigth__legend__color">
                <span style={{backgroundColor: entry.color}}></span>
                <span>{entry.value === "kilogram" ? "Poids (kg)" : "Calories brûlées (kCal)"}</span>
            </div>
        ))

        return (
            <div className="dashboard__body__charts__weigth__legend">
                {legend}
            </div>
        )
    }
    
    // Ce composant est utilisé pour personnaliser l'infobulle du graphique
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="tooltip">
                    <p className="tooltip__text">{`${payload[0].value}kg`}</p>
                    <p className="tooltip__text">{`${payload[1].value}kcal`}</p>
                </div>
            );
        }
    
        return null;
    };

    // Renvoie un graphique à barres à l'intérieur d'un conteneur réactif
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart
            data={activity}
            margin={{
            top: 45,
            right: 20,
            left: -30,
            bottom: 25,
            }}
        >
            <text x={32} y={27} fill="#20253A" textAnchor="start" dominantBaseline="central">
                <tspan fontSize="15">Activité quotidienne</tspan>
            </text>
            <CartesianGrid strokeDasharray="2 2" vertical={false} stroke="#DEDEDE" />
            <XAxis dataKey="day"
                tickFormatter={(value) => {
                    let date = new Date(value);
                    return date.getDate();
                }}
                axisLine={false}
                tickLine={false}
                tick={{fill: "#9B9EAC", fontSize: 14, dy: 15}}
            />
            <YAxis yAxisId="right"
                orientation="right"
                stroke="#282D30"
                domain={[dataMin => (dataMin - 1), dataMax => (dataMax + 1)]}
                ticks={ticks}
                axisLine={false}
                tickLine={false}
                tick={{fill: "#9B9EAC", fontSize: 14, dx: 25}}
            />
            <YAxis yAxisId="left" orientation="left" stroke="#E60000" axisLine={false} tick={false} />
            <Tooltip content={<CustomTooltip />} />
            <Legend layout="horizontal" verticalAlign="top" align="right" content={renderLegend} />
            <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" barSize={7} radius={[3,3,0,0]} />
            <Bar yAxisId="left" dataKey="calories" fill="#E60000" barSize={7} radius={[3,3,0,0]} />
        </BarChart>
    </ResponsiveContainer>
}

// Exportez ActivityCard comme composant par défaut
export default ActivityCard
