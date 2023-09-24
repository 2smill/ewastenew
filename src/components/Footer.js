import React from "react";
import './Footer.css';

function Footer() {
 
  const footerBackgroundColor = "#335577"; 
  const footerBottomBackgroundColor = "#547c4c"; 

  return (
    <footer>
      <div
        className="bg-dark text-white"
        style={{ backgroundColor: footerBackgroundColor }}
      >
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">Eco-Ecycle</h5>
              <p>
                This E-waste website is a user-friendly and effective website that
                provides cleanliness and accuracy.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    className="text-white text-decoration-none"
                    style={{ fontFamily: 'Franklin Gothic Medium' }}
                  >
                    <i className="fab fa-facebook me-2"></i>Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/"
                    className="text-white text-decoration-none"
                    style={{ fontFamily: 'Franklin Gothic Medium' }}
                  >
                    <i className="fab fa-github me-2"></i>GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/home"
                    className="text-white text-decoration-none"
                    style={{ fontFamily: 'Franklin Gothic Medium' }}
                  >
                    <i className="fab fa-twitter me-2"></i>Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer
        className="text-center py-3"
        style={{
          backgroundColor: footerBottomBackgroundColor,
          fontFamily: 'Times New Roman, Times, serif',
          fontSize: '18px',
        }}
      >
        &copy; {new Date().getFullYear()} EcoCycle
      </footer>
    </footer>
  );
}

export default Footer;