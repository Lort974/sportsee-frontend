import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { usePerformance } from './Fetch'

export const PerformanceCard = ({userId}) => {
    const data = usePerformance(userId)

    return <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
            <PolarGrid stroke="#FFFFFF" />
            <PolarAngleAxis dataKey="kind" stroke="#FFFFFF" fontSize={12} tickLine={false} />
            <Radar name="Mike" dataKey="value" stroke="none" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
    </ResponsiveContainer>
}

export default PerformanceCard