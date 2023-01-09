import axios from 'axios';

interface transactionPayload {
    event: string
    document: string
    amount: number
}

export const transactionApi = {
    create: async (payload: transactionPayload, token: string) => {
        const transaction = await axios.post('http://localhost:3003/spb/events', payload, {
            headers:{
                Authorization: 'Bearer ' + token
            }
        })
        return transaction
    }
}