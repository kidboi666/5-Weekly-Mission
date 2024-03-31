import styled from "styled-components"
import Card from "./Card"
import { useState, useEffect } from "react";
import { fetchSampleFolder } from "../utils/fetchSampleFolder";

const StyledCardList = styled.div`
&{
    display: grid;
    grid-template-columns: repeat(32.5rem);
    justify-content: center;
    width: 100%;
    max-width: 106rem;
    row-gap: 2rem;
  
    @media (min-width: 768px) {
      grid-template-columns: repeat(auto-fill, 34rem);
      row-gap: 2.5rem;
      column-gap: 2rem;
    }  
}
`
function CardList() {
    const [sampleFolders, setSampleFolders] = useState('');
    const [links, setLinks] = useState([]);
    
    const getSampleFolder = async() =>{
        try {
        const folders = await fetchSampleFolder();
        setSampleFolders( folders )
        if (folders && folders.folder.links){
            setLinks(folders.folder.links)
        }
        } catch(error){
        console.error('fetch Error',error)
        }
    }

    useEffect(()=>{
        getSampleFolder()
    },[])


    return (
    <StyledCardList>
        {links.map((link) => (
            <Card
            id={link.id}
            img={link.imageSource}
            date={link.createdAt}
            title={link.title}
            description={link.description}
            />
        ))}
    </StyledCardList>
    )
}
export default CardList;