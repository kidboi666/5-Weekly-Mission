import React from "react";
import "./Footer.css";
import FooterSnsItem from "./FooterSnsItem";
import { Link } from "react-router-dom";

const snsList = [
  {
    id: 1,
    name: "facebook",
    url: "https://www.facebook.com/",
  },
  {
    id: 2,
    name: "twitter",
    url: "https://twitter.com/",
  },
  {
    id: 3,
    name: "youtube",
    url: "https://www.youtube.com/",
  },
  {
    id: 4,
    name: "instagram",
    url: "https://www.instagram.com/",
  },
];

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__inner'>
        <p className='footer__address'>©codeit - 2023</p>
        <ul className='footer__nav'>
          <li className='footer__nav-li'>
            <Link to='/privacy'>Privacy Policy</Link>
          </li>
          <li className='footer__nav-li'>
            <Link to='/faq'>FAQ</Link>
          </li>
        </ul>
        <ul className='footer__sns'>
          {snsList.map((item) => (
            <FooterSnsItem
              key={item.id}
              id={item.id}
              name={item.name}
              url={item.url}
            />
          ))}
        </ul>
      </div>
    </footer>
  );
}
