import "./styles/Footer.css"
import * as Fa from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="footer-title">AllStore</h2>
          <p className="footer-description">
            Bienvenue chez AllSore, votre
          </p>
          <p className="footer-description des">
            destination en ligne pour les
          </p>
          <p className="footer-description des">
            meilleurs produits.
          </p>
          <div className="footer-contact">
            <span><Fa.FaPhoneAlt/> +237 678 293 263 </span>
            <span><Fa.FaMailBulk/> ntye.nina@gmail.com</span>
          </div>
          <div className="footer-socials">
            <Fa.FaFacebook className="socials"/>
            <Fa.FaInstagram className="socials"/>
            <Fa.FaTwitter className="socials"/>
            <Fa.FaYoutube className="socials"/>
          </div>
        </div>
        <div className="footer-section">
          <h2 className="footer-title">Liens utiles</h2>
          <ul className="footer-links">
          <li><a href="#">Accueil</a></li>
            <li><a href="#">À propos</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2 className="footer-title">Newsletter</h2>
          <form className="footer-form">
            <input type="email" className="footer-input" placeholder="Votre adresse email..." />
            <button type="submit" className="footer-button">S'abonner</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        @GI 2026 | Ecom-website | AllStore
      </div>
    </div>
  )
}

export default Footer