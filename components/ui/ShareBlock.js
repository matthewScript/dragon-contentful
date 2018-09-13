import { FaFacebook, FaInstagram, FaTumblr, FaTwitter } from 'react-icons/lib/fa/';

const SocialLinks = ({id}) => (
  <div id="share-block">
    <input type="checkbox" className="checkbox" id="share" />
    <label htmlFor="share" className="label"><img src="/static/share.png" alt="Share" className="img-responsive share-video" /></label>
    <div className="share-block-social" style={{opacity: 1}}>
      <ul className="share-block-ul">
          <a href={`http://www.twitter.com/share?url=http://www.thedragonprince.com/article?eid=${id}`} target="_blank">
            <li className="entypo-twitter">
                <FaTwitter size={24} />
            </li>
          </a>
          <a href={`http://www.facebook.com/sharer.php?u=http://d3kcvjh58zhu9q.cloudfront.net/article?eid=${id}`} target="_blank">
            <li className="entypo-facebook">
                <FaFacebook size={24} />
            </li>
          </a>
          <a href={`http://www.tumblr.com/share/link?url=http://www.thedragonprince.com/article?eid=${id}`} target="_blank">
            <li className="entypo-tumblr">
                <FaTumblr size={24} />
            </li>
          </a>
      </ul>
    </div>      
  </div>
)

export default SocialLinks