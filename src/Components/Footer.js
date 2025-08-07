import React from 'react';
import '../Footer.css'; // External CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p><i class="bi bi-envelope-at-fill"></i> <a style={{color:"white"}} href="mailto:mboumbamelcki@gmail.com">mboumbamelcki@gmail.com</a></p>
      <p>Copyright© 2025 Portfolio</p>

      <div class="footer-links">
        <a className='white' href="https://github.com/Melcki"><i  class="bi bi-github"></i></a>
        <a className='white' href="https://www.linkedin.com/in/junior-melcki-mboumba-moussavou-b21433218/"><i class="bi bi-linkedin"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
