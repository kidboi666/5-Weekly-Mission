import GNB from '../components/Gnb';
import Footer from '../components/footer';
import codeitImg from '../assets/codeitImg.svg';
import Card from '../components/Card';
import SearchBar from '../components/searchBar';
import { useState, useEffect } from 'react';
import { getCardData } from '../api/cardData';
import '../styles/shard.css';

function Shared() {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getCardData();
                setData(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    if (data) {
        console.log(data);
    }
    return (
        <>
            <GNB />
            {data && (
                <div className="shared-frame">
                    <img src={data.folder.owner.profileImageSource} alt="코드잇" />
                    <p className="shared-username">{data.folder.owner.name}</p>
                    <p className="shared-favorites">{data.folder.name}</p>
                </div>
            )}
            <div className="shared-content">
                <SearchBar />
                <div className="shared-card">
                    {data && data.folder.links.map((link, index) => <Card key={index} link={link} />)}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Shared;
