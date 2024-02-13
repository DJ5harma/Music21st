import "./Home.css";
import PopVideos from "./PopVideos";

import channelLogoImg from "../assets/channels_profile.jpg";

const Home = () => {
  return (
    <div id="home-container">
      <h3 className="section-title">Our Most Popular Videos : </h3>
      <PopVideos />
      <div id="channel-info-div">
        <img src={channelLogoImg} alt="" />
        <p>
          The aim of this channel is to provide all the necessary guidance to
          all the music learners and lovers , to release new songs by promising
          singers in all category of music, uploading database of easy learning
          videos of various technical aspects on YouTube, to impart knowledge of
          various music instruments , to offer initial training and basic
          lessons of all the popular instruments to all age group people online,
          to render some studio tips for learning Studio Recording and all the
          affiliated tasks; to open new career aspects in professional field of
          music and to supply counseling for parents in the career making of
          students etc.
        </p>
      </div>
    </div>
  );
};

export default Home;
