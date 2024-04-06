import './Linklist.css';
import { calculatePastTime } from './util';

function LinkItem({link}) {
    const base_image = 'images/card-default.png';
    const url = link.url;
    const createdAt = link.createdAt
    const imageSource = link.imageSource ? link.imageSource : base_image;
    return (
        <a href={url}>
            <div className='Link-card'>
                <div className="Link-image-wrapper">
                    <img className="Link-image" src={imageSource} alt="링크이미지"></img>
                </div>
                <div className="Link-info">
                    <p className="creation-time">{calculatePastTime(createdAt)}</p>
                    <p className='link-description'>{link.description}</p>
                    <p>2023. 3. 15</p>
                </div>
            </div>
        </a>
    );
}

export function LinkList({links}) {
    return (
        <div className="Link-container">
            <ul className="LinkList">
                {links.map((link) => {
                    return (
                        <li key={link.id}>
                            <LinkItem link={link}/>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
