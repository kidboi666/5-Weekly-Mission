import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Landing.css';
import '../style/reset.css';
import GNB from '../compornents/Gnb';
import Footer from '../compornents/footer';
import mainContentImg from '../imgs/dim.png';
import content2Img from '../imgs/content2.png';
import content3Img from '../imgs/content3.png';
import content4Img from '../imgs/content4.png';
import content5Img from '../imgs/content5.png';

function Landing() {
    return (
        <>
            <GNB text={'로그인'} />
            <main>
                <div class="main-content">
                    <p class="explain">
                        <span class="highlight">세상의 모든 정보</span>를 <br />
                        쉽게 저장하고 관리해 보세요
                    </p>
                    <a href="signup.html" class="add-link">
                        링크 추가하기
                    </a>
                    <div class="main-img">
                        <img src={mainContentImg} alt="홈페이지 이미지" class="main-content-img" />
                    </div>
                </div>
                <div class="content a">
                    <div class="content-container">
                        <div class="textbox">
                            <h1 class="content-title">
                                <span class="highlight-link">원하는 링크</span>를 <br />
                                저장하세요
                            </h1>
                            <p class="content-paragraph">
                                나중에 읽고 싶은 글, 다시 보고 싶은 영상, <br />
                                사고 싶은 옷, 기억하고 싶은 모든 것을 <br />한 공간에 저장하세요.
                            </p>
                        </div>
                        <img src={content2Img} alt="링크 저장" class="content-img" />
                    </div>
                </div>
                <div class="content">
                    <div class="content-container">
                        <img src={content3Img} alt="폴더 관리" class="content-img" />
                        <div class="textbox">
                            <h1 class="content-title">
                                링크를 폴더로 <br />
                                <span class="highlight-manage">관리</span>하세요
                            </h1>
                            <p class="content-paragraph">
                                나만의 폴더를 무제한으로 만들고 <br />
                                다양하게 활용할 수 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="content-container">
                        <div class="textbox">
                            <h1 class="content-title">
                                저장한 링크를 <br />
                                <span class="highlight-share">공유</span>해보세요
                            </h1>
                            <p class="content-paragraph">
                                여러 링크를 폴더에 담고 공유할 수 있습니다.
                                <br />
                                가족, 친구, 동료들에게 쉽고 빠르게 링크를 <br />
                                공유해 보세요.
                            </p>
                        </div>
                        <img src={content4Img} alt="링크 공유" class="content-img" />
                    </div>
                </div>
                <div class="content">
                    <div class="content-container">
                        <img src={content5Img} alt="링크 검색" class="content-img" />
                        <div class="textbox">
                            <h1 class="content-title">
                                저장한 링크를 <br />
                                <span class="highlight-search">검색</span>해보세요
                            </h1>
                            <p class="content-paragraph">중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Landing;
