import React from "react";
import Logo from "../images/Logo.png";
import Profil from '../images/image1.png';
import Banimg from '../images/image2.png';


const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="left">
          <div className="logo">
            <img src={Logo} alt="404" />
          </div>
          <div className="navigation">
            <a href="#">Home</a>

            <a href="#">About</a>

            <a href="#">pricing</a>

            <a href="#">Blog</a>

            <a href="#">Faq</a>

            <a href="#">contact</a>
          </div>
        </div>
        <div className="right">
          <button>Purchase template</button>
        </div>
      </div>
      <div className="banner">
        <div className="left">
          <h1>Digital Marketing. <br /> Creative Design.</h1>
          <p>"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do."</p>
          <div className="profil">
            <img src={Profil}/>
            <div className="proab">
              <h4>Samantha Norton</h4>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
              <button className="btn2">Get started now</button>
        </div>
        <div className="right">
          <img src={Banimg} />
        </div>
      </div>

    </div>
  );
};

export default Header;
