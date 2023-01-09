import axios from 'axios';

interface orderPayload {
    symbol: string
    amount: number
}


export const orderApi = {
    create: async (payload: orderPayload, document: string, token: string) => {
        const order = await axios.post('http://localhost:3003/order', payload, {
            headers: {
                Authorization: 'Bearer ' + token,
                'document': document
            }
        })
        return order
    }
}