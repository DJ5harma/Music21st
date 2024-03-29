import "./Nav.css";
import youtubeLogo from "../assets/youtube-logo.svg";
import instagramLogo from "../assets/instagram-logo.svg";
import facebookLogo from "../assets/facebook-logo.svg";
import notificationSound from "../assets/notification-sound.mp3";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const ntfSound = new Audio(notificationSound);
  function playSound() {
    ntfSound.pause();
    ntfSound.play();
  }

  const [showOtherChannels, setShowOtherChannels] = useState(false);
  function handleShowOtherChannels() {
    setShowOtherChannels(!showOtherChannels);
  }

  return (
    <>
      {showOtherChannels && (
        <div id="other-channels-div" onClick={handleShowOtherChannels}>
          <a
            href="https://www.youtube.com/channel/UC5rrdDgRP8Jq5JfoDrRWQGQ"
            target="_blank"
          >
            <div className="channel-div">
              <h1>Sanatan Music:</h1>
              <img
                src="https://yt3.googleusercontent.com/i6FVtyxHzcSHWxXV7zrIafNnTi84Qtq9kPPHJS07bdmHCnp4w4IsjdcczQ_paXTY5ZtSG_Uufw=s176-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
          </a>
          <a href="https://www.youtube.com/@sudhirsharma7586" target="_blank">
            <div className="channel-div">
              <h1>Sudhir Sharma: </h1>
              <img
                src="https://yt3.googleusercontent.com/qb7pdUODXupZCgmVMvBFHryOBArRRGImVlAQflrRCe0zEZprMDgoi9xz_RXO5b2OJCFUWciX=s176-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
          </a>
          <p
            style={{ backgroundColor: "black", padding: 10, borderRadius: 10 }}
          >
            Click anywhere else on the screen to go back...
          </p>
        </div>
      )}
      {/* <img id="bg-img" src={bgImg} alt="" /> */}
      <nav id="top-nav">
        <div className="nav-div" onClick={playSound}>
          <h2>Get your Instrument!</h2>
          <p>We'll help you!</p>
        </div>
        <div id="logos">
          <a
            href="mailto:muzic21st@gmail.com"
            style={{
              height: 25,
              color: "black",
              backgroundColor: "white",
              padding: "0 10px",
              borderRadius: 20,
              textDecoration: "none",
            }}
          >
            E-mail
          </a>
          <h1 id="channel-name">Music 21st</h1>
          <a href="https://www.youtube.com/@Music21st">
            <img src={youtubeLogo} alt="" width={30} />
          </a>
          <a href="https://www.facebook.com/SudhirHarmony?utm_source=you%20tube%20description">
            <img src={facebookLogo} alt="" width={30} />
          </a>
          <img src={instagramLogo} alt="" width={30} />
        </div>
        <div className="nav-div">
          <h2>Want your Song Recorded?</h2>
          <p>We'll arrange, mix and master!</p>
        </div>
      </nav>
      <nav id="left-nav">
        <p>
          <Link to={"/home"}>Home</Link>
        </p>
        <p>Support us!</p>
        <p>Be a Member!</p>
        <p>
          <a
            href="https://www.youtube.com/@Music21st/playlists"
            target="_blank"
          >
            Our Playlists
          </a>
        </p>
        <p onClick={handleShowOtherChannels}>Other channels</p>
        <p>
          <Link to={"/about"}>About</Link>
        </p>
        {/* <p>Sample</p>
        <p>Sample</p> */}
        {/* <p>Sample</p> */}
      </nav>
      <nav id="right-nav">
        <p>
          <Link to={"/ssp"}>Ssp</Link>
        </p>
        <p>Support us!</p>
        <p>Be a Member!</p>
        <p>
          <a
            href="https://www.youtube.com/@Music21st/playlists"
            target="_blank"
          >
            Our Playlists
          </a>
        </p>
        <p onClick={handleShowOtherChannels}>Other channels</p>
        <p>
          <Link to={"/about"}>About</Link>
        </p>
        {/* <p>Sample</p>
        <p>Sample</p> */}
        {/* <p>Sample</p> */}
      </nav>
    </>
  );
};

export default Nav;
