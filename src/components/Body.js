import styled from "styled-components";
import Card from "./Card";
import CardList from "./CardList";
import { fetchSampleFolder } from "../utils/fetchSampleFolder";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
const StyledBody = styled.body`
display: flex;
flex-direction: column;
align-items: center;
padding: 32px;
gap: 40px;
margin: 40px auto;
`

function Body() {

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
        <StyledBody>
            <SearchBar/>
            <CardList/>
        </StyledBody>
    )
}
export default Body;