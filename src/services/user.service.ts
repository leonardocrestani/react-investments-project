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
        console.log(payload)
        const user = await axios.post('http://localhost:3003/user', payload)
        return user
    },
    findPosition: async (cpf: string) => {
        const userPosition = await axios.get(`/user/userPosition/${cpf}`)
        return userPosition
    }
}