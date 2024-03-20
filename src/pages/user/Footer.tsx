import facebookIcon from "../../assets/icon_facebook.png";
import instagramIcon from "../../assets/icon_instagram.png";
import twitterIcon from "../../assets/icon_twitter.png";
import mailIcon from "../../assets/icon_mail.png";
import twitchIcon from "../../assets/icon_twitch.png";

const footerIcons = [
  facebookIcon,
  instagramIcon,
  twitterIcon,
  mailIcon,
  twitchIcon,
];

export default function Footer() {
  return (
    <footer className="grid grid-cols-4 pb-20">
      {/* Footer */}
      <div className="space-y-3">
        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>
      <div className="flex justify-center ">
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
      <div className="space-y-3">
        <p>Copyright Binar 2022</p>
        <div className="p-5 w-1/3 bg-blue-800" />
      </div>
    </footer>
  );
}
