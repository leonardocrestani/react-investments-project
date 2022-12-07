import axios from 'axios';

export const trendApi = {
    getAll: async (limit: number, offset: number) => {
        const trends = await axios.get(`http://localhost:3003/trends?limit=${limit}&offset=${offset}`)
        return trends
    }
}