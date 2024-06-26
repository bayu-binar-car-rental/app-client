import facebookIcon from "../../../assets/icon_facebook.png";
import instagramIcon from "../../../assets/icon_instagram.png";
import twitterIcon from "../../../assets/icon_twitter.png";
import mailIcon from "../../../assets/icon_mail.png";
import twitchIcon from "../../../assets/icon_twitch.png";
import { useLocation } from "react-router-dom";

const footerIcons = [
  facebookIcon,
  instagramIcon,
  twitterIcon,
  mailIcon,
  twitchIcon,
];

export default function Footer() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <footer
      className={`space-y-4 sm:space-y-0 pb-5 ${
        pathname.includes("/profile") ? "hidden" : "sm:grid grid-cols-4"
      }`}
    >
      {/* Footer */}
      <div className="space-y-3">
        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>
      <div className="flex sm:justify-center">
        <div className="space-y-3 flex flex-col font-medium">
          <a href="/#features">Our Services</a>
          <a href="/#services">Why Us</a>
          <a href="/#testimonial">Testimonial</a>
          <a href="/#faq">FAQ</a>
        </div>
      </div>
      <div className="space-y-3">
        <p>Connect with us</p>
        <div className="flex space-x-3">
          {footerIcons.map((icon, index) => (
            <div key={index}>
              <img src={icon} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="md:flex md:justify-end lg:justify-normal">
        <div className="space-y-3 ">
          <p>Copyright Binar 2022</p>
          <div className="p-5 w-1/3 md:px-10 md:w-0 bg-blue-800" />
        </div>
      </div>
    </footer>
  );
}
