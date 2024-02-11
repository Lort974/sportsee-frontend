import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import { useActivity } from './Fetch'



export const ActivityCard = ({userId}) => {
    const data = useActivity(userId);

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

    const dataMin = Math.min(...data.map(item => item.kilogram));
    const dataMax = Math.max(...data.map(item => item.kilogram));
    const ticks = [];
    for (let i = dataMin; i <= dataMax; i++) {
        ticks.push(i);
    }

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

    return <ResponsiveContainer width="100%" height="100%">
        <BarChart
            /*width={500}
            height={300}*/
            data={data}
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

export default ActivityCard