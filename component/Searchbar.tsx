export default function Searchbar({
  onSubmit,
  onChange,
  onClose,
  inputValue,
}: {
  onSubmit: any;
  onChange: any;
  onClose: any;
  inputValue: string;
}) {
  return (
    <div className="relative px-8 xl:px-[200px]">
      <form onSubmit={onSubmit}>
        <img
          src="/images/search.svg"
          alt="search"
          className="absolute top-[57px] left-[40px] xl:left-[210px] cursor-pointer"
          onClick={onSubmit}
        />
        <input
          placeholder="링크를 검색해 보세요."
          className="w-full mt-[40px] px-4 py-4 rounded-md bg-[#F5F5F5] indent-[20px]"
          name="inputValue"
          value={inputValue}
          onChange={onChange}
        />
        <img
          src="/images/close.svg"
          alt="close"
          className="absolute right-[50px] xl:right-[210px] top-[55px] cursor-pointer "
          onClick={onClose}
        />
      </form>
    </div>
  );
}
