import React, { useContext } from "react";
import { DataContext } from "../../../context";
import CloseIcon from '../../../assets/images/close-icon.png';
import './style.css';

export default function Detail () {
    const { detailOpen, toggleDetailPopup, activeDetailItem } = useContext(DataContext);

    console.log(activeDetailItem)
    return (
        <div className="detail-popup-container" style={{ display: detailOpen ? '' : 'none' }}>
            <div style={{ display: 'flex', marginBottom: 15 }}>
                <div style={{ width: '100%', fontSize: 24 }}>
                    <span>{activeDetailItem?.title}</span>
                </div>
                <div className="close-icon" onClick={() => toggleDetailPopup(false)}>
                    <img src={CloseIcon} alt="close-icon" width={25} height={25} />
                </div>
            </div>
            <div>
                <div style={{ marginBottom: 5 }}>
                    <img src={activeDetailItem?.images?.original?.webp} alt={activeDetailItem?.title} width={250} height={250} />
                </div>
                <div>
                    {<a href={activeDetailItem?.url}>Source</a> }
                </div>
            </div>
        </div>
    )
}