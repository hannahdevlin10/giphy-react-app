import React, { createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [dogData, setDogData] = useState(null);
    const [catData, setCatData] = useState(null);
    const [activeTab, setActiveTab] = useState('dog');
    const [activeDetailItem, setActiveDetailItem] = useState(null);
    const [detailOpen, setDetailOpen] = useState(false);
    
    const toggleDetailPopup = (open = !detailOpen) => setDetailOpen(open);

    return (
        <DataContext.Provider value={{ dogData, setDogData, catData, setCatData, activeTab, setActiveTab, detailOpen, toggleDetailPopup, activeDetailItem, setActiveDetailItem }}> 
            {children}
        </DataContext.Provider>
    )
}