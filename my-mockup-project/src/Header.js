import React from 'react';
import './reset.css';
import './style.css';

const Header = () => (
  <div>
    <header>
      <div className="header">
          <h1>Ferret & Holdings</h1>
          <nav>
            <ul className="navArea">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Disclaimer</a></li>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Guestbook</a></li>
            </ul>
          </nav>
          <aside>
            <div className="searchArea">
              <input type="search" placeholder="search for meaning..." name="search" aria-label="Search" /><button type="submit">Search</button>
            </div>
          </aside>
      </div>
  </header>
</div>
  
)
export default Header;