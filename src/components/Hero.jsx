import robot from "../images/robot.jpeg";
import manTyping from "../images/man-typing.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaSass,
  FaBootstrap,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BsChevronDoubleDown } from "react-icons/bs";

const Hero = () => {
  return (
    <section>
      <div
        className="hero d-flex justify-content-center align-items-center"
        style={{ backgroundImage: `url(${manTyping})` }}
      >
        <div className="hello-card square-box display-4">Hello!</div>

        <div className="whiteVeil"></div>

        <div className="card mb-3 greeting-card">
          <div className="row2 g-0">
            <div className="col-md-8">
              <h5 className="card-title">
                James Penton <br /> React Front End Developer
              </h5>
              <p className="card-text">
                Welcome to my portfolio site! I'm a front end developer based in
                Berkshire, UK. <br />
                <br />I am passionate about building beautiful, responsive
                websites that user love.
              </p>
              <p className="text text-muted">
                Tech Stack: <br />
                <FaHtml5 /> <FaCss3Alt /> <IoLogoJavascript /> <FaReact />
                <FaSass />
                <FaBootstrap />
              </p>
            </div>
            <div className="col-md-4">
              <img
                src={robot}
                className="rounded-start"
                alt="wind up robot in pastel colours"
              />
            </div>
          </div>
          <div className="arrows">
            <a href="#tours">
              <BsChevronDoubleDown />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
