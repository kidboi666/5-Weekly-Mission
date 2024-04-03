import "./Profile.css";

function Profile({ user }) {
    const { name, email, profileImageSource } = user;
    return (
        <div className="header-profile">
            <div className="header-img">
                <img src={profileImageSource} alt={name} />
            </div>
            <div className="header-email">{email}</div>
        </div>
    );
}

export default Profile;
