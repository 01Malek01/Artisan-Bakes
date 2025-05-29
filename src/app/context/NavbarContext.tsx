'use client'
import { useState, createContext, useContext } from "react";


interface NavbarContextType {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const navbarContext = createContext<NavbarContextType | null>(null);
 const NavbarContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeTab, setActiveTab] = useState("home")
    return(

        <navbarContext.Provider value={{activeTab, setActiveTab}}>
            {children}
        </navbarContext.Provider>
        )
    }

     const useNavbar = () => {
        const context = useContext(navbarContext);
        if (!context) {
            throw new Error("useNavbar must be used within a NavbarContextProvider");
        }
        return context;
    }

export { NavbarContextProvider, useNavbar };
