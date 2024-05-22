import styled from "styled-components";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  MouseEvent,
  RefObject,
  SetStateAction,
  memo,
  useState,
} from "react";

const BAR_COLOR = "#f5f5f5";
const BAR_BORDER_RADIUS = "10px";

const SearchBar = ({
  placeholder,
  search,
  searching,
  setSearching,
}: {
  placeholder?: string;
  search: RefObject<HTMLInputElement>;
  searching: string;
  setSearching: Dispatch<SetStateAction<string>>;
}) => {
  const [hidding, setHidding] = useState<boolean>(true);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchingLink = search?.current;
    if (searchingLink) setSearching(searchingLink?.value);
  };

  const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
    setHidding(true);
    if (search?.current instanceof HTMLInputElement) {
      search.current.value = "";
      setSearching(search.current.value);
    }
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (search?.current?.value !== "") {
      setHidding(false);
      return;
    }
    setHidding(true);
  };

  return (
    <>
      <BarOfSearch onSubmit={handleSubmit}>
        <HiddenLabel htmlFor="search">검색</HiddenLabel>
        <SearchInput
          type="text"
          id="search"
          placeholder={placeholder}
          ref={search}
          onChange={handleSearch}
        />
        <CloseButton
          $hidden={hidding}
          onClick={handleClose}
          type="button"
        ></CloseButton>
        <HiddenButton type="submit">검색하기</HiddenButton>
      </BarOfSearch>
      {searching && (
        <Div>
          <strong className="searching">'{searching}' </strong> 검색한
          결과입니다.
        </Div>
      )}
    </>
  );
};

export default memo(SearchBar);

const BarOfSearch = styled.form`
  display: flex;
  padding: 15px 16px;
  border-radius: ${BAR_BORDER_RADIUS};
  background-color: ${BAR_COLOR};
  overflow: hidden;

  &::before {
    content: "";
    background-image: url("/Search.svg");
    background-size: cover;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    align-self: center;
  }
`;
const SearchInput = styled.input`
  flex-grow: 1;
  background-color: ${BAR_COLOR};
  border: 0px;
  height: 24px;
  outline: none;
`;

const CloseButton = styled.button<{ $hidden: boolean }>`
  background-image: url("/inputclose.png");
  background-size: cover;
  width: 24px;
  height: 24px;
  display: ${({ $hidden }) => $hidden && "none"};
`;

const Div = styled.div`
  color: #9fa6b2;
  font-size: 32px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
  & .searching {
    color: #373740;
  }
`;

const HiddenLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  border: 0;
  clip: rect(0 0 0 0);
`;

const HiddenButton = styled.button`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  border: 0;
  clip: rect(0 0 0 0);
`;
