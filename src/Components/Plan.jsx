import React from "react";
import tick from "../Assets/tick.svg";

const Plan = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center gap-7">
        <div className=" flex flex-col justify-center items-center w-full h-96 bg-[#EBEDFF]">
          <h1 className=" font-bold text-2xl mt-[-6rem]">
            Without Extra Charge Choose{" "}
          </h1>
          <h1 className=" font-bold text-2xl mb-8">Your Best Plan</h1>
          <div className=" h-16 w-52 flex gap-4 justify-center items-center rounded-md bg-white mt-">
            <button className="bg-[#FF5A05] rounded-md h-10 w-20 px-2 ml-4 text-white">
              Monthly
            </button>
            <button className="bg-[#FF5A051A] rounded-md h-10 w-20 px-2 mr-4 text-[#FF5A05]">
              Yearly
            </button>
          </div>
        </div>
        <div className=" flex flex-row gap-10">
          <div className=" bg-white h-[20rem] w-[20rem] flex flex-col items-center mt-[-8rem]">
            <div className=" bg-[#1F37FF] h-10 w-16 rounded-b-[389px]"></div>
            <h1 className=" font-bold text-2xl">Standard</h1>
                <h1 className=" text-[#1F37FF] font-bold text-[4rem]">$29</h1>
                <p>monthly pack</p>
                <div>
                    <div className=" flex gap-1">
                    <img src={tick} alt="" />
                    <p>256 GB SSD STORE</p>
                </div>
                <div className=" flex gap-1">
                    <img src={tick} alt="" />
                    <p>FULL UI KIT DOWNLOAD</p>
                </div>
                <div className=" flex gap-1">
                    <img src={tick} alt="" />
                    <p>PUBLIC API</p>
                </div>
                <div className=" flex gap-1">
                    <img src={tick} alt="" />
                    <p>FULL UI PACK DOWNLOAD</p>
                </div>
                <div className=" flex gap-1">
                    <img src={tick} alt="" />
                    <p>24/7 SUPPORT</p>
                </div>
                <button>
                    <p>Install Pack</p>
                </button>
            </div>
          </div>
            <div className=" bg-white h-[20rem] w-[18rem] flex flex-col items-center mt-[-8rem]">
                <div className=" bg-[#1F37FF] h-10 w-16 rounded-b-[389px]"></div>
                <h1 className=" font-bold text-2xl">Standard</h1>
                <h1 className=" text-[#1F37FF] font-bold text-[4rem]">$39</h1>
                <p>monthly pack</p>
                <div>
                    <div className=" flex gap-1">
                    <img src={tick} alt="" />
                    <p>256 GB SSD STORE</p>
                </div>
                <div className=" flex gap-1">
                    <img src={tick} alt="" />
                    <p>FULL UI KIT DOWNLOAD</p>
                </div>
                <div className=" flex gap-1">
                    <img src={tick} alt="" />
                    <p>PUBLIC API</p>
                </div>
                <div className=" flex gap-1">
                    <img src={tick} alt="" />
                    <p>FULL UI PACK DOWNLOAD</p>
                </div>
                <div className=" flex gap-1">
                    <img src={tick} alt="" />
                    <p>24/7 SUPPORT</p>
                </div>
                <button>
                    <p>Install Pack</p>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
