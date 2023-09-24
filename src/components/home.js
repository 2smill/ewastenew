import React from "react";
import Contact from "./Contact";
import Track from "./Track";
import './home.css';
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div id="home" className="container-fluid bodyBg mt-0 mb-5 p-3">
        <div className="container-fluid mrgnt">
          <div className="container-fluid mt-md-5">
            <div className="row">
              <div className="col-md-6 ml-md-5 home-header">
                <h1 className="h4">EcoCycle: Sustaining Tomorrow, Today.</h1>
                <p className="small">
                  "Eco" often refers to an ecological or ecologically beneficial
                  procedure, whereas "Cycle" refers to a circular process or a recurring
                  sequence of occurrences. It most likely refers to a method or technique
                  that focuses on handling electronic garbage (E-waste) in an environmentally sustainable manner.
                </p>
                <a href="#book-now" className="btn home-btn-primary">Donate Now!</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-md-2 mt-4 mb-5 color--white">
        <div className="container-fluid mrgn">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div className="col">
              <div className="card">
                <div className="card-img-top card-image" style={{ backgroundImage: "url('https://i.pinimg.com/originals/3f/b3/b3/3fb3b3a10678aeab48340920f0580a3e.gif')" }}>
                  <div className="card-content">
                    <div className="card-title">
                      <h5>Proper Ewaste Disposal</h5>
                    </div>
                    <div className="card-paragraph">
                      <p>Proper recycling of "e-waste" can help conserve our natural resources.</p>
                    </div>
                    <div className="card-button">
                      <a href="https://sustainability.yale.edu/blog/how-sustainably-dispose-your-technological-waste" className="btn btn-outline-secondary colorwht">
                        Read More!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-img-top card-image" style={{ backgroundImage: "url('https://i.pinimg.com/originals/b6/88/f4/b688f47cab64d02ddc69204b7c6ce5a2.gif')" }}>
                  <div className="card-content">
                    <div className="card-title">
                      <h5>Good Ways of Recycling</h5>
                    </div>
                    <div className="card-paragraph">
                      <p>Recycling is one of the easiest, productive ways that you can contribute.</p>
                    </div>
                    <div className="card-button">
                      <a href="https://www.wikihow.com/Recycle" className="btn btn-outline-secondary colorwht">
                        Read More!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-img-top card-image" style={{ backgroundImage: "url('https://i.pinimg.com/originals/f1/84/51/f18451a55a0e767d3c0e1e25a0bcff27.gif')" }}>
                  <div className="card-content">
                    <div className="card-title">
                      <h5>Wrong Waste Disposal</h5>
                    </div>
                    <div className="card-paragraph">
                      <p>Improper e-waste disposal is one of the major environmental problems.</p>
                    </div>
                    <div className="card-button">
                      <a href="https://mb.com.ph/2022/04/06/how-to-manage-e-waste-bring-to-a-treatment-storage-and-disposal-facility/" className="btn btn-outline-secondary colorwht">
                        Read More!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Track />
      <Contact />
      <Footer/>

    </>
  );
}

export default Home