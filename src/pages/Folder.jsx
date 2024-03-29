import { useState } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import Input from '../components/Input';

function Folder() {
  return (
    <div>
      <Header />
      <div>
        <img className='folder__icon' alt='폴더 아이콘' />
        <p className='folder__user-name'>@코드잇</p>
        <p className='folder__name'>⭐️ 즐겨찾기</p>
      </div>
      <main>
        <Input />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
      <Footer />
    </div>
  );
}

export default Folder;
