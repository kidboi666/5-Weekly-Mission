import React, { useContext, useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import Card from "../../components/Card/Card";
import { getSharedList } from "../../api";
import "./SharedPage.css";
import { UserContext } from "../../contexts/UserContext";
import ProfileImage from "../../components/ProfileImage/ProfileImage";

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
      <div className='shared__top-wrap'>
        <div className='shared__profile-wrap'>
          <ProfileImage src={user?.profileImageSource} size='m' />
          <p className='shared__profile-text'>{user?.name}</p>
        </div>
        <h2 className='shared__title'>{folder?.name} </h2>
      </div>
      <section className='shared__section'>
        <Search />
        <ul className='shared__card-list'>
          {folder?.links.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </ul>
      </section>
    </div>
  );
}
