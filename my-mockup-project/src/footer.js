import React from 'react';
import './reset.css';
import './style.css';

const Footer = () => (
  <div className="subArea">
  <footer>
    <div className="ft_content">
      <div className="ft_left">
        <h3>Products</h3>
        <ul>
          <li><a href="#">Actual ferrets</a></li>
          <li><a href="#">Fake ferrets</a></li>
          <li><a href="#">Ferret accesories</a></li>
          <li><a href="#">Ferret college</a></li>
        </ul>
      </div>
      <div className="ft_center">
        <h3>Consultation</h3>
        <ul>
          <li><a href="#">Ferrets for businesses</a></li>
          <li><a href="#">Ferrets for people</a></li>
          <li><a href="#">Ferrets for fun</a></li>
          <li><a href="#">Ferrets for justice</a></li>
          <li><a href="#">Ferrets for ever</a></li>
        </ul>
      </div>
      <div className="ft_right">
        <h3>Company</h3>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Social media</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Legal</a></li>
        </ul>
      </div>
    </div>
    <div className="copyright">Copyright © 2022 Ferret & Holdings</div>
  </footer>
  </div>
  
)

export default Footer;