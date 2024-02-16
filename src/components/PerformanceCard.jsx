import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { useUserData } from './Fetch'
import Model from '../services/model'

export const PerformanceCard = ({userId}) => {
    const data = useUserData(userId, "performance")

    let performance

    if (data && data.data && data.data.data) {
        performance = Model(data, "performanceCard")
    }

    return <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={performance}>
            <PolarGrid stroke="#FFFFFF" />
            <PolarAngleAxis dataKey="kind" stroke="#FFFFFF" fontSize={12} tickLine={false} />
            <Radar name="Mike" dataKey="value" stroke="none" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
    </ResponsiveContainer>
}

export default PerformanceCard