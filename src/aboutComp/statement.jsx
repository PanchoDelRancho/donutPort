import { MdPrecisionManufacturing } from "react-icons/md";
import { GiTechnoHeart } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
export default function Statement() {
  return (
    <div style={{ backgroundColor: "rgb(11, 26, 25)" }} className="info">
      <div className="infoContainer">
        <div style={{ color: "#95cd9e" }} className="infoBorder">
          After spending years in the manufacturing industry, I decided to dive
          headfirst into the exciting world of web development. I discovered my
          true passion for coding and solving problems using software. Learning
          has become my addiction, and I'm always seeking new opportunities to
          enhance my skills.
        </div>
        <div>
          <MdPrecisionManufacturing
            size="170px"
            color="#d2faf2"
            style={{ margin: "2rem" }}
          />
        </div>
      </div>
      <div className="infoContainer">
        <div>
          <GiTechnoHeart
            size="170px"
            color="#d2faf2"
            style={{ margin: "2rem" }}
          />
        </div>
        <div style={{ color: "#e2e4a6" }} className="infoBorder">
          I'm here to bring a touch of innovation to your company through my web
          solutions. With a keen eye for detail and a knack for problem-solving,
          I create seamless digital experiences that leave a lasting impact.
        </div>
      </div>
      <div className="infoContainer">
        <div style={{ color: "#95cd9e" }} className="infoBorder">
          Let's team up and create something extraordinary. Together, we'll
          achieve remarkable results and take your company to new heights.
        </div>
        <div>
          <FaHandshake
            size="170px"
            color="#d2faf2"
            style={{ margin: "2rem" }}
          />
        </div>
      </div>
    </div>
  );
}
