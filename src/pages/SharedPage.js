import React, { useEffect, useState } from "react";
import Search from "../components/utils/Search";
import Card from "../components/Card";
import { getSharedList } from "../api";

export default function SharedPage() {
  const [items, setItems] = useState([]);

  const handleLoad = async () => {
    const nextItems = await getSharedList();
    setItems(nextItems);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <div className='top-box'>
        <div className='profile-box'>
          <img src='' alt='프로필' />
          <p>@코드잇</p>
        </div>
        <h2 className='title'>⭐️ 즐겨찾기</h2>
      </div>
      <section>
        <Search />
        <ul>
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </ul>
      </section>
    </div>
  );
}
