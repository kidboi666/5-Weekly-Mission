import React from 'react';
import styled from 'styled-components';
import searchIcon from '../assets/search.svg';

const SearchBarContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 15px 16px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 10px;
    background: #f5f5f5;
`;

const SearchIcon = styled.img`
    width: 16px;
    height: 16px;
`;

const SearchInput = styled.input`
    flex-grow: 1;
    background-color: transparent;
    border: none;
`;

const SearchBar = () => {
    return (
        <SearchBarContainer>
            <SearchIcon src={searchIcon} alt="검색" />
            <SearchInput placeholder="링크를 검색해 보세요" />
        </SearchBarContainer>
    );
};

export default SearchBar;
