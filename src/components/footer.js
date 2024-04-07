import React from 'react';
import facebookImg from '../assets/facebook.svg';
import twitterImg from '../assets/twiter.svg';
import youtubeImg from '../assets/youtube.svg';
import instagramImg from '../assets/instagram.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterMainDiv = styled.footer`
    display: flex;
    height: 280px;
    padding-top: 120px;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    border-radius: 30px;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.02);

    @media screen and (max-width: 767px) {
        padding-top: 40px;
        height: 0;
    }
`;

const FooterContainer = styled.div`
    display: flex;
    height: 160px;
    padding: 32px 104px 64px 104px;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    align-self: stretch;
    background: #111322;
`;

const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;

    @media screen and (max-width: 767px) {
        display: grid;
        grid-template: 1fr / 1fr 1fr;
        gap: 60px;
    }
`;

const FooterCodeitItem = styled.p`
    color: #676767;
    text-align: center;
    font-family: Acme;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media screen and (max-width: 767px) {
        text-align: left;
        grid-area: 2/ 1;
    }
`;

const FooterMenu = styled.div`
    display: flex;
    width: 181.111px;
    align-items: flex-start;
    gap: 30px;
`;

const FooterMenuItem = styled.p`
    color: #cfcfcf;
    font-family: Acme;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: none;
`;

const FooterIcon = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 12px;

    @media screen and (max-width: 767px) {
        justify-content: flex-end;
    }
`;

function Footer() {
    const LinkStyle = {
        textDecoration: 'none',
    };
    return (
        <FooterMainDiv>
            <FooterContainer>
                <FooterContent>
                    <FooterCodeitItem>©codeit - 2023</FooterCodeitItem>
                    <FooterMenu>
                        <Link to="privacy" style={LinkStyle}>
                            <FooterMenuItem>Privacy Policy</FooterMenuItem>
                        </Link>
                        <Link to="/faq" style={LinkStyle}>
                            <FooterMenuItem>FAQ</FooterMenuItem>
                        </Link>
                    </FooterMenu>
                    <FooterIcon>
                        <a href="https://www.facebook.com/" target="_blank">
                            <img src={facebookImg} alt="facebook" />
                        </a>
                        <a href="https://twitter.com/" target="_blank">
                            <img src={twitterImg} alt="twitter" />
                        </a>
                        <a href="https://youtube.com" target="_blank">
                            <img src={youtubeImg} alt="youtube" />
                        </a>
                        <a href="https://instagram.com" target="_blank">
                            <img src={instagramImg} alt="instagram" />
                        </a>
                    </FooterIcon>
                </FooterContent>
            </FooterContainer>
        </FooterMainDiv>
    );
}

export default Footer;
