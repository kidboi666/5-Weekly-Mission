import React from 'react';
import facebookImg from '../../src/images/sns_facebook.png';
import twitterImg from '../../src/images/sns_twitter.png';
import youtubeImg from '../../src/images/sns_youtube.png';
import instagramImg from '../../src/images/sns_instagram.png';
import Link from 'next/link';

const imgList = [facebookImg, twitterImg, youtubeImg, instagramImg];

interface Props {
  id: number;
  name: string;
  url: string;
}

export default function FooterSnsItem({ id, name, url }: Props) {
  return (
    <li>
      <Link href={url} target='_blank' rel='noreferrer'>
        <img src={imgList[id - 1]} alt={name} />
      </Link>
    </li>
  );
}
