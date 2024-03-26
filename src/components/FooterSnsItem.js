import React from "react";
import facebookImg from "../assets/sns_facebook.png";
import twitterImg from "../assets/sns_twitter.png";
import youtubeImg from "../assets/sns_youtube.png";
import instagramImg from "../assets/sns_instagram.png";

const imgList = [facebookImg, twitterImg, youtubeImg, instagramImg];

export default function FooterSnsItem({ id, name, url }) {
  return (
    <li className='footer__sns-li'>
      <a
        className='footer__sns-link'
        href={url}
        target='_blank'
        rel='noreferrer'
      >
        <img src={imgList[id - 1]} alt={name} />
      </a>
    </li>
  );
}
