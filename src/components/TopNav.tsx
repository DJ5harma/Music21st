const TopNav = () => {
  return (
    <nav
      id="top-nav"
      className="flex w-screen border-2 justify-around items-center fixed"
    >
      <div className="flex flex-col items-center bg-black px-5 py-2 rounded-2xl">
        <h2>Get your Instrument!</h2>
        <p>We'll help you!</p>
      </div>
      <div className="flex justify-around items-center w-4/12 h-16 border-2 rounded-3xl bg-black px-4">
        <a href="mailto:muzic21st@gmail.com">E-mail</a>
        <h1 className="text-3xl">Music 21st</h1>
        <a href="https://www.youtube.com/@Music21st">
          <img src={"youtube-logo.svg"} alt="" width={30} />
        </a>
        <a href="https://www.facebook.com/SudhirHarmony?utm_source=you%20tube%20description">
          <img src="facebook-logo.svg" alt="" width={30} />
        </a>
        <img src={"instagram-logo.svg"} alt="" width={30} />
      </div>
      <div className="flex flex-col items-center bg-black px-5 py-2 rounded-2xl">
        <h2>Want your Song Recorded?</h2>
        <p>We'll arrange, mix and master!</p>
      </div>
    </nav>
  );
};

export default TopNav;
