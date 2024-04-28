import './LinkInput.css';

export function LinkInput() {
    return (
        <div className="LinkInput-wrapper">
            <div className='LinkInput'>
                <div className='input-icon-wrapper'>
                    <img src="./images/link.svg" alt="link img"></img>
                    <input value="링크를 추가해보세요"></input>
                </div>
                <button>
                    <p>추가하기</p>
                </button>
            </div>
        </div>
    )
}