import React, { useState } from 'react';
import StarDefault from '../assets/starDefault.svg';
import StarSeleted from '../assets/starSeleted.svg';

function Star() {
    const [isStarShowing, setIsStarShowing] = useState(false);

    const handleStarSeleted = () => {
        if (isStarShowing === false) {
            setIsStarShowing(true);
        } else {
            setIsStarShowing(false);
        }
    };
    return (
        <>
            {isStarShowing ? (
                <img onClick={handleStarSeleted} src={StarSeleted} alt="즐겨찾기 해제" />
            ) : (
                <img onClick={handleStarSeleted} src={StarDefault} alt="즐겨찾기" />
            )}
        </>
    );
}

export default Star;
