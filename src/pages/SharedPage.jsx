import { useFetchFolder } from "../hooks/useFetchFolder";
import noImageLogo from "../assets/noImageLogo.svg";
import SearchImg from "../assets/Search.svg";
import "../pages/SharedPage.css";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function timeDiffDate(value) {
  const timeDiff = new Date() - new Date(value);

  const diffMonth = Math.floor(Math.abs(timeDiff / (1000 * 60 * 60 * 24 * 30)));
  if (diffMonth) {
    return diffMonth <= 11 ? `${diffMonth} months ago` : "1 year ago";
  }
}

function FolderListPage() {
  const folderdata = useFetchFolder();
  return (
    <div className="container">
      <form>
        <div className="search-wrapper">
          <button className="search-btn">
            <img className="search-img" src={SearchImg} alt="search-img" />
          </button>
          <input className="input" placeholder="링크를 검색해 보세요." />
        </div>
      </form>
      <div className="card-container">
        {folderdata &&
          folderdata.folder.links.map((item) => (
            <div className="card" key={item.id}>
              <a href={item.url} target="_blank" rel="noreferrer">
                <div className="card-Thumbnail-container">
                  {item.imageSource ? (
                    <img
                      className="card-thumbnail"
                      src={item.imageSource}
                      alt="카드 썸네일"
                    />
                  ) : (
                    <img
                      className="card-no-thumbnail"
                      src={noImageLogo}
                      alt="카드 썸네일 없음"
                    />
                  )}
                </div>
                <div className="card-info">
                  <p className="card-created-at">
                    {timeDiffDate(item.createdAt)}
                  </p>
                  <p className="card-description">{item.description}</p>
                  <p className="card-created-at">
                    {formatDate(item.createdAt)}
                  </p>
                </div>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}

export default FolderListPage;
