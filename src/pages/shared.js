import GNB from '../components/Gnb';
import Footer from '../components/footer';
import codeitImg from '../assets/codeitImg.svg';
import Card from '../components/Card';
function Shared() {
    return (
        <div className="shard-body">
            <GNB />
            <div className="">
                <img src={codeitImg} alt="코드잇" />
                <p></p>
            </div>
            <Footer />
        </div>
    );
}

export default Shared;
