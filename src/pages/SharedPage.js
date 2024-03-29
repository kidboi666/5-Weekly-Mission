import React, { useContext, useEffect, useState } from "react";
import Search from "../components/utils/Search";
import Card from "../components/Card";
import { getSharedList } from "../api";
import "./SharedPage.css";
import { UserContext } from "../contexts/UserContext";
import ProfileImage from "../components/utils/ProfileImage";

export default function SharedPage() {
  const [folder, setFolder] = useState();
  const { user } = useContext(UserContext);

  const handleLoad = async () => {
    const nextFolder = await getSharedList();
    setFolder(nextFolder);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className='shared-page'>
      <div className='top-box'>
        <div className='profile-box'>
          <ProfileImage src={user?.profileImageSource} size='60' />
          <p>{user?.name}</p>
        </div>
        <h2 className='title'>{folder?.name} </h2>
      </div>
      <section className='shared-section'>
        <Search />
        <ul className='card-list'>
          {folder?.links.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </ul>
      </section>
    </div>
  );
}
