function AddLinkInput() {
  return (
    <form className="SearchForm">
      <div className="SearchForm__searchWrap">
        <img className="SearchForm__Img" src={SearchImg} alt="돋보기" />
        <input
          id="SearchForm__Input"
          type="text"
          placeholder="링크를 검색해 보세요."
        />
      </div>
    </form>
  );
}

export default AddLinkInput;
