import NutritionCard from "../components/NutritionCard"
import ActivityCard from "../components/ActivityCard"
import AverageSessionsCard from "../components/AverageSessionsCard"
import PerformanceCard from "../components/PerformanceCard"
import ScoreCard from "../components/ScoreCard"
import FirstName from "../components/FirstName"

const Home = ({userId}) => {
    return <>
        <div className="dashboard">
            <div className="dashboard__header">
                <div className="dashboard__header__title">
                    <span className="dashboard__header__title--hello">Bonjour </span>
                    <span className="dashboard__header__title--name">{<FirstName userId={userId} />}</span>
                </div>
                <div className="dashboard__header__baseline">
                    Félicitation ! Vous avez explosé vos objectifs hier 👏
                </div>
            </div>
            <div className="dashboard__body">
                <div className="dashboard__body__charts">
                    <div className="dashboard__body__charts__weigth">
                        <ActivityCard userId={userId} />
                    </div>
                    <div className="dashboard__body__charts__activity">
                        <div className="dashboard__body__charts__activity__elt dashboard__body__charts__activity__elt--session-time">
                            <AverageSessionsCard userId={userId} />
                        </div>
                        <div className="dashboard__body__charts__activity__elt dashboard__body__charts__activity__elt--performance">
                            <PerformanceCard userId={userId} />
                        </div>
                        <div className="dashboard__body__charts__activity__elt">
                            <ScoreCard userId={userId} />
                        </div>
                    </div>
                </div>
                <div className="dashboard__body__nutrition">
                    <NutritionCard userId={userId} category="calorieCount" />
                    <NutritionCard userId={userId} category="proteinCount" />
                    <NutritionCard userId={userId} category="carbohydrateCount" />
                    <NutritionCard userId={userId} category="lipidCount" />
                </div>
            </div>
        </div>
    </>
}

export default Home