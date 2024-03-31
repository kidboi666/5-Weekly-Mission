import { fetchUserFolder } from '../api/user.js';
import { useFetch } from "../hooks/useFetch.js";

function Profile() {
    const userFolder = useFetch(fetchUserFolder);

    return (
        <section className="user-folder">
            {userFolder && (
                <div className="user-folder-info">
                    <img src={userFolder.folder.owner.profileImageSource} className="folder-profile" alt="프로필"/>
                    <span>{userFolder.folder.owner.name}</span>
                    <h1>{userFolder.folder.name}</h1>
                </div>
            )}
            
        </section>
    );
}

export default Profile;