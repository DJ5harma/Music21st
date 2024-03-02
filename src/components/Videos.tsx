// import { useContext, useEffect, useState } from "react";
// import { context } from "../Context";
import data from "../assets/recentVideos.json";
const Videos = () => {
  return (
    data.items.length > 1 && (
      <>
        <h3 className="bg-black rounded-3xl my-2 p-6 text-2xl">Our Recent Uploads: </h3>
        <div className="flex justify-center flex-wrap">
          {data.items.length > 2 &&
            data.items.map((item) => {
              return (
                <a
                  href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
                  key={item.id.videoId}
                  target="_blank"
                  className="w-60 h-35 mx-4 my-2"
                >
                  <div className="flex flex-col items-center mb-2 bg-white rounded-3xl border-2 item">
                    <img
                      src={item.snippet.thumbnails.high.url}
                      alt=""
                      className="rounded-t-3xl"
                    />
                    <p className="px-3 pb-8 pt-4 bg-black rounded-b-3xl w-60 h-28 border-2 m-0.1">
                      {item.snippet.title.slice(0, 50) + "..."}
                    </p>
                  </div>
                </a>
              );
            })}
        </div>
      </>
    )
  );
};

export default Videos;
