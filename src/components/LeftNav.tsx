import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <>
      <div
        id="left-nav"
        className="flex flex-col items-center justify-around w-1/12 fixed"
      >
        <Link to={"./home"}>
          <p>Home</p>
        </Link>
        <Link to={"./popular-videos"}>
          <p>Popular</p>
        </Link>
        <Link to={"./videos"}>
          <p>Videos</p>
        </Link>
        <Link to={"./playlists"}>
          <p>Playlists</p>
        </Link>
      </div>
    </>
  );
};

export default LeftNav;
