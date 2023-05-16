import {
  SiJavascript,
  SiMongodb,
  SiNeovim,
  SiIos,
  SiChakraui,
  SiMui,
  SiAdobephotoshop,
} from "react-icons/si";
import { BsFiletypeHtml, BsFiletypeCss, BsFiletypeScss } from "react-icons/bs";
import {
  FaNodeJs,
  FaReact,
  FaGit,
  FaNpm,
  FaBootstrap,
  FaLinux,
} from "react-icons/fa";
import {
  TbBrandNextjs,
  TbApi,
  TbBrandVscode,
  TbBrandReactNative,
} from "react-icons/tb";
import { AiFillAndroid } from "react-icons/ai";

export default function Skills() {
  return (
    <div className="skillSec">
      <div className="skillTitle">Skills</div>
      <div className="skillIconContainer">
        <BsFiletypeHtml className="skillIcon" />
        <BsFiletypeCss className="skillIcon" />
        <BsFiletypeScss className="skillIcon" />{" "}
        <FaNodeJs className="skillIcon" />
        <SiMongodb className="skillIcon" />
        <TbApi className="skillIcon" />
        <FaNpm className="skillIcon" />
        <FaGit className="skillIcon" />
        <FaReact className="skillIcon" />
        <TbBrandNextjs className="skillIcon" />
        <TbBrandReactNative className="skillIcon" />
        <SiIos className="skillIcon" />
        <AiFillAndroid className="skillIcon" />
        <FaBootstrap className="skillIcon" />
        <SiChakraui className="skillIcon" />
        <SiMui className="skillIcon" />
        <SiAdobephotoshop className="skillIcon" />
        <FaLinux className="skillIcon" />
      </div>
    </div>
  );
}
