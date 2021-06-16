import React, { useContext } from "react";
import { DataContext } from "../../../context";
import './style.css';

export default function Tabs () {
const { activeTab, setActiveTab } = useContext(DataContext);

const selectedStyle = {
    width: "50%",
    backgroundColor: '#3C8DAD',
    borderBottom: '3px solid #73C2FB',
    color: '#fff',
    fontWeight: 500,
    padding: 14,
}

const unselectedStyle = {
    width: "50%",
    backgroundColor: 'rgba(60, 141, 173, 0.4)',
    padding: 14,
}

    return (
        <div style={{ width: '100%', display: 'flex' }}>
           <div className="tab-item" onClick={() => setActiveTab('dog')} style={activeTab === 'dog' ? selectedStyle : unselectedStyle}>
                Dog Giphys
           </div>
           <div className="tab-item" onClick={() => setActiveTab('cat')} style={activeTab === 'cat' ? selectedStyle : unselectedStyle}>
                Cat Giphys
           </div>
        </div>
    )
}