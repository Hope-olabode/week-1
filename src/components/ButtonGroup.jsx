import { useState } from "react";
import home from "../assets/home.svg"
import inhome from "../assets/inhome.svg"
import navcourses from "../assets/navcourses.svg"
import innavcourses from "../assets/innavcourses.svg"
import explore from "../assets/explore.svg"
import inexplore from "../assets/inexplore.svg"
import board from "../assets/board.svg"
import inboard from "../assets/inboard.svg"
import navprofile from "../assets/navprofile.svg"
import innavprofile from "../assets/innavprofile.svg"

function ButtonGroup() {
  const [active, setActive] = useState(0);

  const buttons = [
    { text: "HOME", img1: home, img2: inhome },
    { text: "COURSES", img1: navcourses, img2: innavcourses },
    { text: "EXPLORE", img1: explore, img2: inexplore },
    { text: "BOARD", img1: board, img2: inboard },
    { text: "PROFILE", img1: navprofile, img2: innavprofile },
  ];

  return (
    <div className="flex gap-3 justify-center items-center">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className={`px-3 flex flex-col justify-center items-center gap-1 py-2 rounded-lg font-inter font-medium text-[11px] leading-[16.5px] tracking-[0.28px] transition-all duration-200 
          ${
            active === index
              ? "bg-[#EDE9FE] text-[#4C1D95]"
              : "hover:bg-[#F8FAFC] text-[#94A3B8]"
          }`}
        >
          <img src={active === index ? button.img1:button.img2} alt="" />
          {button.text}
        </button>
      ))}
    </div>
  );
}

export default ButtonGroup;
