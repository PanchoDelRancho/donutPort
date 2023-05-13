import { VscMail, VscGithub } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
export default function Contact() {
  return (
    <div id="contact" className="skillSec">
      <div className="skillTitle">Contact</div>
      <div className="goodbye">
        I, Francisco A., would like to express my gratitude for taking the time
        to view my portfolio. If you believe that I would be a great fit for
        your company, please don't hesitate to reach out to me using any of the
        links provided below. Have a wonderful day! :D{" "}
      </div>
      <div>
        <a href="mailto:faparicio.fa@gmail.com" className="button">
          <VscMail className="contactIcon " />
        </a>
        <a
          href="https://www.linkedin.com/in/francisco-a-78ba8811a/"
          className="button"
        >
          <AiFillLinkedin className="contactIcon " />
        </a>
        <a href="https://github.com/PanchoDelRancho" className="button">
          <VscGithub className="contactIcon " />
        </a>
      </div>
    </div>
  );
}
