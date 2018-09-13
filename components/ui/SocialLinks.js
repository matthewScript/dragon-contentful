import { FaFacebook, FaInstagram, FaTumblr, FaTwitter } from 'react-icons/lib/fa/';

const SocialLinks = () => (
    <div className="social-links">
        <a target="_blank" className="Twitter" href="https://twitter.com/thedragonprince">
            <FaTwitter size={24} />
        </a>
        <a target="_blank" className="Facebook" href="https://www.facebook.com/dragonprinceofficial">
            <FaFacebook size={24} />
        </a>
        <a target="_blank" className="Tumblr" href="https://dragonprinceofficial.tumblr.com/">
            <FaTumblr size={24} />
        </a>
        <a target="_blank" className="Instagram" href="https://www.instagram.com/dragonprinceofficial/">
            <FaInstagram  size={24} />
        </a>
    </div>
)

export default SocialLinks
