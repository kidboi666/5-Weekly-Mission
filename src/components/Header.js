import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import { fetchSampleFolder } from '../utils/fetchSampleFolder';

const StyledHeader = styled.header`
display: flex;
width: 100%;
padding: 20px 0 60px ;
flex-direction: column;
align-items: center;
gap: 8px;
background: var(--Linkbrary-bg, #F0F6FF);
`
const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`

function Header() {
    const [foldersData, setFoldersData] = useState(null);

    useEffect(() => {
        const getFolderData = async () => {
            try {
                const folders = await fetchSampleFolder();
                setFoldersData(folders.folder);
            } catch(error) {
                console.error('fetch Error', error);
            }
        };
        getFolderData();
    }, []);


    const ownerProfileImgStyle ={
        "height":"60px",
        "width":"60px",
    }
    const ownerNameStyle ={
        "color":"black",
        "font-size":"16px",
        "line-height":"24px"
    }
    const ownerFolderNameStyle ={
        "color":"black",
        "font-size":"40px",
        "font-weight":"600",
        "font-feature-settings": "'clig' off, 'liga' off;",
        "text-align":"center",
        "white-space": "nowrap"
    }

    return (
        <StyledHeader>
            <StyledDiv>
                {foldersData && (
                    <>
                        <img src={foldersData.owner.profileImageSource} style={ownerProfileImgStyle} alt="folderImg" />
                        <div style={ownerNameStyle}>@{foldersData.owner.name}</div>
                        <div style={ownerFolderNameStyle}>{foldersData.name}</div>
                    </>
                )}
            </StyledDiv>
        </StyledHeader>
    )
}

export default Header;