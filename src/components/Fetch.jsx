import { useState, useEffect } from 'react';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../datas/mockDatas"
import { /*fetchUserMainData, fetchUserActivity, fetchUserAverageSessions, fetchUserPerformance, */fetchUserData } from '../services/api';

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
    return data;
}*/

export const useUserData = (userId, dataType, category) => {  //utiliser l'API
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchUserData(userId, dataType);
            setData(result);
        };

        fetchData();
    }, [userId, category]);
    return data;
}

/*export const useMainData = (userId, category) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchUserMainData(userId);
            setData(result);
        };

        fetchData();
    }, [userId, category]);

    return data;
}

export const useActivity = (userId) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchUserActivity(userId);
            setData(result);
        };

        fetchData();
    }, [userId]);

    return data;
}

export const useAverageSessions = (userId) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchUserAverageSessions(userId);
            setData(result);
        };

        fetchData();
    }, [userId]);

    return data;
}

export const usePerformance = (userId) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchUserPerformance(userId);
            setData(result);
        };

        fetchData();
    }, [userId]);

    return data;
}*/