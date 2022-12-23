import axios from 'axios';

export interface userPayload {
    full_name: string,
    cpf: string,
    account: string
}

export const userApi = {
    get: async (cpf: string) => {
        const user = await axios.get(`http://localhost:3003/user/${cpf}`)
        return user
    },
    create: async (payload: userPayload) => {
        const user = await axios.post('http://localhost:3003/user', payload)
        return user
    },
    findAllPositionsByUser: async (cpf: string) => {
        const userPosition = await axios.get(`http://localhost:3003/userPosition/all/${cpf}`)
        return userPosition
    },
    findPosition: async (cpf: string, limit: number, offset: number) => {
        const userPosition = await axios.get(`http://localhost:3003/userPosition/paginated/${cpf}?limit=${limit}&offset=${offset}`)
        return userPosition
    }
}