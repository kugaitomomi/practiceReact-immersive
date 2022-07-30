import React from 'react';
import './reset.css';
import './style.css';
import key1 from './images/corp_apple.png';
import key2 from './images/corp_google.png';
import key3 from './images/corp_twitter.png';
import key4 from './images/corp_meta.png';
import key5 from './images/corp_line.png';
import key6 from './images/corp_microsoft.png';
import key7 from './images/corp_netflix.png';
import key8 from './images/corp_nascar.png';
import key9 from './images/corp_sony.png';
import key10 from './images/corp_myspace.png';
import key11 from './images/corp_smbc.png';
import key12 from './images/corp_spacex.png';
  const logos = [{key: key1, logoName: "apple"}, {key: key2, logoName: "google"}, {key: key3, logoName: "twitter"}, {key: key4, logoName: "meta"}, {key: key5, logoName: "line"}, {key: key6, logoName: "microsoft"}, {key: key7, logoName: "netflix"}, {key: key8, logoName: "nascar"}, {key: key9, logoName: "sony"}, {key: key10, logoName: "myspace"}, {key: key11, logoName: "smbc"}, {key: key12, logoName: "spacex"}];
const Logo = props => {
  return (
  <div className="subArea">
  <section className="logoArea">
    <div>
      <p className="text">Our employees and business partners have used products and services from many companies. For
        example:</p>
      <ul>
        { logos.map((logo, index) => (
           <li key = { index }><img src={ logo.key } alt={ logo.logoName }  /></li>
        ))}
      </ul>
    </div>
  </section>
  </div>

  )
}
export default Logo;