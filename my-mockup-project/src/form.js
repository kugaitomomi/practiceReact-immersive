import React from 'react';
import './reset.css';
import './style.css';

const Form = () => (
  <div className="subArea">
  <section>
    <div>
      <div className="contactArea">
      <h3>Contact</h3>
        <form action="">
          <div className="row">
            <label htmlFor="name">
              Name <span className="badge bg-danger">*</span>
            </label>
            <div className="colL">
              <input type="text" name="text" id="name" className="form-control01" placeholder="Hanako Yamada" autoComplete="name" aria-label="entering your name" required />
            </div>
          </div>
          <div className="row">
          <label htmlFor="tel">
            Tel
          </label>
          <div className="colL">
          <input type="tel" name="tel" className="form-control01" id="tel" aria-label="entering your telephone number" placeholder="090-1234-5678" autoComplete="tel" required />
          </div>
          </div>

          <div className="row">
            <label className="col-sm-3 col-form-label">Postal-code <span className="badge bg-danger">*</span></label>
            <div className="colL">
              <input type="text" name="postal-code" aria-label="entering your postal-code" autoComplete="postal-code" className="form-control01" placeholder="560016" />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-form-label col-sm-4">Address</label>
            <div className="colL">
              <input type="text" name="address-level1" autoComplete="address-level1" aria-label="entering your address" className="form-control01" placeholder="Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore" />
            </div>
          </div>

          <div className="row">
            <label className="col-sm-3 col-form-label" htmlFor="email">E-mail <span className="badge bg-danger">*</span></label>
            <div className="colL">
            <input type="email" name="email" id="email" className="form-control01" autoComplete="email" aria-label="entering your email" placeholder="yourname@example.com" required />
            </div>
          </div>

          <div>
            <fieldset>
              <div className="rowIn">
              <legend>Contents of inquiry <span className="badge bg-danger">*</span></legend>

              <div className="colL">
                <div className="select">
                  <label htmlFor="inquiry01">Consulting</label><input type="radio" name="ContentsOfinquiry" value="Consulting" id="inquiry01" required />
                </div>
                <div className="select">
                  <label htmlFor="inquiry02">App development</label><input type="radio" name="ContentsOfinquiry" value="App development" id="inquiry02" />
                </div>
                <div className="select">
                  <label htmlFor="inquiry03">Maintenance operation</label><input type="radio" name="ContentsOfinquiry" value="Maintenance operation" id="inquiry03" />
                </div>
                <div className="select">
                  <label htmlFor="inquiry04">Recruit</label><input type="radio" name="ContentsOfinquiry" value="Recruit" id="inquiry04" />
                </div>
              </div>
              </div>
            </fieldset>
          </div>
          <div className="row">
            <label htmlFor="detailContent">Detail</label>
            <div className="colL">
              <textarea name="detail" id="detailContent" cols="30" rows="10"></textarea>
            </div>
          </div>
        <div className="text-center my-5">
          <button type="submit" className="btn btn-primary" >Submit</button>
        </div>
        </form>
      </div>
    </div>
  </section>
  </div>
  
)

export default Form;