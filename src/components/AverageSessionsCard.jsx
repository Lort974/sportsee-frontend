import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useUserData } from './Fetch'
import Model from '../services/model'

export const SessionLengthCard = ({userId}) => {
  const data = useUserData(userId, "average-sessions")

  let averageSessions
  if (data && data.data && data.data.data && data.data.data.sessions) {
    averageSessions = Model(data, "averageSessionsCard")
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="tooltip">
                <p className="tooltip__text">{`${payload[0].value}min`}</p>
            </div>
        )
    }

    return null;
  }

  const formatXAxis = (tickItem) => {
    switch(tickItem) {
      case 1:
        return "L"
      case 2:
        return "M"
      case 3:
        return "M"
      case 4:
        return "J"
      case 5:
        return "V"
      case 6:
        return "S"
      case 7:
        return "D"
      default:
        return ""
    }
  }

  return <ResponsiveContainer width="100%" height="100%">
    <LineChart
      /*width={500}
      height={300}*/
      data={averageSessions}
      margin={{
        top: 45,
        right: 20,
        left: 20,
        bottom: 25,
      }}
      fill={"#ff8484"}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
          <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.5}/>
          <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.8}/>
        </linearGradient>
      </defs>
      <text x={32} y={6} fill="#FF8484" textAnchor="start" dominantBaseline="central">
        <tspan x={32} dy="1.2em" fontSize="15">
            Durée moyenne
        </tspan>
        <tspan x={32} dy="1.2em" fontSize="15">
            des sessions
        </tspan>
      </text>

      <XAxis dataKey="day"
        axisLine={false}
        tickLine={false}
        tick={{fill: "#ff8484", dy: 15, fontSize: 12}}
        domain={["auto", "auto"]}
        tickFormatter={formatXAxis}
      />
      <Tooltip content={<CustomTooltip />} />
      <Line type="natural"
        dataKey="sessionLength"
        stroke="url(#colorUv)"
        dot={false}
        strokeWidth={2}
        activeDot={{ r: 5, fill: "#FFFFFF", stroke: "none" }}
      />
    </LineChart>
  </ResponsiveContainer>
}

export default SessionLengthCard