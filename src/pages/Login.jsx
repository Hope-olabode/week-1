import { useState } from "react";

import logo from "../assets/Vector-cropped.svg";
import mail from "../assets/mail.svg";
import pass from "../assets/pass.svg";
import hp from "../assets/HP.svg";
import sp from "../assets/SP.svg";
import arrow from "../assets/arrow.svg";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

function App() {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur", // better UX
  });

  const onSubmit = async (data) => {
    toast.success("Login successful 🚀");

    await new Promise((resolve) => setTimeout(resolve, 1500));
    navigate("/home");
  };

  const onError = (errors) => {
    const firstError = Object.values(errors)[0];
    toast.error(firstError.message);
  };

  return (
    <div className="bg-linear-to-r from-[#4C1D95] to-[#340075] ">
      <Toaster richColors position="top-center" />
      <div className=" flex flex-col justify-end items-center h-49.5 mb-2.25">
        <img className="h-16 w-16 mb-4" src={logo} alt="" />
        <h1 className="font-manrope leading-9 tracking-[-1.5px] text-white font-bold text-[30px]">
          CourseMap
        </h1>
        <p className="font-inter font-medium text-[#B994FF] text-[14px] leading-5 tracking-[0.35] pt-1">
          THE ACADEMIC ATELIER
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="h-161.5 bg-[#F1F3FF] rounded-t-[40px] px-8 pt-12 "
      >
        <div className="pb-10 text-center flex flex-col items-center">
          <p className="font-inter font-semibold text-[#712AE2] leading-[16.5px] tracking-[2.2px] text-[11px]">
            WELCOME BACK
          </p>
          <h1 className="font-manrope mt-2 font-extrabold text-[24px] leading-8 tracking-[-0.6px] text-[#141B2B]">
            Login to your studio
          </h1>
        </div>
        <div className="div">
          <div className="mb-6">
            <p className="font-inter text-[#7B7483] text-[12px] font-semibold leading-4 tracking-[0.6px] mb-2.25">
              EMAIL ADDRESS
            </p>
            <div
              className="bg-white py-4.5 px-4 rounded-xl h-13.75 gap-4 flex flex-row 
                  border border-transparent 
                  focus-within:border-blue-500 
                  transition"
            >
              <img src={mail} alt="" />
              <input
                {...register("email")}
                placeholder="name@university.edu"
                className="w-full outline-none focus:outline-none focus:ring-0 placeholder:text-[#CCC3D4] placeholder:font-inter placeholder:text-[16px] text-[#7B7483]"
                type="text"
              />
            </div>
          </div>
          <div className="div pb-4">
            <div className="flex flex-row justify-between items-center">
              <p className="font-inter text-[#7B7483] text-[12px] font-semibold leading-4 tracking-[0.6px] mb-2.25">
                PASSWORD
              </p>
              <p className="font-inter text-[#8A4CFC] text-[11px] font-semibold leading-[16.5px] mb-2.25">
                Forgot?
              </p>
            </div>
            <div
              className="bg-white py-4.5 px-4 rounded-xl h-13.75 gap-4 flex flex-row 
                  border border-transparent 
                  focus-within:border-blue-500 
                  transition"
            >
              <img src={pass} alt="" />
              <input
                placeholder="***********"
                {...register("password")}
                className="w-full outline-none focus:outline-none focus:ring-0 placeholder:text-[#CCC3D4] placeholder:font-inter placeholder:text-[16px] text-[#7B7483]"
                type={show ? "text" : "password"}
              />
              <img onClick={() => setShow(!show)} src={show ? hp : sp} alt="" />
            </div>
          </div>
          <button
            disabled={isSubmitting}
            className={`mt-6 h-15 flex flex-row gap-2 justify-center items-center rounded-xl w-full mb-4
            ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-[#4C1D95] to-[#340075]"
            }`}
          >
            <p className="font-inter text-[18px] font-semibold text-white">
              {isSubmitting ? "Signing in..." : "Sign In"}
            </p>
            {isSubmitting ? (
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <img src={arrow} alt="" />
            )}
          </button>
        </div>
        <div className="pt-8 pb-3">
          <div className="flex flex-row gap-4 justify-center items-center">
            <div className="h-px bg-[#CCC3D4] w-full"></div>
            <p className="font-inter text-[#7B7483] text-[10px] font-semibold leading-3.75 tracking-[1px] whitespace-nowrap ">
              OR CONTINUE WITH
            </p>
            <div className="h-px bg-[#CCC3D4] w-full"></div>
          </div>
          <div className="mt-8 flex flex-row justify-center items-center gap-4">
            <button
              type="button"
              className="flex flex-row justify-center items-center gap-2 h-10.5 bg-white rounded-xl backdrop-blur-2xl w-full drop-shadow-md"
            >
              <img src={google} alt="" />
              <p className="font-inter text-[12px] font-semibold leading-4 tracking-normal text-[#141B2B]">
                Google
              </p>
            </button>
            <button
              type="button"
              className="flex flex-row justify-center items-center gap-2 h-10.5 bg-white rounded-xl backdrop-blur-2xl w-full drop-shadow-md"
            >
              <img src={apple} alt="" />
              <p className="font-inter text-[12px] font-semibold leading-4 tracking-normal text-[#141B2B]">
                Apple
              </p>
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-row justify-center items-center gap-2">
          <p className="font-inter text-[14px] font-medium leading-5 tracking-normal text-[#7B7483]">
            New to CourseMap?{" "}
          </p>
          <p className="font-inter text-[14px] font-semibold leading-5 tracking-normal text-[#712AE2]">
            create account
          </p>
        </div>
      </form>
    </div>
  );
}

export default App;
