import facebook from '@/public/facebook.svg';
import twitter from '@/public/twitter.svg';
import youtube from '@/public/youtube.svg';
import instagram from '@/public/instagram.svg';

interface SnsList {
  id: string;
  link: string;
  img: string;
  height: string;
  width: string;
  alt: string;
}

export const snsLists: SnsList[] = [
  {
    id: '페이스북',
    link: 'https://facebook.com/',
    img: facebook,
    height: '20',
    width: '20',
    alt: '페이스북 아이콘',
  },
  {
    id: '트위터',
    link: 'https://twitter.com/',
    img: twitter,
    height: '20',
    width: '20',
    alt: '트위터 아이콘',
  },
  {
    id: '유튜브',
    link: 'https://youtube.com/',
    img: youtube,
    height: '20',
    width: '20',
    alt: '유튜브 아이콘',
  },
  {
    id: '인스타그램',
    link: 'https://instagram.com/',
    img: instagram,
    height: '20',
    width: '20',
    alt: '인스타그램 아이콘',
  },
];
