import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";




const SupportedPlatforms = () => {

  return (
    <div className="supported-platforms-container">
      <h2 className="supported-platforms-title title">Supported Platforms</h2>

      <div className="platform-icons">
        <FaFacebookSquare className="social-icons" /><FaInstagram className="social-icons" />
        <FaLinkedin className="social-icons" />
        <FaTwitter className="social-icons" />
      </div>
    </div>
  )
}

export default SupportedPlatforms;