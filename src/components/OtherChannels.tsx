const OtherChannels = () => {
  return (
    <>
      <div
        className="w-screen absolute flex flex-col items-center"
        style={{ top: "25vh" }}
      >
        <a
          href="https://www.youtube.com/channel/UC5rrdDgRP8Jq5JfoDrRWQGQ"
          target="_blank"
        >
          <div className="flex items-center border-4 w-96 justify-around">
            <h1>Sanatan Music:</h1>
            <img
              src="https://yt3.googleusercontent.com/i6FVtyxHzcSHWxXV7zrIafNnTi84Qtq9kPPHJS07bdmHCnp4w4IsjdcczQ_paXTY5ZtSG_Uufw=s176-c-k-c0x00ffffff-no-rj"
              alt=""
            />
          </div>
        </a>
        <a href="https://www.youtube.com/@sudhirsharma7586" target="_blank">
          <div className="flex items-center border-4 w-96 justify-around">
            <h1>Sudhir Sharma: </h1>
            <img
              src="https://yt3.googleusercontent.com/qb7pdUODXupZCgmVMvBFHryOBArRRGImVlAQflrRCe0zEZprMDgoi9xz_RXO5b2OJCFUWciX=s176-c-k-c0x00ffffff-no-rj"
              alt=""
            />
          </div>
        </a>
        <span
          style={{ backgroundColor: "black", padding: 10, borderRadius: 10 }}
        >
          Click anywhere else on the screen to go back...
        </span>
      </div>
    </>
  );
};

export default OtherChannels;
