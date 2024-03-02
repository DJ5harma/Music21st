// import { useContext } from "react";
// import { context } from "../Context";
import data from "../assets/playlists.json";
import icon from "../assets/playlistIcon.png";
const Playlists = () => {
  // const { apiKey, channelID } = useContext(context);
  // fetch(
  //   `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelID}&maxResults=80&key=${apiKey}`
  // );
  return (
    <>
      <h3 className="bg-black rounded-3xl my-2 p-6 text-2xl">
        Our Playlists:{" "}
      </h3>
      {data.items.length > 1 && (
        <div className="flex justify-center flex-wrap">
          {data.items.length > 2 &&
            data.items.map((item) => {
              return (
                <a
                  href={`https://www.youtube.com/playlist?list=${item.id}`}
                  key={item.id}
                  target="_blank"
                  className="w-60 mx-4 my-2"
                >
                  <img
                    src={icon}
                    alt=""
                    className="w-10 m-3 absolute rounded-3xl"
                    style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                  />
                  <div className="flex flex-col items-center my-2 bg-white rounded-3xl border-2 item">
                    <img
                      src={item.snippet.thumbnails.high.url}
                      alt=""
                      className="rounded-t-3xl"
                    />
                    <p className="px-3 pb-8 pt-4 bg-black rounded-b-3xl w-60 h-24 border-2">
                      {item.snippet.title.slice(0, 30) + "..."}
                    </p>
                  </div>
                </a>
              );
            })}
        </div>
      )}
    </>
  );
};

export default Playlists;
