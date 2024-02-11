import { useState, useEffect } from 'react';
import { fetchUserMainData, fetchUserActivity, fetchUserAverageSessions, fetchUserPerformance } from '../services/api';

export const useMainData = (userId, category) => {
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
}