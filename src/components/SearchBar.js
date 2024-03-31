import { useState } from "react";
import styled from "styled-components";


const StyledInput = styled.input`
    
    display: flex;
    width: 100%;
    font-size: 16px;
    padding: 15px 32px;
    margin: 0 20px;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 10px;
    background: #F5F5F5;
    background-image: url("/images/search.svg");
    background-repeat: no-repeat;
    background-position: 10px center;
    background-size: 16px 16px;
    @media (min-width: 1060px) {
    width: 1060px;
    }
`

function SearchBar(){
    const [searchInput, setSearchInput] = useState('');

    function handleInputChange(e){
        setSearchInput(e.target.value);
    }

    return (
        <>
            <StyledInput
                type="text"
                placeholder="검색어를 입력하세요."
                value={searchInput}
                onChange={handleInputChange}
            >
            </StyledInput>
        </>
    )
}

export default SearchBar