import { useEffect, useState } from "react";
import "./Videos.css";
import youtubeLogo from "../assets/youtube-logo.svg";

const VidFeed = () => {
  const [data, setData] = useState({
    items: [{ url: "", title: "" }],
    description: "",
  });
  useEffect(() => {
    fetch("https://rss.app/feeds/v1.1/YUXdsMkNwYM2QxSE.json")
      .then((res) => res.json())
      .then((DATA) => setData(DATA))
      .then(() => {
        console.log(data);
      });
  }, []);

  console.log("Worksss");
  
  return (
    <>
      {data.items.length >= 2 && (
        <div id="vid-feed-container">
          <div className="video-div" style={{width: "82vw"}}>
            <iframe
              className="video"
              src={"https://www.youtube.com/embed/" + data.items[0].url.slice(32)}
              title={data.items[0].title}
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
              <span className="vid-title" style={{fontSize: 30}}>
                {data.items[0].title}
                <br />
                {/* <br /> */}
                <a href={data.items[0].url} target="_blank">
                  Watch on YouTube <img src={youtubeLogo} alt="" width={30} />
                </a>
              </span>
          </div>
          {data.items.slice(1).map((item) => (
            <div className="video-div">
              <iframe
                className="video"
                src={"https://www.youtube.com/embed/" + item.url.slice(32)}
                title={item.title}
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <span className="vid-title">
                {item.title}
                <br />
                {/* <br /> */}
                <a href={item.url} target="_blank">
                  Watch on YouTube <img src={youtubeLogo} alt="" width={30} />
                </a>
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default VidFeed;
