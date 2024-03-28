import "./ContentWrap.css";
import ConHeader from "./ConHeader";
import Search from "./Search";
import { useEffect, useState } from "react";
import CardList from "./CardList";
import { fetchData } from "../fetchUtils";

function ContentWrap() {
    const [folderData, setFolderData] = useState([]);
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        async function fetchDataAndSetState() {
            const { cardData, folderData } = await fetchData();

            setFolderData(folderData);
            setCardData(cardData);
        }
        fetchDataAndSetState();
    }, []);

    return (
        <div className="content-wrap">
            <ConHeader folderData={folderData} />
            <div className="wrap">
                <Search />
                <CardList cardData={cardData} />
            </div>
        </div>
    );
}

export default ContentWrap;
