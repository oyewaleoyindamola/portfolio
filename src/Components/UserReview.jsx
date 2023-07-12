import React from "react";
import theMan from "../Assets/theMan.svg";
import stars from "../Assets/stars.svg";
const UserReview = () => {
  return (
    <div className=" mb-20">
      <div className=" flex flex-col justify-center items-center mt-8">
        <h1 className=" font-bold text-3xl mb-2"> User's Review</h1>
        <p>Collaborate over projects with your team and clients optimised</p>
        <p className=" mb-10">for mobile and tablet don't let slow</p>
      </div>
      <div className=" flex  justify-center gap-4">
        <div className=" ml-3">
          <h1 className=" ml-8 mt-5 font-bold text-2xl">
            {" "}
            What People Say About{" "}
          </h1>

          <div className=" mt-14 w-[28rem] shadow-md h-[10rem] bg-white ">
            <div className=" flex justify-between">
              <div className="  h-16 w-[15rem] mt-5 shadow-md">
              <h1 className=" font-bold">Davit millar</h1>
              <p>CEO, PParkivew int, Ltd</p>
              </div>
            
              <div>
              <img src={stars} alt="" className=" w-48" />
              </div>
              </div>
          
            <div>
             
              <br />
              <p className=" ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                nisl,
                <br />
                tincidunt commodo sit. Et, purus lectus odio cursus placerat
               
              </p>
            </div>
          </div>
        </div>

        <div className=" -z-40">
          <img src={theMan} alt="" className=" w-96 h-96 ml-[-4.5rem]" />
        </div>
      </div>
    </div>
  );
};

export default UserReview;
