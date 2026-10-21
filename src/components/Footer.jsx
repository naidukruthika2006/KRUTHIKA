import { profileData } from "../data";

const Footer = () => (
  <footer className="site-footer section-wrap">
    <span>© {new Date().getFullYear()} {profileData.name}</span>
    <div className="footer-socials">
      <a href={profileData.github} target="_blank" rel="noreferrer">GitHub</a>
      <a href={profileData.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      <a href={profileData.instagram} target="_blank" rel="noreferrer">Instagram</a>
    </div>
    <span>Made with curiosity <i aria-hidden="true">✳</i></span>
  </footer>
);

export default Footer;
