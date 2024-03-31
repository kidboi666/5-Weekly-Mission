import GNB from '../components/Gnb';
import Footer from '../components/footer';
import codeitImg from '../assets/codeitImg.svg';
import Card from '../components/Card';

function Shared() {
    return (
        <>
            <GNB />
            <div className="">
                <img src={codeitImg} alt="코드잇" />
                <p></p>
            </div>
            <Card />
            <Footer />
        </>
    );
}

export default Shared;
