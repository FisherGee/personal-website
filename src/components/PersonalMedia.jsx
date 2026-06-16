import Card from "./Card.jsx";
import profileImg from "../assets/profile.jpg";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { BsFilePdfFill } from "react-icons/bs";
function PersonalMedia() {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <Card className="w-18 h-18 shadow-none border-none hover:scale-130 hover:border-none p-0 overflow-hidden">
        <img src={profileImg} className="scale-200" alt="profile"></img>
      </Card>
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl ">Riley Ngi</h1>
        <h2 className="text-1xl font-normal">
          Financial Analyst & Junior Developer
        </h2>
        <h3 className="text-xs font-extralight">Toronto ON, Canada</h3>
      </div>
      <a
        className=" ml-auto"
        href="https://www.linkedin.com/in/riley-ngi-17a5401a0/"
        target="_blank"
      >
        <Card className="w-12 h-12 shadow-none hover:scale-120 border-none p-0 overflow-hidden flex justify-center items-center">
          <FaLinkedin className="scale-350 text-accent/70"></FaLinkedin>
        </Card>
      </a>
      <a href="https://github.com/FisherGee" target="_blank">
        <Card className="w-12 h-12 shadow-none hover:scale-120 border-none p-0 overflow-hidden flex justify-center items-center">
          <FaGithubSquare className="scale-350 text-accent/70"></FaGithubSquare>
        </Card>
      </a>
      <a
        href="https://docs.google.com/document/d/14J-0ogAY2GBKxkamSpQNMsQa6Ekafug7/edit?usp=sharing&ouid=100798317996206808386&rtpof=true&sd=true"
        target="_blank"
      >
        <Card className="w-12 h-12 shadow-none hover:scale-120 border-none p-0 overflow-hidden flex justify-center items-center">
          <BsFilePdfFill className="scale-390 text-accent/70"></BsFilePdfFill>
        </Card>
      </a>
    </div>
  );
}

export default PersonalMedia;
