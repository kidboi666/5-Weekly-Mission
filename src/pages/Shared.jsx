import ConHeader from "../components/ConHeader/ConHeader";
import Search from "../components/Search/Search";
import CardList from "../components/CardList/CardList";
import { useEffect, useState } from "react";
import { fetchData } from "../fetchUtils";

function Shared() {
    const [folderData, setFolderData] = useState([]);
    const [cardListData, setCardListData] = useState([]);

    useEffect(() => {
        async function fetchDataAndSetState() {
            const { cardListData, folderData } = await fetchData();

            setFolderData(folderData);
            setCardListData(cardListData);
        }
        fetchDataAndSetState();
    }, []);

    return (
        <div className="content-wrap">
            <ConHeader folderData={folderData} />
            <div className="wrap">
                <Search />
                <CardList cardListData={cardListData} />
            </div>
        </div>
    );
}

export default Shared;
