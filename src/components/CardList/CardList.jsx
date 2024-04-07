import "./CardList.css";
import Card from "../Card/Card";

function CardList({ cardListData, userFolderDataList }) {
    return (
        <>
            {cardListData ? (
                <ul className="card-list">
                    {cardListData?.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </ul>
            ) : null}
            {userFolderDataList ? (
                userFolderDataList?.data?.length ? (
                    <ul className="card-list">
                        {userFolderDataList?.data?.map((card) => {
                            return <Card card={card} key={card.id} />;
                        })}
                    </ul>
                ) : (
                    <div className="empty-link">저장된 링크가 없습니다.</div>
                )
            ) : null}
        </>
    );
}

export default CardList;
