import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/landing.css';
import GNB from '../components/Gnb';
import Footer from '../components/footer';
import mainContentImg from '../assets/content2.png';
import content2Img from '../assets/content2.png';
import content3Img from '../assets/content3.png';
import content4Img from '../assets/content4.png';
import content5Img from '../assets/content5.png';

function Landing() {
    const LinkStyle = {
        textDecoration: 'none',
    };
    return (
        <>
            <GNB text={'로그인'} />
            <main>
                <div className="main-content">
                    <p className="explain">
                        <span className="highlight">세상의 모든 정보</span>를 <br />
                        쉽게 저장하고 관리해 보세요
                    </p>
                    <Link to="/sign-up" style={LinkStyle}>
                        <p className="add-link">링크 추가하기</p>
                    </Link>
                    <div className="main-img">
                        <img src={mainContentImg} alt="홈페이지 이미지" className="main-content-img" />
                    </div>
                </div>
                <div className="content a">
                    <div className="content-container">
                        <div className="textbox">
                            <h1 className="content-title">
                                <span className="highlight-link">원하는 링크</span>를 <br />
                                저장하세요
                            </h1>
                            <p className="content-paragraph">
                                나중에 읽고 싶은 글, 다시 보고 싶은 영상, <br />
                                사고 싶은 옷, 기억하고 싶은 모든 것을 <br />한 공간에 저장하세요.
                            </p>
                        </div>
                        <img src={content2Img} alt="링크 저장" className="content-img" />
                    </div>
                </div>
                <div className="content">
                    <div className="content-container">
                        <img src={content3Img} alt="폴더 관리" className="content-img" />
                        <div className="textbox">
                            <h1 className="content-title">
                                링크를 폴더로 <br />
                                <span className="highlight-manage">관리</span>하세요
                            </h1>
                            <p className="content-paragraph">
                                나만의 폴더를 무제한으로 만들고 <br />
                                다양하게 활용할 수 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="content-container">
                        <div className="textbox">
                            <h1 className="content-title">
                                저장한 링크를 <br />
                                <span className="highlight-share">공유</span>해보세요
                            </h1>
                            <p className="content-paragraph">
                                여러 링크를 폴더에 담고 공유할 수 있습니다.
                                <br />
                                가족, 친구, 동료들에게 쉽고 빠르게 링크를 <br />
                                공유해 보세요.
                            </p>
                        </div>
                        <img src={content4Img} alt="링크 공유" className="content-img" />
                    </div>
                </div>
                <div className="content">
                    <div className="content-container">
                        <img src={content5Img} alt="링크 검색" className="content-img" />
                        <div className="textbox">
                            <h1 className="content-title">
                                저장한 링크를 <br />
                                <span className="highlight-search">검색</span>해보세요
                            </h1>
                            <p className="content-paragraph">중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Landing;
