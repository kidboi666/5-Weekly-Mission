import UserContext from './contexts/UserContext'
import Nav from  './components/Nav'
import Header from  './components/Header'
import Body from './components/Body';
import Footer from  './components/Footer'
import { fetchUserData } from './utils/fetchUserData'
import { createContext, useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import colorsCss from "./utils/colors.css";
import resetCss from "./utils/reset.css";

const GlobalStyle = createGlobalStyle`
  * {
    colorsCss
    resetCss
  }
`
function App(){
  const [user, setUser] = useState('');

  const getUserData = async() =>{
        try {
        const userData = await fetchUserData();
        setUser(userData);
        } catch(error){
        console.error('fetch Error',error)
        }
    }

  useEffect(getUserData,[])

  return (
    <UserContext.Provider value={user}>
      <>
        <GlobalStyle />
        <Nav />
        <Header/>
        <Body/>
        <Footer/>
      </>
    </UserContext.Provider>
  );
}

export default App;
