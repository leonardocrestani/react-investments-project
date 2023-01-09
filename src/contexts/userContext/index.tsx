import { createContext, useContext, useState } from "react";

interface user {
    full_name: string
    document: string
    account: string
    checkingAccountAmount: number
    positions: Array<any>
    consolidated: number
}

interface userDataContextType {
    user: user,
    login: (full_name: string, document: string, account: string, checkingAccountAmount: number, positions: any, consolidated: number) => void;
    logout: () => void;
    update: (params: any, token: string) => void;
    token: string,
}

const userDataContextDefaultValues: userDataContextType = {
    user: {
        full_name: "",
        document: "",
        account: "",
        checkingAccountAmount: 0,
        positions: [],
        consolidated: 0,
    },
    login: () => { },
    logout: () => { },
    update: () => { },
    token: ''
};

const UserContext = createContext<userDataContextType>(userDataContextDefaultValues);

export default function UserProvider({ children }: { children: any }) {

    const [user, setUserData] = useState<{
        full_name: string
        document: string
        account: string
        checkingAccountAmount: number
        positions: Array<any>
        consolidated: number
    }>({
        full_name: "",
        document: "",
        account: "",
        checkingAccountAmount: 0,
        positions: [],
        consolidated: 0,
    });

    const [token, setToken] = useState<any>('')

    const login = (full_name: string, document: string, account: string, checkingAccountAmount: number, positions: any, consolidated: number) => {
        setUserData({ full_name, document, account, checkingAccountAmount, positions, consolidated });
        setToken(localStorage.getItem('token'))
        localStorage.setItem('document', document);
        localStorage.setItem("isAuthenticated", "true");
    }

    const logout = () => {
        setUserData({ full_name: "", document: "", account: "", checkingAccountAmount: 0, positions: [], consolidated: 0 });
        setToken('')
        localStorage.clear();
    }

    const update = (params: any, token: string) => {
        setToken(token)
        setUserData(params)
    }

    const values = {
        user,
        login,
        logout,
        update,
        token
    }

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
};

export function useUser() {
    return useContext(UserContext)
}