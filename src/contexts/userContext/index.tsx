import { createContext, useContext, useState } from "react";

interface user {
    full_name: string
    cpf: string
    account: string
    checkingAccountAmount: number
    positions: Array<any>
    consolidated: number
}

interface userDataContextType {
    user: user,
    login: (full_name: string, cpf: string, account: string, checkingAccountAmount: number, positions: any, consolidated: number) => void;
    logout: () => void;
    update: (params: any) => void;
}

const userDataContextDefaultValues: userDataContextType = {
    user: {
        full_name: "",
        cpf: "",
        account: "",
        checkingAccountAmount: 0,
        positions: [],
        consolidated: 0,
    },
    login: () => { },
    logout: () => { },
    update: () => { },
};

const UserContext = createContext<userDataContextType>(userDataContextDefaultValues);

export default function UserProvider({ children }: { children: any }) {

    const [user, setUserData] = useState<{
        full_name: string
        cpf: string
        account: string
        checkingAccountAmount: number
        positions: Array<any>
        consolidated: number
    }>({
        full_name: "",
        cpf: "",
        account: "",
        checkingAccountAmount: 0,
        positions: [],
        consolidated: 0,
    });

    const login = (full_name: string, cpf: string, account: string, checkingAccountAmount: number, positions: any, consolidated: number) => {
        setUserData({ full_name, cpf, account, checkingAccountAmount, positions, consolidated });
        localStorage.setItem("isAuthenticated", "true");
    }

    const logout = () => {
        setUserData({ full_name: "", cpf: "", account: "", checkingAccountAmount: 0, positions: [], consolidated: 0 });
        localStorage.clear();
    }

    const update = (params: any) => {
        setUserData(params)
    }

    const values = {
        user,
        login,
        logout,
        update
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