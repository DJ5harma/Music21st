import "./Home.css";
import PopVideos from "./PopVideos";
import VidFeed from "./VidFeed";

const Home = () => {
  return (
    <div id="home-container">
      <p className="section-title">Our Recent Uploads : </p>
      <VidFeed />

      <p className="section-title">Our Most Popular Uploads :</p>
      <PopVideos />

      {/* <PopVideos /> */}
      {/* <div id="channel-info-div">
        <img src={channelLogoImg} alt="" />
      </div> */}
    </div>
  );
};

export default Home;
