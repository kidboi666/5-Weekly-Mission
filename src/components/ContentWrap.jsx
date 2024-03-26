import "./ContentWrap.css";
import ConHeader from "./ConHeader";
import Search from "./Search";
import { useCallback, useEffect, useState } from "react";
import CardList from "./CardList";

function ContentWrap() {
    const [folderData, setFolderData] = useState([]);
    const [cardData, setCardData] = useState(null);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
            const data = await response.json();
            const { folder } = await data;
            const { links } = await folder;

            setFolderData(folder);
            setCardData(links);
        } catch (e) {
            console.log(e);
        }
    }, [setFolderData, setCardData]);

    console.log(cardData);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

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
