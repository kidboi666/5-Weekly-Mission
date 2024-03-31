import { Link } from "react-router-dom";

import { fetchUserFolder } from '../api/user.js';
import { useFetch } from "../hooks/useFetch.js";

import image from '../static/images/image.png';

function Card() {
    const userFolder = useFetch(fetchUserFolder);

    console.log(userFolder);
    return (
        <section className="user-card-list">
            <div className="user-card">
                {userFolder && userFolder.folder.links.map((link) => (
                    <div className="card">
                        <Link to={link.url} target="_blank">
                            {link.imageSource ? (
                                <img src={link.imageSource} alt={link.title} className="card-image"/>
                            ) : (
                                <img src={image} alt="썸네일" className="card-image"/>
                            )}
                            
                            <div className="card-txt">
                                <p className="cal-created">{link.createdAt}</p>
                                <p className="description">{link.description}</p>
                                <p className="created">{link.createdAt}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Card;