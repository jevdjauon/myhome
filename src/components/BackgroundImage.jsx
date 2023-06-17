import "../styles/backgroundImage.scss";

const imgUrl = "https://source.unsplash.com/featured/1920x1080";

const BackgroundImage = () => {
  return (
    <div className="bg-container">
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>
    </div>
  );
};

export default BackgroundImage;
