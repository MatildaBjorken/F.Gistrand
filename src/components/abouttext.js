import React from "react"
import ProfileImage from '../images/portrait.jpg'
import ProfileImage2 from '../images/filippa.jpg'

const AboutText = () => {
  return (
    <div className='about-text'>
      <div className="section-header">
        <div className="section-header-container">
          <div className="section-title">about</div>
          <div className="section-order">/002</div>
        </div>
      </div>

      <div className="divider"></div>
      <section className="clients">
        <div className="clients-container">
          <p>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;telia, vizrt, edlund, pensam, mp
            pension, charlie tango, molio, scout.org, pelican selfstorage,
            danske bank, groupcare, banedanmark, samvirke, dsb, kmd, udviklings
            og forenklings
            <br />
          </p>
        </div>
      </section>

          <div class="container-image">
           
            <div class="container-left">
                <div class="lang">en | sv</div>

                <div class="left-img-cap">
                    <span>Creating</span><br />
                    Clothing from skratch
                </div>
                <div class="container-left-img"   style={{ backgroundImage: `url(${ProfileImage2})` }}></div>
                <div class="left-img-btn">View Project</div>
                <div class="left-bottom-text">
                    /Collaborations
                </div>
             
            </div>
            <div class="container-right" style={{ backgroundImage: `url(${ProfileImage})` }}>
                <div class="right-bottom-text">
                    Filippa Gistrand
                </div>
            </div>
        </div>

       

      <div className="whitespace"></div>

      <div className="section-header">
        <div className="section-header-container">
          <div className="section-title">socials</div>
          <div className="section-order">/003</div>
        </div>
      </div>

      <div className="divider"></div>

      <section className="socials">
        <div className="socials-container">
          <div className="socials-id dr">
            <a href="">dribble</a>
          </div>
          <div className="socials-id ln">
            <a href="">linkedin</a>
          </div>
          <div className="socials-id ig">
            <a href="">instagram</a>
          </div>
          <div className="socials-id tw">
            <a href="">twitter</a>
          </div>
        </div>
      </section>
      <div className="divider"></div>
      <div className="footer">
        <div className="navbar">
          <div className="navbar-container">
          </div>
        </div>
      </div>
      <br />
    </div>
  )
}

export default AboutText
