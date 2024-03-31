import Profile from './Profile';
import SearchBar from './SearchBar';
import Card from './Card';

import '../static/css/main.css';

function Main() {
    return (
        <main className="wrap-content">
            <Profile />
            <SearchBar />
            <Card />
        </main>
    );
}

export default Main;