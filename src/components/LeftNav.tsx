import { useState } from "react";
import OtherChannels from "./OtherChannels";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [otherChannels, setOtherChannels] = useState(false);
  function handleOtherChannels() {
    setOtherChannels(!otherChannels);
  }
  return (
    <>
      <div
        id="left-nav"
        className="flex flex-col items-center justify-around w-1/12 fixed"
      >
        <p>
          <Link to={"./home"}>Home</Link>
        </p>
        <p>
          <Link to={"./popular-videos"}>Popular</Link>
        </p>
        <p>
          <Link to={"./videos"}>Videos</Link>
        </p>
        <p>
          <Link to={"./playlists"}>Playlists</Link>
        </p>
        <p onClick={handleOtherChannels}>Channels</p>
      </div>
        {otherChannels && (
          <div className="z-2 w-screen h-screen" style={{backgroundColor: "rgba(0,0,0,0.5)"}} onClick={handleOtherChannels}>
            <OtherChannels />
          </div>
        )}
    </>
  );
};

export default LeftNav;
