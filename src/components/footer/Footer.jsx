import React from "react";
import "./footer.css";
import benefitsSvg from "../../assets/Mask_Group.svg";
import logo from "../../assets/logo.png";

import facebookIcon from "../../assets/icons/socialMediaIcons/facebook.png";
import instgramIcon from "../../assets/icons/socialMediaIcons/instagram.png";
import twitterIcon from "../../assets/icons/socialMediaIcons/twitter.png";
import youtubeIcon from "../../assets/icons/socialMediaIcons/youtube.png";
import ContactUs from "../contact-us/contactUs";
export default function Footer() {
  return (
    <footer>
      <img src={benefitsSvg} />

      <div className="footer-container">

        <ContactUs/>
        {/* <form className="contact-us-form">

          <div className="form-title">
            <h1>تواصل معنا</h1>
          </div>

          <div className="row">

            <div className="form-group">
              <label className="form-label" htmlFor="full_name">
                الاسم الكامل
              </label>

              <input type="text" id="full_name" />

            </div>

            <div className="form-group">

              <label className="form-label" htmlFor="email">
                البريد الاكتروني
              </label>
              
              <input type="email" id="email" />
            </div>
          </div>

          

          <div className="form-group">

            <label htmlFor="message">الرسالة</label>
            <textarea id="message" rows={4}></textarea>

          </div>

          <div className="submit-wrapr">

            <button type="submit" className="contact-us-btn">
              ارسل
            </button>

          </div>

        </form> */}

        <div className="company-info">
          <img src={logo} alt="Company Logo" />
          <p>
            لمعرفة الجديد في التقنية واستخداماتها في الابتكار وريادة الأعمال
            والتحول الرقمي ،، انضم لحساباتنا على شبكات التواصل الاجتماعي
          </p>

          <div className="social-media">
            <img src={facebookIcon} alt="facebook icon" />
            <img src={instgramIcon} alt="instagram icon" />
            <img src={twitterIcon} alt="twitter icon" />
            <img src={youtubeIcon} alt="youtube icon" />
          </div>

        </div>

      </div>

     <div className="copyright">
        <p>جميع الحقوق محفوظة لدى تطبيق قطتنا © 2024</p>
     </div>
    </footer>
  );
}
