import menue from "../assets/menue.svg";
import profile from "../assets/profile.svg";
import xp from "../assets/xp.svg";
import fire from "../assets/fire.svg";
import courses from "../assets/courses.svg";
import time from "../assets/time.svg";
import arrow from "../assets/arrow.svg";
import todo from "../assets/todo.svg";
import secarrow from "../assets/arrow2.svg";

export default function Home() {
  return (
    <div className="bg-[#F9F9FF] mb-4">
      <div className="px-6 py-4 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-3">
            <img src={menue} alt="" />
            <h1 className="font-inter text-[24px] font-semibold leading-8 tracking-[-1.2px] text-[#4C1D95]">
              CourseMap
            </h1>
          </div>
          <img src={profile} alt="" />
        </div>
      </div>
      <div className="py-4 px-6">
        <div className="mb-8">
          <div className="flex flex-col gap-1">
            <p className="font-inter text-[12px]  leading-4 tracking-[1.8px] text-[#4A4452]">
              WELCOME BACK
            </p>
            <h1 className="font-manrope text-[31px] font-extrabold leading-9 tracking-[-0.75px] text-[#141B2B]">
              Good morning, Alex
            </h1>
          </div>
        </div>
        <div className="flex flex-row gap-3 w-full mb-8">
          <div className="h-22.25 rounded-2xl w-full p-4 bg-[#F1F3FF] flex flex-col justify-center items-center">
            <img className="pb-1" src={xp} alt="" />
            <p className="font-inter text-[18px]  leading-4.5 tracking-normal text-[#141B2B]">
              1,240
            </p>
            <p className="font-inter text-[10px]  leading-3.75 tracking-[0.5px] text-[#4A4452]">
              XP
            </p>
          </div>
          <div className="h-22.25 rounded-2xl w-full p-4 bg-[#F1F3FF] flex flex-col justify-center items-center">
            <img className="pb-1" src={fire} alt="" />
            <p className="font-inter text-[18px]  leading-4.5 tracking-normal text-[#141B2B]">
              12
            </p>
            <p className="font-inter text-[10px]  leading-3.75 tracking-[0.5px] text-[#4A4452]">
              STREAK
            </p>
          </div>
          <div className="h-22.25 rounded-2xl w-full p-4 bg-[#F1F3FF] flex flex-col justify-center items-center">
            <img className="pb-1" src={courses} alt="" />
            <p className="font-inter text-[18px]  leading-4.5 tracking-normal text-[#141B2B]">
              4
            </p>
            <p className="font-inter text-[10px]  leading-3.75 tracking-[0.5px] text-[#4A4452]">
              COURSES
            </p>
          </div>
        </div>
        <div className="mb-8">
          <div className="flex flex-row justify-between items-center">
            <p className="font-manrope text-[20px] font-bold leading-7 tracking-[0.5px] text-[#141B2B]">
              Active Course
            </p>
            <p className="font-inter text-[14px] font-semibold leading-5 tracking-normal text-[#712AE2]">
              View all
            </p>
          </div>
          <div className="mt-4 bg-[#FFFF] rounded-3xl p-6 pb-2 shadow-[0px_4px_24px_rgba(52,0,117,0.06)]">
            <div className="flex flex-row justify-between mb-6">
              <div className="div">
                <p className="font-manrope text-[24px] font-bold leading-7.5 tracking-normal text-[#141B2B]">
                  Applied Mechanics
                </p>
                <p className="font-inter text-[14px] font-medium leading-5 tracking-normal text-[#4A4452]">
                  Mechanical Engineering Dept.
                </p>
              </div>
              <button className="bg-[#EADDFF] h-5.75 font-inter text-[10px] font-semibold leading-3.75 tracking-[1px] px-3 rounded-full text-[#5A00C6]">
                CORE
              </button>
            </div>
            <div className="mb-6">
              <div className="flex flex-row justify-between">
                <p className="font-inter text-[14px] font-semibold leading-5 tracking-normal text-[#141B2B]">
                  Week 3 of 15
                </p>
                <p className="font-inter text-[14px] leading-5 tracking-normal text-[#4A4452]">
                  45% Complete
                </p>
              </div>
              <div className="my-6 w-full bg-[#E9EDFF] h-3 rounded-full">
                <div className="bg-linear-to-r from-[#712AE2] to-[#340075] w-[45%] h-3 rounded-full"></div>
              </div>
              <div className="flex flex-row gap-2">
                <img src={time} alt="" />
                <p className="font-inter text-[12px] leading-4 tracking-normal text-[#4A4452]">
                  Last studied: Oct 24, 2023
                </p>
              </div>
            </div>
            <button
              className="mt-6 h-15 flex flex-row gap-2 justify-center items-center rounded-xl w-full mb-4 bg-linear-to-r from-[#4C1D95] to-[#340075]"
            >
              <p className="font-inter text-[18px] font-semibold text-white">
                Continue Learning
              </p>
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
        <div className="div">
          <h1 className="font-manrope text-[20px] leading-7 tracking-[-0.5px] font-bold text-[#141B2B] mb-4">Upcoming Due</h1>
          <div className="bg-[#F1F3FF] h-20 rounded-2xl flex flex-row px-4 gap-4 justify-center items-center">
            <img src={todo} alt="" />
            <div className="div w-full">
              <p className="font-inter  font-semibold text-[14px] leading-5  text-[#141B2B]">Static Equilibrium Quiz</p>
              <p className="font-inter text-[12px] leading-4  text-[#4A4452]">Due tomorrow, 11:59 PM</p>
            </div>
            <img src={secarrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
