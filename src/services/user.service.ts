import axios from 'axios';

export interface userPayload {
    full_name: string,
    document: string,
    account: string
}

export const userApi = {
    get: async (document: string, token: string) => {
        const user = await axios.get(`http://localhost:3003/user/${document}`, {
            headers:{
                Authorization: 'Bearer ' + token
            }
        })
        return user
    },
    create: async (payload: userPayload) => {
        const user = await axios.post('http://localhost:3003/user', payload)
        return user
    },
    findAllPositionsByUser: async (document: string, token: string) => {
        const userPosition = await axios.get(`http://localhost:3003/userPosition/all/${document}`, {
            headers:{
                Authorization: 'Bearer ' + token
            }
        })
        return userPosition
    },
    findPosition: async (document: string, limit: number, offset: number, token: string) => {
        const userPosition = await axios.get(`http://localhost:3003/userPosition/paginated/${document}?limit=${limit}&offset=${offset}`, {
            headers:{
                Authorization: 'Bearer ' + token
            }
        })
        return userPosition
    }
}