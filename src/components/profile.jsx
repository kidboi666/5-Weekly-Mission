import './profile.css';

function Profile({email, img}) {
    return(
        <div className="profile">
            <img src = {img} className="profileImg" alt='프로필 이미지'/>
            <p className="profileEmail">{email}</p>
        </div>
    );
}

export default Profile;