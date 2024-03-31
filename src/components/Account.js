import React from "react";
import styled from "styled-components";

async function Account () {
    try{
        const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/user');
    } catch (error) {
        
    }

    
    return(
        <>
            
        </>
    )
}

export default Account;