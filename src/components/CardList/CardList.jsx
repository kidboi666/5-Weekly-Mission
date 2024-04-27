import React from "react";
import "./CardList.css";
import Card from "../Card/Card";

function renderCardList(cardData) {
    return (
        <ul className="card-list">
            {cardData.map((card) => {
                return <Card card={card} key={card.id} />;
            })}
        </ul>
    );
}

function CardList({ cardListData, userFolderDataList }) {
    return (
        <>
            {cardListData && cardListData.length > 0 && renderCardList(cardListData)}
            {userFolderDataList &&
                userFolderDataList.data &&
                userFolderDataList.data.length > 0 &&
                renderCardList(userFolderDataList.data)}
            {!cardListData && !userFolderDataList && (
                <div className="empty-link">저장된 링크가 없습니다.</div>
            )}
        </>
    );
}

export default CardList;
