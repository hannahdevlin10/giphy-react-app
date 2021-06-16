import React, {useContext} from "react";
import { DataContext } from "../../../context";
import './style.css';

export default function Content () {
    const { activeTab, toggleDetailPopup, dogData, catData, setActiveDetailItem, activeDetailItem } = useContext(DataContext);
    

    // attempt to add 5x5 grid sytem by getting every 4th item id from array
    // if item id was included in that array, then aim was to add <br/>
    const isFourthItem = (id) => {
        let x = dogData?.map((item) => item?.id);
        let y = x?.indexOf(id);

        if (y === 4) {
            return true;
        } else {
            return false;
        }
    
    }

    // solution for grid system
    // split array of items in half
    const middle = Math.floor(activeTab === 'dog' ? dogData?.length / 2 : catData?.length / 2);
    const left = activeTab === 'dog' ? dogData?.slice(0, middle) : catData?.slice(0, middle);
    const right = activeTab === 'dog' ? dogData?.slice(middle) : catData?.slice(middle);

    return (
        <div className="content-container">
            <div style={{ display: 'flex' }}>
            {
                left?.map((item) => {
                    return (
                        <div>
                            <div onClick={() => { toggleDetailPopup(true); setActiveDetailItem(item) }} style={{ padding: 12 }}>
                                <img className="giphy-img" src={item?.images?.original?.webp} alt={item?.title} width={150} height={150} />
                            </div>
                            {/* <span style={{ display: isFourthItem(item?.id) ? '' : 'none' }}><br></br></span> */}
                        </div>
                    )
                })
            }
            </div>
            <div style={{ display: 'flex' }}>
            {
                 right?.map((item) => {
                    return (
                        <div onClick={() => { toggleDetailPopup(true); setActiveDetailItem(item) }} style={{ padding: 12 }}>
                            <img className="giphy-img" src={item?.images?.original?.webp} alt={item?.title} width={150} height={150} />
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}