import "./ConHeader.css";

function ConHeader({ folderData }) {
    const owner = folderData?.owner;

    return (
        <div className="con-header-wrap">
            <div className="con-header">
                <img src={owner?.profileImageSource} alt="" />
                <h3>{owner?.name}</h3>
            </div>
            <h2>{folderData?.name}</h2>
        </div>
    );
}

export default ConHeader;
