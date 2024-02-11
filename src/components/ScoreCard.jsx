import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import { useMainData } from '../components/Fetch'


export const ScoreCard = ({userId}) => {
    const data = useMainData(userId)

    let score
    if (data && data.data && data.data.todayScore) {
        score = [
            {
              name: "Score",
              value: data.data.todayScore * 100,
              fill: '#FF0000',
            },
            {
              name: "Max",
              value: 100,
              fill: '#000000',
              fillOpacity: 0,
            },
        ];
    }
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


export default ScoreCard