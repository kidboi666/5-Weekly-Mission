import './FolderInfo.css';

export function FolderInfo({user}) {
    return (
        <div className='folder-info-block'>
            <div className="folder-info">
                <div className='icon-wrapper'>
                    <img src="./images/white.svg" alt="icon-img"></img>
                </div>
                <p className='user-name'>@{user.name}</p>
                <p className='folder-name'>⭐️ 즐겨찾기</p>
            </div>
        </div>
    );
}
