import ConHeader from "../components/ConHeader/ConHeader";
import Search from "../components/Search/Search";
import CardList from "../components/CardList/CardList";
import { useEffect, useState } from "react";
import { fetchData } from "../fetchUtils";

function Shared() {
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

export default Shared;
