import React, { useState } from 'react';
import StarDefault from '../imgs/starDefault.svg';
import StarSeleted from '../imgs/starSeleted.svg';

function Star() {
    const [starState, setStarState] = useState('default');

    const handleStarSeleted = (e) => {
        if (starState === 'default') {
            setStarState('seleted');
        } else {
            setStarState('default');
        }
    };
    return (
        <>
            {starState === 'default' ? (
                <img onClick={handleStarSeleted} src={StarDefault} alt="즐겨찾기" />
            ) : (
                <img onClick={handleStarSeleted} src={StarSeleted} alt="즐겨찾기 해제" />
            )}
        </>
    );
}

export default Star;
