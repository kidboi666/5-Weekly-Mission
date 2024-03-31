import React, { useEffect, useState } from 'react';
import '../styles/card.css';
import CardNoneImg from '../assets/nocardImg.svg';
import { getCardData } from '../api/cardData';

function Card({ link }) {
    const getTimeDifference = (createdAt) => {
        const currentTime = new Date();
        const createdTime = new Date(createdAt);
        const seconds = Math.floor((currentTime - createdTime) / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(days / 365);

        if (seconds < 120) {
            return '1 minute ago';
        } else if (minutes < 60) {
            return `${minutes} minutes ago`;
        } else if (hours < 2) {
            return '1 hour ago';
        } else if (hours < 24) {
            return `${hours} hours ago`;
        } else if (days < 2) {
            return '1 day ago';
        } else if (days <= 30) {
            return `${days} days ago`;
        } else if (days < 365) {
            if (months <= 1) {
                return '1 month ago';
            } else {
                return `${months} months ago`;
            }
        } else if (years === 1) {
            return '1 year ago';
        } else {
            const flooredYears = Math.floor(months / 12);
            return `${flooredYears} years ago`;
        }
    };

    const formatDate = (value) => {
        const date = new Date(value);
        return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}.`;
    };

    const handleSiteOpen = () => {
        const url = link.url;
        window.open(url, '_blank');
    };

    return (
        <button className="card-button" onClick={handleSiteOpen}>
            <div className="card-img-area">
                <img className="card-img" src={link.imageSource ? link.imageSource : CardNoneImg} alt="내용 이미지" />
            </div>
            <div className="card-info-area">
                <p className="card-time">{getTimeDifference(link.createdAt)}</p>
                <p className="card-info">{link.title}</p>
                <p className="card-date">{formatDate(link.createdAt)}</p>
            </div>
        </button>
    );
}

export default Card;
