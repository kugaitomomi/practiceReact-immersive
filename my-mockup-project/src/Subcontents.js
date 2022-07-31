import React from 'react';
import './reset.css';
import './style.css';
import uc_ent from './images/uc_ent.jpg';
import uc_smb from './images/uc_smb.jpg';
import uc_edu from './images/uc_edu.jpg';
import uc_web3 from './images/uc_web3.jpg';
import uc_space from './images/uc_space.jpg';
  const photos = [
    {businessPhoto: uc_ent, title: "Ferrets Enterprise Edition", text: "This one has a little phone. To whom is he speaking? Wouldn't you love to know."}, 
    {businessPhoto: uc_smb, title: "Ferrets for Small and Medium Business", text: "RAAAAAAAA!"},
    {businessPhoto: uc_edu, title: "Ferrets for EDU", text: "Look at this guy.He's got like a wig and everything. That erlenmeyer flask is almost as big as he is."},
    {businessPhoto: uc_web3, title: `Ferret3: Ferritification of the Web3 space`, text: "We're not sure what Web3 is, but neither are your customers. So it's for all of us to decide what this means. And for us, it means Ferrets."},
    {businessPhoto: uc_space, title: "Ferrets in space", text: "We should probably take a moment to point out that result of this HTML/CSS excersise should not go on your resume."}
  ];

const Subcontents = props => {
  return (
  <div className="subArea">
  <section className="containerSec">
    <div className="container">
      <h2>Re-fur-lutionize your business</h2>
      <p className="subText">No matter what your business needs are, we have ferrets for you.</p>
      { photos.map((photo, index) => (
      <article key = { index }>
        <div className="containerIn">
          <div className="containerIn_L">
            <img src={ photo.businessPhoto } alt={ photo.title } />
          </div>
          <div className="containerIn_R">
            <h3>{ photo.title }</h3>
            <p>{ photo.text }</p>
          </div>
        </div>
      </article>
      ))}
    </div>
  </section>
  </div>

  )
}
export default Subcontents;