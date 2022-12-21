import axios from 'axios';

interface authPayload {
    document: string
    password: string
}


export const authApi = {
    auth: async (payload: authPayload) => {
        const auth = await axios.post('http://localhost:3003/authenticate', payload)
        console.log(auth)
        return auth
    }
}