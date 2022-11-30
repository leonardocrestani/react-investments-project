import { createContext, useContext, useState } from "react";

interface userDataContextType {
    full_name: string
    cpf: string
    account: string
    checkingAccountAmount: number
    positions: Array<any>
    consolidated: number
    login: (full_name: string, cpf: string, account: string, checkingAccountAmount: number, positions: any, consolidated: number) => void;
    logout: () => void;
}

const userDataContextDefaultValues: userDataContextType = {
    full_name: "",
    cpf: "",
    account: "",
    checkingAccountAmount: 0,
    positions: [],
    consolidated: 0,
    login: () => { },
    logout: () => { },
};

const UserContext = createContext<userDataContextType>(userDataContextDefaultValues);

export default function UserProvider({ children }: { children: any }) {
    const [{ full_name, cpf, account, checkingAccountAmount, positions, consolidated }, setUserData] = useState<{
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
    }

    const logout = () => {
        setUserData({ full_name: "", cpf: "", account: "", checkingAccountAmount: 0, positions: [], consolidated: 0 });
        console.log('chamou logout')
    }

    const values = {
        full_name,
        cpf,
        account,
        checkingAccountAmount,
        positions,
        consolidated,
        login,
        logout
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