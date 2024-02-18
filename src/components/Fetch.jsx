import { useState, useEffect } from 'react';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../datas/mockDatas"
import { fetchUserData } from '../services/api';

/*export const useUserData = (userId, dataType, category) => { //utiliser les mockDatas
    
    let data

    switch (dataType) {
        case "":
        data = USER_MAIN_DATA.find(user => user.id === userId);
        break

        case "activity":
        data = USER_ACTIVITY.find(user => user.userId === userId);
        break

        case "average-sessions":
        data = USER_AVERAGE_SESSIONS.find(user => user.userId === userId);
        break

        case "performance":
        data = USER_PERFORMANCE.find(user => user.userId === userId);
        break
    }
    data = {data}

    const allUserIds = USER_MAIN_DATA.map(user => user.id)

    const error = allUserIds.includes(userId) ? false : true

    const loading = false

    return { data, error, loading }
}*/

export const useUserData = (userId, dataType) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchUserData(userId, dataType);
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [userId]);

    return { data, loading, error };
}
