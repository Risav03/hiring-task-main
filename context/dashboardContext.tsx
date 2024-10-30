"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode, useEffect } from "react";
import { useCookies } from "react-cookie";

type GlobalContextType = {
    fetchTitles: () => void;
    titles: Array<titleType> | null;
    setTitles: Dispatch<SetStateAction<Array<titleType>>>
    addTitleModal: boolean;
    setAddTitleModal: Dispatch<SetStateAction<boolean>>
}

const GlobalContext = createContext<GlobalContextType>({
    fetchTitles: () => { },
    titles: null,
    setTitles: ()=>{},
    addTitleModal: false,
    setAddTitleModal: ()=>{}

});

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {

    const router = useRouter();
    const [titles, setTitles] = useState<Array<titleType>>([])
    const[addTitleModal, setAddTitleModal] = useState<boolean>(false);
    const[cookies] = useCookies(['token'])

    async function fetchTitles() {
        try {
            const res = await axios.get("http://localhost:8000/api/v1/title", { headers: { "Authorization": cookies.token } })
            console.log(res);
            setTitles(res.data);
        }
        catch (err: any) {
            console.log(err);

            if (err.status == 401) {
                router.push("/connect");
            }
        }
    }



    return (
        <GlobalContext.Provider value={{
            fetchTitles, titles, setTitles, addTitleModal, setAddTitleModal
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
