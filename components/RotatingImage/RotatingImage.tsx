import "./RotatingImage.css";
const RotatingImage = () => {
  return (
    <div className="scene">
      <div className="cube">
        <div className="cube__face cube__face--front">
          <img src="/mecca1.png" alt="" />
        </div>
        <div className="cube__face cube__face--back">
          <img src="/mecca2.png" alt="" />
        </div>
        <div className="cube__face cube__face--right">
          <img src="/mecca2.png" alt="" />
        </div>
        <div className="cube__face cube__face--left">
          <img src="/mecca2.png" alt="" />
        </div>
        <div className="cube__face cube__face--top">
          <img src="/mecca2.png" alt="" />
        </div>
        <div className="cube__face cube__face--bottom">
          <img src="/mecca2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default RotatingImage;
