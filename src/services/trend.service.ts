import axios from 'axios';

export const trendApi = {
    getAll: async () => {
        const trends = await axios.get(`http://localhost:3003/trends`)
        return trends
    }
}